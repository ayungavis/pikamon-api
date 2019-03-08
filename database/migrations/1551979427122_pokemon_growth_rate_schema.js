'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonGrowthRateSchema extends Schema {
  up() {
    this.create('pokemon_growth_rate', (table) => {
      table.integer('id')
        .notNullable();
      table.string('name')
        .primary()
        .notNullable();
      table.text('description')
        .nullable();
      table.text('formula')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_growth_rate');
  }
}

module.exports = PokemonGrowthRateSchema;
