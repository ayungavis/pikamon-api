'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MoveLearnMethodSchema extends Schema {
  up() {
    this.create('move_learn_method', (table) => {
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
    this.drop('move_learn_method');
  }
}

module.exports = MoveLearnMethodSchema;
