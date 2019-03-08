'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class MoveCategory extends Model {
  static get table() {
    return 'move_category';
  }

  static get primaryKey() {
    return 'name';
  }

  move() {
    return this.hasMany('App/Models/Move');
  }
}

module.exports = MoveCategory;
