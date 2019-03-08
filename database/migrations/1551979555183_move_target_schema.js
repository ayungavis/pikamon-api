'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MoveTargetSchema extends Schema {
  up() {
    this.create('move_target', (table) => {
      table.integer('id')
        .notNullable();
      table.string('name')
        .primary()
        .notNullable();
      table.string('display_name')
        .nullable();
      table.text('description')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('move_target');
  }
}

module.exports = MoveTargetSchema;
