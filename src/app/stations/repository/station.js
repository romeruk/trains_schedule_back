'use strict';

function StationRepo(fastify) {
  const createStation =
    knex =>
    async ({ body }) => {
      const query = knex('station').insert(body).returning('*');
      const [response] = await query;
      return response;
    };

  const deleteStation =
    knex =>
    async ({ stationId }) => {
      const query = knex('station').where('station_id', '=', stationId).del().returning('*');
      const [response] = await query;
      return response;
    };

  const getStation =
    knex =>
    async ({ stationId }) => {
      const query = knex('station').select().where('station_id', '=', stationId);
      const [response] = await query;
      return response;
    };

  const updateStation =
    knex =>
    async ({ stationId, body }) => {
      const query = knex('station').update(body).where('station_id', '=', stationId).returning('*');
      const [response] = await query;
      return response;
    };

  const getAllStations =
    knex =>
    async ({ paginateData }) => {
      const query = knex('station').select().paginate(paginateData);

      const rows = await query;
      return rows;
    };
  return { createStation, deleteStation, getStation, getAllStations, updateStation };
}

module.exports = { StationRepo };
