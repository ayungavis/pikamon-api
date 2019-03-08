'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Item extends Model {
  static get table() {
    return 'item';
  }

  static get primaryKey() {
    return 'name';
  }

  pokemonSpecies() {
    return this.belongsTo('App/Models/PokemonSpecy');
  }

  itemCategory() {
    return this.belongsTo('App/Models/ItemCategory');
  }

  itemFlingEffect() {
    return this.belongsTo('App/Models/ItemFlingEffect');
  }

  itemHasAttribute() {
    return this.hasMany('App/Models/ItemHasAttribute');
  }

  evolutionChain() {
    return this.hasMany('App/Models/EvolutionChain');
  }

  machine() {
    return this.hasMany('App/Models/Machine');
  }

  pokemonHasItem() {
    return this.hasMany('App/Models/PokemonHasItem');
  }

  evolutionChainData() {
    return this.hasMany('App/Models/EvolutionChainDatum');
  }

  berry() {
    return this.hasMany('App/Models/Berry');
  }
}

module.exports = Item;
