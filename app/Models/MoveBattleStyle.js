'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class MoveBattleStyle extends Model {
  static get table() {
    return 'move_battle_style';
  }

  static get primaryKey() {
    return 'name';
  }
}

module.exports = MoveBattleStyle;
