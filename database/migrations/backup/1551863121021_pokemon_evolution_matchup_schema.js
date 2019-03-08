'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonEvolutionMatchupSchema extends Schema {
  up() {
    this.create('pokemon_evolution_matchup', (table) => {
      table.increments('pok_id')
        .unsigned()
        .references('pok_id')
        .inTable('pokemon');
      table.integer('evolves_from_species_id')
        .unsigned()
        .index()
        .nullable();
      table.integer('hab_id')
        .unsigned()
        .references('hab_id')
        .inTable('pokemon_habitats');
      table.integer('gender_rate')
        .notNullable();
      table.integer('capture_rate')
        .notNullable();
      table.integer('base_happiness')
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_evolution_matchup');
  }
}

module.exports = PokemonEvolutionMatchupSchema;
