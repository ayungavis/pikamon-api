'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonTypeSchema extends Schema {
  up() {
    this.create('pokemon_type', (table) => {
      table.string('name')
        .primary()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_type');
  }
}

module.exports = PokemonTypeSchema;
