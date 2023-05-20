/* eslint-disable unicorn/filename-case */
'use strict';

exports.up = async function (knex) {
  await knex.schema.createTable('route', table => {
    table.uuid('route_id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
    table.string('route_title').unique().notNullable();
    table.timestamps(true, true);
  });

  await knex.schema.createTable('train', table => {
    table.uuid('train_id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
    table.string('train_no').unique().notNullable();
    table.uuid('route_id').references('route_id').inTable('route');
    table.timestamps(true, true);
  });

  await knex.schema.createTable('station', table => {
    table.uuid('station_id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
    table.string('station_title').unique().notNullable();
    table.timestamps(true, true);
  });

  await knex.schema.createTable('schedule', table => {
    table.uuid('train_id').references('train_id').inTable('train');
    table.uuid('route_id').references('route_id').inTable('route');
    table.uuid('station_id').references('station_id').inTable('station');
    table.integer('schedule_order').notNullable();
    table.timestamp('departure_time');
    table.timestamp('arrival_time');
    table.timestamps(true, true);
    table.primary(['train_id', 'route_id', 'station_id']);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable('schedule');
  await knex.schema.dropTable('train');
  await knex.schema.dropTable('route');
  await knex.schema.dropTable('station');
};
