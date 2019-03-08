'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class BerryHasFlavor extends Model {
  static get table() {
    return 'berry_has_flavor';
  }

  berry() {
    return this.belongsTo('App/Models/Berry');
  }

  berryFlavor() {
    return this.belongsTo('App/Models/BerryFlavor');
  }
}

module.exports = BerryHasFlavor;
