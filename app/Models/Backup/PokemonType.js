'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonType extends Model {
  static get table() {
    return 'pokemon_types';
  }

  static get primaryKey() {
    return 'id';
  }

  pokemon() {
    return this.belongsTo('App/Models/Pokemon');
  }

  type() {
    return this.belongsTo('App/Models/Type');
  }
}

module.exports = PokemonType;
