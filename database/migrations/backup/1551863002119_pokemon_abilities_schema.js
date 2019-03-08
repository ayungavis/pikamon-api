'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonAbilitiesSchema extends Schema {
  up() {
    this.create('pokemon_abilities', (table) => {
      table.increments('id');
      table.integer('pok_id')
        .unsigned()
        .references('pok_id')
        .inTable('pokemon')
        .notNullable();
      table.integer('abil_id')
        .unsigned()
        .references('abil_id')
        .inTable('abilities')
        .notNullable();
      table.boolean('is_hidden')
        .index();
      table.integer('slot')
        .unsigned()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_abilities');
  }
}

module.exports = PokemonAbilitiesSchema;
