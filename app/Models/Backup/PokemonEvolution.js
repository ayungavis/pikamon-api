'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonEvolution extends Model {
  static get table() {
    return 'pokemon_evolution';
  }

  static get primaryKey() {
    return 'evol_id';
  }

  pokemonEvolutionMatchup() {
    return this.belongsTo('App/Models/PokemonEvolutionMatchup');
  }
}

module.exports = PokemonEvolution;
