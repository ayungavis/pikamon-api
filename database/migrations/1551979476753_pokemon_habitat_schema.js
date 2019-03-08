'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonHabitatSchema extends Schema {
  up() {
    this.create('pokemon_habitat', (table) => {
      table.integer('id')
        .notNullable();
      table.string('name')
        .primary()
        .notNullable();
      table.string('display_name')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_habitat');
  }
}

module.exports = PokemonHabitatSchema;
