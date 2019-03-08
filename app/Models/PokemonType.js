'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonType extends Model {
  static get table() {
    return 'pokemon_type';
  }

  static get primaryKey() {
    return 'name';
  }

  move() {
    return this.hasMany('App/Models/Move');
  }

  pokemonBase() {
    return this.hasMany('App/Models/PokemonBase');
  }

  evolutionChainData() {
    return this.hasMany('App/Models/EvolutionChainDatum');
  }

  berry() {
    return this.hasMany('App/Models/Berry');
  }
}

module.exports = PokemonType;
