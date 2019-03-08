'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonForm extends Model {
  static get table() {
    return 'pokemon_form';
  }

  static get primaryKey() {
    return 'name';
  }
}

module.exports = PokemonForm;
