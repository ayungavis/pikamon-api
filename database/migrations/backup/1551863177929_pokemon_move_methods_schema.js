'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonMoveMethodsSchema extends Schema {
  up() {
    this.create('pokemon_move_methods', (table) => {
      table.increments('method_id');
      table.string('method_name')
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_move_methods');
  }
}

module.exports = PokemonMoveMethodsSchema;
