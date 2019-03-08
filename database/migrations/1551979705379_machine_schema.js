'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MachineSchema extends Schema {
  up() {
    this.create('machine', (table) => {
      table.increments('id');
      table.string('item_name')
        .references('name')
        .inTable('item')
        .notNullable();
      table.string('move_name')
        .references('name')
        .inTable('move')
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('machine');
  }
}

module.exports = MachineSchema;
