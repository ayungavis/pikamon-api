'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class EvolutionChainSchema extends Schema {
  up() {
    this.create('evolution_chain', (table) => {
      table.increments('id');
      table.string('baby_trigger_item')
        .references('name')
        .inTable('item')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('evolution_chain');
  }
}

module.exports = EvolutionChainSchema;
