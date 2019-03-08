'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonGrowthRateExperience extends Model {
  static get table() {
    return 'pokemon_growth_rate_experience';
  }

  pokemonGrowthRate() {
    return this.belongsTo('App/Models/PokemonGrowthRate');
  }
}

module.exports = PokemonGrowthRateExperience;
