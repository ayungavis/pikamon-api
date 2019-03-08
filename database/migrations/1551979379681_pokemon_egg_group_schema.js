'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonEggGroupSchema extends Schema {
  up() {
    this.create('pokemon_egg_group', (table) => {
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
    this.drop('pokemon_egg_group');
  }
}

module.exports = PokemonEggGroupSchema;
