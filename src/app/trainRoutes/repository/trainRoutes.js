'use strict';

function TrainRoutesRepo(fastify) {
  const createRoute =
    knex =>
    async ({ body }) => {
      const query = knex('route').insert(body).returning('*');
      const [response] = await query;
      return response;
    };

  const deleteRoute =
    knex =>
    async ({ routeId }) => {
      const query = knex('route').where('route_id', '=', routeId).del().returning('*');
      const [response] = await query;
      return response;
    };

  const getRoute =
    knex =>
    async ({ routeId }) => {
      const query = knex('route').select().where('route_id', '=', routeId);
      const [response] = await query;
      return response;
    };

  const updateRoute =
    knex =>
    async ({ body, routeId }) => {
      const query = knex('route').update(body).where('route_id', '=', routeId).returning('*');
      const [response] = await query;
      return response;
    };

  const getAllRoutes =
    knex =>
    async ({ paginateData }) => {
      const query = knex('route').select().paginate(paginateData);
      const rows = await query;
      return rows;
    };

  return { createRoute, deleteRoute, getRoute, updateRoute, getAllRoutes };
}

module.exports = { TrainRoutesRepo };
