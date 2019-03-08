'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonHasMoveSchema extends Schema {
  up() {
    this.create('pokemon_has_move', (table) => {
      table.string('pokemon_name')
        .references('name')
        .inTable('pokemon_base')
        .notNullable();
      table.string('move_name')
        .references('name')
        .inTable('move')
        .notNullable();
      table.string('move_learn_method')
        .references('name')
        .inTable('move_learn_method')
        .notNullable();
      table.integer('level')
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_has_move');
  }
}

module.exports = PokemonHasMoveSchema;
