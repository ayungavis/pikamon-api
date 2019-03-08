'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonHabitat extends Model {
  static get table() {
    return 'pokemon_habitats';
  }

  static get primaryKey() {
    return 'hab_id';
  }

  pokemonEvolutionMatchup() {
    return this.hasMany('App/Models/PokemonEvolutionMatchup');
  }
}

module.exports = PokemonHabitat;
