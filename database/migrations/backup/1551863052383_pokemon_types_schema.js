'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonTypesSchema extends Schema {
  up() {
    this.create('pokemon_types', (table) => {
      table.increments('id');
      table.integer('pok_id')
        .unsigned()
        .references('pok_id')
        .inTable('pokemon')
        .notNullable();
      table.integer('type_id')
        .unsigned()
        .references('type_id')
        .inTable('types')
        .notNullable();
      table.integer('slot')
        .unsigned()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_types');
  }
}

module.exports = PokemonTypesSchema;
