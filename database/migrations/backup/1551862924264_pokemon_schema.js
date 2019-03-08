'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonSchema extends Schema {
  up() {
    this.create('pokemon', (table) => {
      table.increments('pok_id');
      table.string('pok_name')
        .notNullable();
      table.integer('pok_height')
        .nullable();
      table.integer('pok_weight')
        .nullable();
      table.integer('pok_base_experience')
        .nullable();
      table.double('latitude')
        .notNullable();
      table.double('longitude')
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon');
  }
}

module.exports = PokemonSchema;
