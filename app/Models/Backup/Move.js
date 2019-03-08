'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Move extends Model {
  static get table() {
    return 'moves';
  }

  static get primaryKey() {
    return 'move_id';
  }

  pokemonMove() {
    return this.hasMany('App/Models/PokemonMove');
  }

  type() {
    return this.belongsTo('App/Models/Type');
  }
}

module.exports = Move;
