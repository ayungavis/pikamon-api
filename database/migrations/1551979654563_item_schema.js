'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ItemSchema extends Schema {
  up() {
    this.create('item', (table) => {
      table.integer('id')
        .notNullable();
      table.string('name')
        .primary()
        .notNullable();
      table.string('display_name')
        .nullable();
      table.text('description')
        .nullable();
      table.string('category')
        .references('name')
        .inTable('item_category')
        .nullable();
      table.string('fling_effect')
        .references('name')
        .inTable('item_fling_effect')
        .nullable();
      table.string('baby_trigger_for')
        .references('name')
        .inTable('pokemon_species')
        .nullable();
      table.integer('cost')
        .nullable();
      table.integer('fling_power')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('item');
  }
}

module.exports = ItemSchema;
