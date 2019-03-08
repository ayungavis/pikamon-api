'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TypeEfficacySchema extends Schema {
  up() {
    this.create('type_efficacy', (table) => {
      table.increments('id');
      table.integer('damage_type_id')
        .unsigned()
        .index()
        .notNullable();
      table.integer('target_type_id')
        .unsigned()
        .index()
        .notNullable();
      table.integer('damage_factor')
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('type_efficacy');
  }
}

module.exports = TypeEfficacySchema;
