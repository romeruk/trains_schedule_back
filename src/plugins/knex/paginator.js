'use strict';

const Knex = require('knex');
const EXCLUDED_ATTR_FROM_COUNT = ['order', 'columns', 'limit', 'offset', 'group', 'select'];

function paginate({ limit, skip, distinctWith }) {
  // eslint-disable-next-line no-invalid-this
  const countByQuery = this.clone();
  const offset = skip ?? 0;

  /**
   * Remove statements that will make things bad with count
   * query, for example `orderBy`
   */
  // eslint-disable-next-line no-underscore-dangle
  countByQuery._statements = countByQuery._statements.filter(statement => {
    return !EXCLUDED_ATTR_FROM_COUNT.includes(statement.grouping);
  });

  if (distinctWith) {
    countByQuery.countDistinct(`${distinctWith} as total`);
  } else {
    countByQuery.count('* as total');
  }

  // eslint-disable-next-line no-invalid-this
  return Promise.all([countByQuery.first(), this.offset(offset).limit(limit)]).then(
    ([counter, result]) => {
      const total = Number(counter.total);
      return {
        data: result,
        total
      };
    }
  );
}

module.exports = function setupPagination(knex) {
  Knex.QueryBuilder.extend('paginate', paginate);
};
