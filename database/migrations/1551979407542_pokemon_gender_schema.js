'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonGenderSchema extends Schema {
  up() {
    this.create('pokemon_gender', (table) => {
      table.string('name')
        .primary()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_gender');
  }
}

module.exports = PokemonGenderSchema;
