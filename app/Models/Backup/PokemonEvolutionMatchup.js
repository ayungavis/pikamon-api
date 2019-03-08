'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonEvolutionMatchup extends Model {
  static get table() {
    return 'pokemon_evolution_matchup';
  }

  static get primaryKey() {
    return 'pok_id';
  }

  pokemonEvolution() {
    return this.hasMany('App/Models/PokemonEvolution');
  }

  pokemon() {
    return this.belongsTo('App/Models/Pokemon');
  }

  pokemonHabitat() {
    return this.belongsTo('App/Models/PokemonHabitat');
  }
}

module.exports = PokemonEvolutionMatchup;
