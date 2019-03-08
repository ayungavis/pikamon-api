'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonShapeSchema extends Schema {
  up() {
    this.create('pokemon_shape', (table) => {
      table.integer('id')
        .notNullable();
      table.string('name')
        .primary()
        .notNullable();
      table.string('display_name')
        .nullable();
      table.string('awesome_name')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_shape');
  }
}

module.exports = PokemonShapeSchema;
