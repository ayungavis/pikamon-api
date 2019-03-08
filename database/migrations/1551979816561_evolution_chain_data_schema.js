'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class EvolutionChainDataSchema extends Schema {
  up() {
    this.create('evolution_chain_data', (table) => {
      table.integer('evolution_chain_id')
        .unsigned()
        .references('id')
        .inTable('evolution_chain')
        .notNullable();
      table.string('species')
        .references('name')
        .inTable('pokemon_species')
        .notNullable();
      table.integer('is_baby')
        .nullable();
      table.string('evolves_into_species')
        .references('name')
        .inTable('pokemon_species')
        .notNullable();
      table.integer('min_level')
        .nullable();
      table.integer('min_beauty')
        .nullable();
      table.string('time_of_day')
        .nullable();
      table.integer('gender')
        .nullable();
      table.integer('relative_physical_stats')
        .nullable();
      table.integer('needs_overworld_rain')
        .nullable();
      table.integer('turn_upside_down')
        .nullable();
      table.string('item')
        .references('name')
        .inTable('item')
        .nullable();
      table.string('evolution_trigger')
        .references('name')
        .inTable('evolution_trigger')
        .nullable();
      table.string('known_move_type')
        .references('name')
        .inTable('pokemon_type')
        .nullable();
      table.integer('min_affection')
        .nullable();
      table.string('party_type')
        .references('name')
        .inTable('pokemon_type')
        .nullable();
      table.string('trade_species')
        .references('name')
        .inTable('pokemon_species')
        .nullable();
      table.integer('min_happiness')
        .nullable();
      table.string('held_item')
        .references('name')
        .inTable('item')
        .nullable();
      table.string('known_move')
        .references('name')
        .inTable('move')
        .nullable();
      table.string('location')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('evolution_chain_data');
  }
}

module.exports = EvolutionChainDataSchema;
