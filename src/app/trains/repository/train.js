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
    async ({ trainId, routeId }) => {
      const query = knex
        .select(
          'sh.departure_time',
          'sh.arrival_time',
          'st.station_title',
          'sh.station_id',
          'sh.schedule_order'
        )
        .from({ sh: 'schedule' })
        .leftJoin({ st: 'station' }, 'sh.station_id', '=', 'st.station_id')
        .where('sh.train_id', '=', trainId)
        .andWhere('sh.route_id', '=', routeId)
        .orderBy('sh.schedule_order', 'asc');

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
      const query = knex()
        .select()
        .from({ t: 'train' })
        .leftJoin({ r: 'route' }, 't.route_id', '=', 'r.route_id')
        .paginate(paginateData);
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

  const deleteSingleSchedule =
    knex =>
    async ({ trainId, routeId, stationId }) => {
      const query = knex('schedule')
        .where('train_id', '=', trainId)
        .andWhere('route_id', '=', routeId)
        .andWhere('station_id', '=', stationId)
        .del()
        .returning('*');

      const [response] = await query;

      return response;
    };

  const getLastScheduleRecord =
    knex =>
    async ({ trainId, routeId }) => {
      const query = knex
        .select()
        .from('schedule')
        .where('train_id', '=', trainId)
        .andWhere('route_id', '=', routeId)
        .orderBy('schedule_order', 'desc')
        .limit(1);

      const [response] = await query;

      return response;
    };

  const createSingleSchedule =
    knex =>
    async ({ body }) => {
      const query = knex('schedule').insert(body).returning('*');

      const [response] = await query;

      return response;
    };

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
    deleteSingleSchedule,
    getLastScheduleRecord,
    createSingleSchedule,
    createTrainSchedule,
    getBoardData
  };
}

module.exports = { TrainRepo };
