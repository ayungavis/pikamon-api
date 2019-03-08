'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class TypeEfficacy extends Model {
  static get table() {
    return 'type_efficacy';
  }

  static get primaryKey() {
    return 'id';
  }

  type() {
    return this.hasMany('App/Models/Type');
  }
}

module.exports = TypeEfficacy;
