'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MoveCategorySchema extends Schema {
  up() {
    this.create('move_category', (table) => {
      table.string('name')
        .primary()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('move_category');
  }
}

module.exports = MoveCategorySchema;
