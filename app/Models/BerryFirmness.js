'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class BerryFirmness extends Model {
  static get table() {
    return 'berry_firmness';
  }

  static get primaryKey() {
    return 'name';
  }

  berry() {
    return this.hasMany('App/Models/Berry');
  }
}

module.exports = BerryFirmness;
