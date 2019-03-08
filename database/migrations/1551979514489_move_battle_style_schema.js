'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MoveBattleStyleSchema extends Schema {
  up() {
    this.create('move_battle_style', (table) => {
      table.string('name')
        .primary()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('move_battle_style');
  }
}

module.exports = MoveBattleStyleSchema;
