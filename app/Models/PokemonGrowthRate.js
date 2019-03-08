'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonGrowthRate extends Model {
  static get table() {
    return 'pokemon_growth_rate';
  }

  static get primaryKey() {
    return 'name';
  }

  pokemonGrowthRateExperience() {
    return this.hasMany('App/Models/PokemonGrowthRateExperience');
  }
}

module.exports = PokemonGrowthRate;
