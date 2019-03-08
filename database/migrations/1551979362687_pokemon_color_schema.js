'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonColorSchema extends Schema {
  up() {
    this.create('pokemon_color', (table) => {
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
    this.drop('pokemon_color');
  }
}

module.exports = PokemonColorSchema;
