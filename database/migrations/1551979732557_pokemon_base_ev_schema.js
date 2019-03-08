'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonBaseEvSchema extends Schema {
  up() {
    this.create('pokemon_base_ev', (table) => {
      table.string('pokemon_name')
        .primary()
        .references('name')
        .inTable('pokemon_base')
        .notNullable();
      table.integer('hp')
        .nullable();
      table.integer('attack')
        .nullable();
      table.integer('defense')
        .nullable();
      table.integer('special_attack')
        .nullable();
      table.integer('special_defense')
        .nullable();
      table.integer('speed')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_base_ev');
  }
}

module.exports = PokemonBaseEvSchema;
