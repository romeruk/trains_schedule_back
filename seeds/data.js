/* eslint-disable camelcase */
/* eslint-disable unicorn/filename-case */
'use strict';
const crypto = require('crypto');

// eslint-disable-next-line complexity
function dateAdd(date, interval, units) {
  if (!(date instanceof Date)) return undefined;
  let ret = new Date(date); // don't change original date
  const checkRollover = function () {
    if (ret.getDate() != date.getDate()) ret.setDate(0);
  };
  switch (String(interval).toLowerCase()) {
    case 'year':
      ret.setFullYear(ret.getFullYear() + units);
      checkRollover();
      break;
    case 'quarter':
      ret.setMonth(ret.getMonth() + 3 * units);
      checkRollover();
      break;
    case 'month':
      ret.setMonth(ret.getMonth() + units);
      checkRollover();
      break;
    case 'week':
      ret.setDate(ret.getDate() + 7 * units);
      break;
    case 'day':
      ret.setDate(ret.getDate() + units);
      break;
    case 'hour':
      ret.setTime(ret.getTime() + units * 3600000);
      break;
    case 'minute':
      ret.setTime(ret.getTime() + units * 60000);
      break;
    case 'second':
      ret.setTime(ret.getTime() + units * 1000);
      break;
    default:
      ret = undefined;
      break;
  }
  return ret;
}

function genSchedule(train, stations, route, addDaysFromNow = 2) {
  let departure_time = dateAdd(new Date(), 'day', addDaysFromNow);
  let arrival_time;

  const scheduleTrain = stations.map((station, index) => {
    if (index) {
      arrival_time = dateAdd(departure_time, 'minute', 60);
      departure_time = dateAdd(arrival_time, 'minute', 15);
    }

    if (index === stations.length - 1) {
      departure_time = undefined;
    }

    return {
      train_id: train.train_id,
      route_id: route.route_id,
      station_id: station.station_id,
      departure_time,
      arrival_time,
      schedule_order: index + 1
    };
  });

  return scheduleTrain;
}
// road 1
const Київ = {
  station_id: crypto.randomUUID(),
  station_title: 'Київ'
};

const Козятин = {
  station_id: crypto.randomUUID(),
  station_title: 'Козятин-1'
};

const Вінниця = {
  station_id: crypto.randomUUID(),
  station_title: 'Вінниця'
};

const Жмеринка = {
  station_id: crypto.randomUUID(),
  station_title: 'Жмеринка'
};

const Вапнярка = {
  station_id: crypto.randomUUID(),
  station_title: 'Вапнярка'
};

const Крижопіль = {
  station_id: crypto.randomUUID(),
  station_title: 'Крижопіль'
};

const Рудниця = {
  station_id: crypto.randomUUID(),
  station_title: 'Рудниця'
};

const Кодима = {
  station_id: crypto.randomUUID(),
  station_title: 'Кодима'
};

const Подільськ = {
  station_id: crypto.randomUUID(),
  station_title: 'Подільськ'
};

const Одеса = {
  station_id: crypto.randomUUID(),
  station_title: 'Одеса'
};

// road 2
const Славське = {
  station_id: crypto.randomUUID(),
  station_title: 'Славське'
};

const Воловець = {
  station_id: crypto.randomUUID(),
  station_title: 'Воловець'
};

const Свалява = {
  station_id: crypto.randomUUID(),
  station_title: 'Свалява'
};

const Мукачеве = {
  station_id: crypto.randomUUID(),
  station_title: 'Мукачеве'
};

// road 3

const Луцьк = {
  station_id: crypto.randomUUID(),
  station_title: 'Луцьк'
};

const Ківерці = {
  station_id: crypto.randomUUID(),
  station_title: 'Ківерці'
};

const Клевань = {
  station_id: crypto.randomUUID(),
  station_title: 'Клевань'
};

const Рівне = {
  station_id: crypto.randomUUID(),
  station_title: 'Рівне'
};

const Здолбунів = {
  station_id: crypto.randomUUID(),
  station_title: 'Здолбунів'
};

const Дубно = {
  station_id: crypto.randomUUID(),
  station_title: 'Дубно'
};

const Радивилів = {
  station_id: crypto.randomUUID(),
  station_title: 'Радивилів'
};

const stations = [
  Київ,
  Козятин,
  Вінниця,
  Жмеринка,
  Вапнярка,
  Крижопіль,
  Рудниця,
  Кодима,
  Подільськ,
  Одеса,
  Славське,
  Воловець,
  Свалява,
  Мукачеве,
  Луцьк,
  Ківерці,
  Клевань,
  Рівне,
  Здолбунів,
  Дубно,
  Радивилів
];

const train1Road = [
  Київ,
  Козятин,
  Вінниця,
  Жмеринка,
  Вапнярка,
  Крижопіль,
  Рудниця,
  Кодима,
  Подільськ,
  Одеса
];

const train2Road = [Вінниця, Жмеринка, Вапнярка, Крижопіль];

const train3Road = [Славське, Воловець, Свалява, Мукачеве];

const train4Road = [Луцьк, Ківерці, Клевань, Рівне, Здолбунів, Дубно, Радивилів];

const train5Road = [Ківерці, Клевань, Рівне, Здолбунів, Дубно];

const train6Road = [Здолбунів, Рівне, Клевань, Ківерці];

const train7Road = [Подільськ, Кодима, Рудниця, Крижопіль];

const route1 = {
  route_id: crypto.randomUUID(),
  route_title: 'Київ - Одеса'
};

const route2 = {
  route_id: crypto.randomUUID(),
  route_title: 'Вінниця - Крижопіль'
};

const route3 = {
  route_id: crypto.randomUUID(),
  route_title: 'Славське - Мукачеве'
};

const route4 = {
  route_id: crypto.randomUUID(),
  route_title: 'Луцьк - Радивилів'
};

const route5 = {
  route_id: crypto.randomUUID(),
  route_title: 'Ківерці - Дубно'
};

const route6 = {
  route_id: crypto.randomUUID(),
  route_title: 'Здолбунів - Ківерці'
};

const route7 = {
  route_id: crypto.randomUUID(),
  route_title: 'Крижопіль - Подільськ'
};

const routes = [route1, route2, route3, route4, route5, route6, route7];

const train1 = {
  train_id: crypto.randomUUID(),
  train_no: '100A',
  route_id: route1.route_id
};

const train2 = {
  train_id: crypto.randomUUID(),
  train_no: '200B',
  route_id: route2.route_id
};

const train3 = {
  train_id: crypto.randomUUID(),
  train_no: '300C',
  route_id: route3.route_id
};

const train4 = {
  train_id: crypto.randomUUID(),
  train_no: '400D',
  route_id: route4.route_id
};

const train5 = {
  train_id: crypto.randomUUID(),
  train_no: '500E',
  route_id: route5.route_id
};

const train6 = {
  train_id: crypto.randomUUID(),
  train_no: '600F',
  route_id: route6.route_id
};

const train7 = {
  train_id: crypto.randomUUID(),
  train_no: '700G',
  route_id: route7.route_id
};

const train8 = {
  train_id: crypto.randomUUID(),
  train_no: '800G',
  route_id: route7.route_id
};

const trains = [train1, train2, train3, train4, train5, train6, train7, train8];

const scheduleTrain1 = genSchedule(train1, train1Road, route1, 3);
const scheduleTrain2 = genSchedule(train2, train2Road, route2, 1);
const scheduleTrain3 = genSchedule(train3, train3Road, route3, 2);
const scheduleTrain4 = genSchedule(train4, train4Road, route4, 2);
const scheduleTrain5 = genSchedule(train5, train5Road, route5, 2);
const scheduleTrain6 = genSchedule(train6, train6Road, route6, 1);
const scheduleTrain7 = genSchedule(train7, train7Road, route7, 1);
const scheduleTrain8 = genSchedule(train8, train7Road, route7, 3);

exports.seed = async knex => {
  await knex.table('schedule').del();
  await knex.table('train').del();
  await knex.table('route').del();
  await knex.table('station').del();

  await knex.table('route').insert(routes);

  await knex.table('station').insert(stations);

  await knex.table('train').insert(trains);

  await knex
    .table('schedule')
    .insert([
      ...scheduleTrain1,
      ...scheduleTrain2,
      ...scheduleTrain3,
      ...scheduleTrain4,
      ...scheduleTrain5,
      ...scheduleTrain6,
      ...scheduleTrain7,
      ...scheduleTrain8
    ]);
};
