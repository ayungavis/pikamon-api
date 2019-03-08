'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonEvolutionSchema extends Schema {
  up() {
    this.create('pokemon_evolution', (table) => {
      table.increments('evol_id');
      table.integer('evolved_species_id')
        .unsigned()
        .references('pok_id')
        .inTable('pokemon_evolution_matchup');
      table.integer('evol_minimum_level')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_evolution');
  }
}

module.exports = PokemonEvolutionSchema;
