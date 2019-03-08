'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonSpeciesSchema extends Schema {
  up() {
    this.create('pokemon_species', (table) => {
      table.integer('id')
        .notNullable();
      table.string('name')
        .primary()
        .notNullable();
      table.string('display_name')
        .nullable();
      table.string('habitat')
        .references('name')
        .inTable('pokemon_habitat')
        .nullable();
      table.string('color')
        .references('name')
        .inTable('pokemon_color')
        .notNullable();
      table.string('form_switchable')
        .nullable();
      table.string('shape')
        .references('name')
        .inTable('pokemon_shape')
        .nullable();
      table.integer('base_happines')
        .nullable();
      table.string('flavor_text')
        .nullable();
      table.string('growth_rate')
        .nullable();
      table.integer('hatch_counter')
        .nullable();
      table.string('genera')
        .nullable();
      table.text('form_description')
        .nullable();
      table.string('gender_differences')
        .nullable();
      table.string('baby')
        .nullable();
      table.integer('gender')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_species');
  }
}

module.exports = PokemonSpeciesSchema;
