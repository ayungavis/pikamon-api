'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonShape extends Model {
  static get table() {
    return 'pokemon_shape';
  }

  static get primaryKey() {
    return 'name';
  }

  pokemonSpecies() {
    return this.hasMany('App/Models/PokemonSpecies');
  }
}

module.exports = PokemonShape;
