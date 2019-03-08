'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BerryHasFlavorSchema extends Schema {
  up() {
    this.create('berry_has_flavor', (table) => {
      table.string('berry_name')
        .references('name')
        .inTable('berry')
        .notNullable();
      table.string('flavor_name')
        .references('name')
        .inTable('berry_flavor')
        .notNullable();
      table.integer('potency')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('berry_has_flavor');
  }
}

module.exports = BerryHasFlavorSchema;
