'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MovesSchema extends Schema {
  up() {
    this.create('moves', (table) => {
      table.increments('move_id');
      table.string('move_name')
        .notNullable();
      table.integer('type_id')
        .unsigned()
        .references('type_id')
        .inTable('types');
      table.integer('move_power')
        .nullable();
      table.integer('move_pp')
        .nullable();
      table.integer('move_accuracy')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('moves');
  }
}

module.exports = MovesSchema;
