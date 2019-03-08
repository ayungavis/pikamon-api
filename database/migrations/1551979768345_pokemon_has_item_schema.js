'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonHasItemSchema extends Schema {
  up() {
    this.create('pokemon_has_item', (table) => {
      table.string('pokemon_name')
        .references('name')
        .inTable('pokemon_base')
        .notNullable();
      table.string('item_name')
        .references('name')
        .inTable('item')
        .notNullable();
      table.integer('rarity')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_has_item');
  }
}

module.exports = PokemonHasItemSchema;
