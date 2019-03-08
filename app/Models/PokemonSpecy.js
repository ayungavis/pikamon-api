'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonSpecy extends Model {
  static get table() {
    return 'pokemon_species';
  }

  static get primaryKey() {
    return 'name';
  }

  pokemonColor() {
    return this.belongsTo('App/Models/PokemonColor');
  }

  pokemonHabitat() {
    return this.belongsTo('App/Models/PokemonHabitat');
  }

  pokemonShape() {
    return this.belongsTo('App/Models/PokemonShape');
  }

  item() {
    return this.hasMany('App/Models/Item');
  }

  pokemonHasEggGroup() {
    return this.hasMany('App/Models/PokemonHasEggGroup');
  }

  pokemonHasForm() {
    return this.hasMany('App/Models/PokemonHasForm');
  }

  evolutionChainData() {
    return this.hasMany('App/Models/EvolutionChainDatum');
  }
}

module.exports = PokemonSpecy;
