'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonColor extends Model {
  static get table() {
    return 'pokemon_color';
  }

  static get primaryKey() {
    return 'name';
  }

  pokemonSpecies() {
    return this.hasMany('App/Models/PokemonSpecies');
  }
}

module.exports = PokemonColor;
