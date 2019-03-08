'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class MoveLearnMethod extends Model {
  static get table() {
    return 'move_learn_method';
  }

  pokemonHasMove() {
    return this.hasMany('App/Models/PokemonHasMove');
  }
}

module.exports = MoveLearnMethod;
