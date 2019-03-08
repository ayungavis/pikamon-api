'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonHasFormSchema extends Schema {
  up() {
    this.create('pokemon_has_form', (table) => {
      table.string('species_name')
        .references('name')
        .inTable('pokemon_species')
        .notNullable();
      table.string('form_name')
        .notNullable();
      table.string('default_form')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_has_form');
  }
}

module.exports = PokemonHasFormSchema;
