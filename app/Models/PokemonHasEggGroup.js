'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonHasEggGroup extends Model {
  static get table() {
    return 'pokemon_has_egg_group';
  }

  pokemonEggGroup() {
    return this.belongsTo('App/Models/PokemonEggGroup');
  }

  pokemonSpecies() {
    return this.belongsTo('App/Models/PokemonSpecy');
  }
}

module.exports = PokemonHasEggGroup;
