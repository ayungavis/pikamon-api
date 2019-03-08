'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonEggGroup extends Model {
  static get table() {
    return 'pokemon_egg_group';
  }

  static get primaryKey() {
    return 'name';
  }

  pokemonHasEggGroup() {
    return this.hasMany('App/Models/PokemonHasEggGroup');
  }
}

module.exports = PokemonEggGroup;
