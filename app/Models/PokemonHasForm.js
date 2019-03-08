'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonHasForm extends Model {
  static get table() {
    return 'pokemon_has_form';
  }

  pokemonSpecies() {
    return this.belongsTo('App/Models/PokemonSpecy');
  }
}

module.exports = PokemonHasForm;
