'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ItemFlingEffectSchema extends Schema {
  up() {
    this.create('item_fling_effect', (table) => {
      table.integer('id')
        .notNullable();
      table.string('name')
        .primary()
        .notNullable();
      table.text('effect_entry')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('item_fling_effect');
  }
}

module.exports = ItemFlingEffectSchema;
