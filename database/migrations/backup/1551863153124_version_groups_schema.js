'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class VersionGroupsSchema extends Schema {
  up() {
    this.create('version_groups', (table) => {
      table.increments('version_id');
      table.string('version_name')
        .index()
        .notNullable();
      table.integer('order')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('version_groups');
  }
}

module.exports = VersionGroupsSchema;
