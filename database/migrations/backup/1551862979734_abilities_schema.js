'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AbilitiesSchema extends Schema {
  up() {
    this.create('abilities', (table) => {
      table.increments('abil_id');
      table.string('abil_name')
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('abilities');
  }
}

module.exports = AbilitiesSchema;
