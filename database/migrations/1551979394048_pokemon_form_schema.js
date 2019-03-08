'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonFormSchema extends Schema {
  up() {
    this.create('pokemon_form', (table) => {
      table.integer('id')
        .notNullable();
      table.string('name')
        .primary()
        .notNullable();
      table.string('display_name')
        .nullable();
      table.string('form_name')
        .nullable();
      table.string('form_display_name')
        .nullable();
      table.string('default_form')
        .nullable();
      table.string('mega')
        .nullable();
      table.integer('form_order')
        .nullable();
      table.string('battle_only')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_form');
  }
}

module.exports = PokemonFormSchema;
