'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonMoveMethod extends Model {
  static get table() {
    return 'pokemon_move_methods';
  }

  static get primaryKey() {
    return 'method_id';
  }

  pokemonMove() {
    return this.hasMany('App/Models/PokemonMove');
  }
}

module.exports = PokemonMoveMethod;
