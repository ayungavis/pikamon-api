'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ItemHasAttributeSchema extends Schema {
  up() {
    this.create('item_has_attribute', (table) => {
      table.string('item_name')
        .references('name')
        .inTable('item')
        .notNullable();
      table.string('attribute_name')
        .references('name')
        .inTable('item_attribute')
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('item_has_attribute');
  }
}

module.exports = ItemHasAttributeSchema;
