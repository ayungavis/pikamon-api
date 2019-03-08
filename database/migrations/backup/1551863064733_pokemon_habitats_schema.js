'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonHabitatsSchema extends Schema {
  up() {
    this.create('pokemon_habitats', (table) => {
      table.increments('hab_id');
      table.string('hab_name')
        .notNullable();
      table.text('hab_descript')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_habitats');
  }
}

module.exports = PokemonHabitatsSchema;
