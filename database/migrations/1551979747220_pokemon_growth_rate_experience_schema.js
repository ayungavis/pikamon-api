'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonGrowthRateExperienceSchema extends Schema {
  up() {
    this.create('pokemon_growth_rate_experience', (table) => {
      table.string('growth_rate_name')
        .references('name')
        .inTable('pokemon_growth_rate')
        .notNullable();
      table.integer('level')
        .notNullable();
      table.integer('experience')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_growth_rate_experience');
  }
}

module.exports = PokemonGrowthRateExperienceSchema;
