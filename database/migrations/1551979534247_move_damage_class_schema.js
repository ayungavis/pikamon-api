'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MoveDamageClassSchema extends Schema {
  up() {
    this.create('move_damage_class', (table) => {
      table.string('name')
        .primary()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('move_damage_class');
  }
}

module.exports = MoveDamageClassSchema;
