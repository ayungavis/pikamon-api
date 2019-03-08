'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonHabitat extends Model {
  static get table() {
    return 'pokemon_habitat';
  }

  static get primaryKey() {
    return 'name';
  }

  pokemonSpecies() {
    return this.hasMany('App/Models/PokemonSpecies');
  }
}

module.exports = PokemonHabitat;
