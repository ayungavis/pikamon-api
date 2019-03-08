'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Berry extends Model {
  static get table() {
    return 'berry';
  }

  static get primaryKey() {
    return 'name';
  }

  berryFirmness() {
    return this.belongsTo('App/Models/BerryFirmness');
  }

  item() {
    return this.belongsTo('App/Models/Item');
  }

  pokemonType() {
    return this.belongsTo('App/Models/PokemonType');
  }

  berryHasFlavor() {
    return this.hasMany('App/Models/BerryHasFlavor');
  }
}

module.exports = Berry;
