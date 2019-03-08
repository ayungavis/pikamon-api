'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonBaseEv extends Model {
  static get table() {
    return 'pokemon_base_ev';
  }

  static get primaryKey() {
    return 'pokemon_name';
  }

  pokemonBase() {
    return this.belongsTo('App/Models/PokemonBase');
  }
}

module.exports = PokemonBaseEv;
