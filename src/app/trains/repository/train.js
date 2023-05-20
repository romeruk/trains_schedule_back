'use strict';

function TrainRepo(fastify) {
  const createTrain =
    knex =>
    async ({ body }) => {
      const query = knex('train').insert(body).returning('*');
      const [response] = await query;
      return response;
    };

  const getTrain =
    knex =>
    async ({ trainId }) => {
      const query = knex('train')
        .select()
        .from({ t: 'train' })
        .leftJoin({ r: 'route' }, 'r.route_id', '=', 't.route_id')
        .where('train_id', '=', trainId);
      const [response] = await query;
      return response;
    };

  const getTrainStations =
    knex =>
    async ({ trainId }) => {
      const query = knex
        .select(
          't.train_no',
          'r.route_title',
          'sh.departure_time',
          'sh.arrival_time',
          'st.station_title',
          'sh.station_id'
        )
        .from({ t: 'train' })
        .leftJoin({ r: 'route' }, 'r.route_id', '=', 't.route_id')
        .leftJoin({ sh: 'schedule' }, 'sh.train_id', '=', 't.train_id')
        .leftJoin({ st: 'station' }, 'st.station_id', '=', 'sh.station_id')
        .where('t.train_id', '=', trainId);

      const rows = await query;

      return rows;
    };

  const deleteTrain =
    knex =>
    async ({ trainId }) => {
      const query = knex('train').returning('*').where('train_id', '=', trainId).del();
      const [response] = await query;

      return response;
    };

  const updateTrain =
    knex =>
    async ({ trainId, body }) => {
      const query = knex('train').where('train_id', '=', trainId).update(body).returning('*');
      const [response] = await query;

      return response;
    };

  const getAllTrains =
    knex =>
    async ({ paginateData }) => {
      const query = knex('train').select().paginate(paginateData);
      const rows = await query;

      return rows;
    };

  const createTrainSchedule =
    knex =>
    async ({ body, trainId, routeId }) => {
      const rows = await knex.transaction(async trx => {
        await knex('schedule')
          .del()
          .where('train_id', '=', trainId)
          .andWhere('route_id', '=', routeId)
          .transacting(trx);

        return await knex('schedule').insert(body).returning('*').transacting(trx);
      });

      return rows;
    };

  // 		left join schedule shd on t.train_id = shd.train_id
  // left join schedule shd2 on t.train_id = shd2.train_id
  // where shd.station_id = 'fa5abd56-6ba9-4690-a8d0-bd182a7f31ed' and shd2.station_id = '3c929e75-e7ac-43c0-9af6-2d7a8b1e71f0'
  // and shd.departure_time >= current_timestamp

  const getBoardData =
    knex =>
    async ({ departureStation, arrivalStation, departureDate }) => {
      const maxScheduleOrderSelect = knex
        .select('train_id', knex.raw('MAX(schedule_order) as end_station_number'))
        .from('schedule')
        .groupBy('train_id');

      const leftJoinSelect = knex
        .select('shl.train_id', 'shl.station_id', 'shl.schedule_order', 'shl.arrival_time')
        .from({ shl: 'schedule', numt: maxScheduleOrderSelect })
        .whereRaw('shl.train_id = numt.train_id and shl.schedule_order = numt.end_station_number');

      const query = knex
        .select(
          't.train_id',
          't.train_no',
          'sh.departure_time',
          'sh2.arrival_time',
          'st.station_title as departure_start_station',
          'st2.station_title as arrival_end_station'
        )
        .from({ t: 'train' })
        .leftJoin('schedule as sh', function () {
          // eslint-disable-next-line no-invalid-this
          this.on('t.train_id', '=', 'sh.train_id');
          // eslint-disable-next-line no-invalid-this
          this.andOnVal('sh.schedule_order', '=', 1);
        })
        .leftJoin({ sh2: leftJoinSelect }, 't.train_id ', '=', 'sh2.train_id')
        .leftJoin({ st: 'station' }, 'sh.station_id', '=', 'st.station_id')
        .leftJoin({ st2: 'station' }, 'sh2.station_id', '=', 'st2.station_id');

      if (departureStation && arrivalStation) {
        query
          .leftJoin({ shd: 'schedule' }, 't.train_id', '=', 'shd.train_id')
          .leftJoin({ shd2: 'schedule' }, 't.train_id', '=', 'shd2.train_id')
          .where('shd.station_id', '=', departureStation)
          .andWhere('shd2.station_id', '=', arrivalStation);

        if (departureDate) {
          query.where('shd.departure_time', '>=', departureDate);
        } else {
          query.whereRaw('shd.departure_time >= current_timestamp');
        }
      } else {
        query.whereRaw(
          "sh.departure_time >= current_timestamp and sh.departure_time < (date_trunc('day', current_timestamp) + interval '1 day' - interval '1 second')"
        );
      }

      const rows = await query;

      return rows;
    };

  return {
    createTrain,
    getTrain,
    getTrainStations,
    deleteTrain,
    updateTrain,
    getAllTrains,
    createTrainSchedule,
    getBoardData
  };
}

module.exports = { TrainRepo };
