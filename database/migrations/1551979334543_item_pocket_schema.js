'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ItemPocketSchema extends Schema {
  up() {
    this.create('item_pocket', (table) => {
      table.string('name')
        .primary()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('item_pocket');
  }
}

module.exports = ItemPocketSchema;;
