'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class MoveAilment extends Model {
  static get table() {
    return 'move_ailment';
  }

  static get primaryKey() {
    return 'name';
  }

  move() {
    return this.hasMany('App/Models/Move');
  }
}

module.exports = MoveAilment;
