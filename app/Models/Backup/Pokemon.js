'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Pokemon extends Model {
  static get table() {
    return 'pokemon';
  }

  static get primaryKey() {
    return 'pok_id';
  }

  pokemonEvolutionMatchup() {
    return this.hasMany('App/Models/PokemonEvolutionMatchup');
  }

  pokemonMove() {
    return this.hasMany('App/Models/PokemonMove');
  }

  pokemonType() {
    return this.hasMany('App/Models/PokemonType');
  }

  baseStat() {
    return this.hasMany('App/Models/BaseStat');
  }

  pokemonAbility() {
    return this.hasMany('App/Models/PokemonAbility');
  }

  // pokemonEvolution() {
  //   return this.belongsToMany('App/Models/PokemonEvolution')
  //     .pivotModel('App/Models/PokemonEvolutionMatchup');
  // }

  // move() {
  //   return this.belongsToMany('App/Models/Move')
  //     .pivotModel('App/Models/PokemonMove');
  // }

  // type() {
  //   return this.belongsToMany('App/Models/Type')
  //     .pivotModel('App/Models/PokemonType');
  // }

  // ability() {
  //   return this.belongsToMany('App/Models/Ability')
  //     .pivotModel('App/Models/PokemonAbility');
  // }
}

module.exports = Pokemon;
