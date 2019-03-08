'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MoveAilmentSchema extends Schema {
  up() {
    this.create('move_ailment', (table) => {
      table.string('name')
        .primary()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('move_ailment');
  }
}

module.exports = MoveAilmentSchema;
