'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PokemonBaseSchema extends Schema {
  up() {
    this.create('pokemon_base', (table) => {
      table.integer('id')
        .notNullable();
      table.string('name')
        .primary()
        .notNullable();
      table.integer('hp')
        .nullable();
      table.integer('attack')
        .nullable();
      table.integer('defense')
        .nullable();
      table.integer('special_attack')
        .nullable();
      table.integer('special_defense')
        .nullable();
      table.integer('speed')
        .nullable();
      table.integer('experience')
        .nullable();
      table.integer('weight')
        .nullable();
      table.integer('height')
        .nullable();
      table.string('ability_1')
        .references('name')
        .inTable('pokemon_ability')
        .nullable();
      table.string('ability_2')
        .references('name')
        .inTable('pokemon_ability')
        .nullable();
      table.string('ability_3')
        .references('name')
        .inTable('pokemon_ability')
        .nullable();
      table.string('type_1')
        .references('name')
        .inTable('pokemon_type')
        .nullable();
      table.string('type_2')
        .references('name')
        .inTable('pokemon_type')
        .nullable();
      table.double('latitude')
        .nullable();
      table.double('longitude')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('pokemon_base');
  }
}

module.exports = PokemonBaseSchema;
