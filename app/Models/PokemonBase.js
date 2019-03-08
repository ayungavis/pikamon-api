'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonBase extends Model {
  static get table() {
    return 'pokemon_base';
  }

  static get primaryKey() {
    return 'name';
  }

  pokemonAbility() {
    return this.belongsTo('App/Models/PokemonAbility');
  }

  pokemonType() {
    return this.belongsTo('App/Models/PokemonType');
  }

  pokemonBaseEv() {
    return this.hasMany('App/Models/PokemonBaseEv');
  }

  pokemonHasItem() {
    return this.hasMany('App/Models/PokemonHasItem');
  }

  pokemonHasMove() {
    return this.hasMany('App/Models/PokemonHasMove');
  }
}

module.exports = PokemonBase;
