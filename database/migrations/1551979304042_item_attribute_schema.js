'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ItemAttributeSchema extends Schema {
  up() {
    this.create('item_attribute', (table) => {
      table.string('name')
        .primary()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('item_attribute');
  }
}

module.exports = ItemAttributeSchema;
