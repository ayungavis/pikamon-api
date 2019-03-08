'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MoveSchema extends Schema {
  up() {
    this.create('move', (table) => {
      table.integer('id')
        .notNullable();
      table.string('name')
        .primary()
        .notNullable();
      table.string('display_name')
        .nullable();
      table.integer('effect_chance')
        .nullable();
      table.integer('stat_change_hp')
        .nullable();
      table.integer('stat_change_attack')
        .nullable();
      table.integer('stat_change_defense')
        .nullable();
      table.integer('stat_change_special_attack')
        .nullable();
      table.integer('stat_change_special_defense')
        .nullable();
      table.integer('stat_change_speed')
        .nullable();
      table.integer('pp')
        .nullable();
      table.integer('priority')
        .nullable();
      table.string('type')
        .references('name')
        .inTable('pokemon_type')
        .nullable();
      table.integer('accuracy')
        .nullable();
      table.integer('power')
        .nullable();
      table.string('target')
        .references('name')
        .inTable('move_target')
        .nullable();
      table.string('damage_class')
        .references('name')
        .inTable('move_damage_class')
        .nullable();
      table.string('category')
        .references('name')
        .inTable('move_category')
        .nullable();
      table.integer('healing')
        .nullable();
      table.integer('max_turns')
        .nullable();
      table.integer('drain')
        .nullable();
      table.string('ailment')
        .references('name')
        .inTable('move_ailment')
        .nullable();
      table.integer('stat_chance')
        .nullable();
      table.integer('flinch_chance')
        .nullable();
      table.integer('min_hits')
        .nullable();
      table.integer('ailment_chance')
        .nullable();
      table.integer('crit_rate')
        .nullable();
      table.integer('min_turns')
        .nullable();
      table.integer('max_hits')
        .nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('move');
  }
}

module.exports = MoveSchema;
