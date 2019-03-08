'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonMovesSchema extends Schema {
  up() {
    this.create('pokemon_moves', (table) => {
      table.increments('id');
      table.integer('pok_id')
        .unsigned()
        .references('pok_id')
        .inTable('pokemon');
      table.integer('version_group_id')
        .unsigned()
        .references('version_id')
        .inTable('version_groups');
      table.integer('move_id')
        .unsigned()
        .references('move_id')
        .inTable('moves');
      table.integer('method_id')
        .unsigned()
        .references('method_id')
        .inTable('pokemon_move_methods');
      table.integer('level')
        .unsigned()
        .index()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_moves');
  }
}

module.exports = PokemonMovesSchema;
