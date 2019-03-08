'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonHasItem extends Model {
  static get table() {
    return 'pokemon_has_item';
  }

  item() {
    return this.belongsTo('App/Models/Item');
  }

  pokemonBase() {
    return this.belongsTo('App/Models/PokemonBase');
  }
}

module.exports = PokemonHasItem;
