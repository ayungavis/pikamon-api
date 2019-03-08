'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ItemCategorySchema extends Schema {
  up() {
    this.create('item_category', (table) => {
      table.string('name')
        .primary()
        .notNullable();
      table.string('item_pocket')
        .references('name')
        .inTable('item_pocket')
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('item_category');
  }
}

module.exports = ItemCategorySchema;
