'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class BerryFlavor extends Model {
  static get table() {
    return 'berry_flavor';
  }

  static get primaryKey() {
    return 'name';
  }

  berryHasFlavor() {
    return this.hasMany('App/Models/BerryHasFlavor');
  }
}

module.exports = BerryFlavor;
