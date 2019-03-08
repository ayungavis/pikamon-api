'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BerrySchema extends Schema {
  up() {
    this.create('berry', (table) => {
      table.integer('id')
        .notNullable();
      table.string('name')
        .primary()
        .notNullable();
      table.integer('max_harvest')
        .nullable();
      table.integer('soil_dryness')
        .nullable();
      table.integer('smoothness')
        .nullable();
      table.string('item_name')
        .references('name')
        .inTable('item')
        .nullable();
      table.string('firmness')
        .references('name')
        .inTable('berry_firmness')
        .nullable();
      table.integer('growth_time')
        .nullable();
      table.integer('size')
        .nullable();
      table.integer('natural_gift_power')
        .nullable();
      table.string('natural_gift_type')
        .references('name')
        .inTable('pokemon_type')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('berry');
  }
}

module.exports = BerrySchema;
