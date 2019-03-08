'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BerryFlavorSchema extends Schema {
  up() {
    this.create('berry_flavor', (table) => {
      table.string('name')
        .primary()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('berry_flavor');
  }
}

module.exports = BerryFlavorSchema;
