'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonCharacteristicSchema extends Schema {
  up() {
    this.create('pokemon_characteristic', (table) => {
      table.increments('id');
      table.string('description')
        .nullable();
      table.string('highest_stat')
        .nullable();
      table.text('possible_values')
        .nullable();
      table.integer('gene_modulo')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_characteristic');
  }
}

module.exports = PokemonCharacteristicSchema;
