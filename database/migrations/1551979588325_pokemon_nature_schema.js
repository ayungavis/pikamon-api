'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonNatureSchema extends Schema {
  up() {
    this.create('pokemon_nature', (table) => {
      table.integer('id')
        .notNullable();
      table.string('name')
        .primary()
        .notNullable();
      table.string('display_name')
        .nullable();
      table.string('increased_stat')
        .nullable();
      table.string('decreased_stat')
        .nullable();
      table.string('likes_flavor')
        .nullable();
      table.string('hates_flavor')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_nature');
  }
}

module.exports = PokemonNatureSchema;
