'use strict';

function BoardRepo(fastify) {
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

      if (departureStation && arrivalStation && departureDate) {
        query
          .leftJoin({ shd: 'schedule' }, 't.train_id', '=', 'shd.train_id')
          .leftJoin({ shd2: 'schedule' }, 't.train_id', '=', 'shd2.train_id')
          .where('shd.station_id', '=', departureStation)
          .andWhere('shd2.station_id', '=', arrivalStation)
          .andwhereRaw(`sh.departure_time::timestamp::date = '${departureDate}'`);
      } else {
        query.whereRaw(
          "sh.departure_time >= current_timestamp and sh.departure_time < (date_trunc('day', current_timestamp) + interval '1 day' - interval '1 second')"
        );
      }
      const rows = await query;

      return rows;
    };

  return {
    getBoardData
  };
}

module.exports = { BoardRepo };
