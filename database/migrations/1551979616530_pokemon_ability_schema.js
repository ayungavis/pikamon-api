'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonAbilitySchema extends Schema {
  up() {
    this.create('pokemon_ability', (table) => {
      table.integer('id')
        .notNullable();
      table.string('name')
        .primary()
        .notNullable();
      table.string('display_name')
        .nullable();
      table.text('flavor_text')
        .nullable();
      table.text('effect')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_ability');
  }
}

module.exports = PokemonAbilitySchema;
