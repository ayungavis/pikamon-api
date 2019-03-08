'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class EvolutionTriggerSchema extends Schema {
  up() {
    this.create('evolution_trigger', (table) => {
      table.string('name')
        .primary()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('evolution_trigger');
  }
}

module.exports = EvolutionTriggerSchema;
