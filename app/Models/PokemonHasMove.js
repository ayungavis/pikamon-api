'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonHasMove extends Model {
  static get table() {
    return 'pokemon_has_move';
  }

  move() {
    return this.belongsTo('App/Models/Move');
  }

  moveLearnMethod() {
    return this.belongsTo('App/Models/MoveLearnMethod');
  }

  pokemonBase() {
    return this.belongsTo('App/Models/PokemonBase');
  }
}

module.exports = PokemonHasMove;
