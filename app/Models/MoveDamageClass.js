'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class MoveDamageClass extends Model {
  static get table() {
    return 'move_damage_class';
  }

  static get primaryKey() {
    return 'name';
  }

  move() {
    return this.hasMany('App/Models/Move');
  }
}

module.exports = MoveDamageClass;
