'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TypesSchema extends Schema {
  up() {
    this.create('types', (table) => {
      table.increments('type_id');
      table.string('type_name')
        .notNullable();
      table.integer('damage_type_id')
        .unsigned()
        .references('damage_type_id')
        .inTable('type_efficacy')
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('types');
  }
}

module.exports = TypesSchema;
