'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BerryFirmnessSchema extends Schema {
  up() {
    this.create('berry_firmness', (table) => {
      table.string('name')
        .primary()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('berry_firmness');
  }
}

module.exports = BerryFirmnessSchema;
