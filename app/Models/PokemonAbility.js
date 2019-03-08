'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonAbility extends Model {
  static get table() {
    return 'pokemon_ability';
  }

  static get primaryKey() {
    return 'name';
  }

  pokemonBase() {
    return this.hasMany('App/Models/PokemonBase');
  }
}

module.exports = PokemonAbility;
