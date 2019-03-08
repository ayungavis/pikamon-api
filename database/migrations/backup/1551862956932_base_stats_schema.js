'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BaseStatsSchema extends Schema {
  up() {
    this.create('base_stats', (table) => {
      table.integer('pok_id')
        .unsigned()
        .references('pok_id')
        .inTable('pokemon');
      table.integer('b_hp')
        .nullable();
      table.integer('b_atk')
        .nullable();
      table.integer('b_def')
        .nullable();
      table.integer('b_sp_atk')
        .nullable();
      table.integer('b_sp_def')
        .nullable();
      table.integer('b_speed')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('base_stats');
  }
}

module.exports = BaseStatsSchema;
