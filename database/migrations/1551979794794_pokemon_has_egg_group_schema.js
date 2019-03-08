'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonHasEggGroupSchema extends Schema {
  up() {
    this.create('pokemon_has_egg_group', (table) => {
      table.string('pokemon_name')
        .references('name')
        .inTable('pokemon_species')
        .notNullable();
      table.string('egg_group_name')
        .references('name')
        .inTable('pokemon_egg_group')
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_has_egg_group');
  }
}

module.exports = PokemonHasEggGroupSchema;
