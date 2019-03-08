'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonGender extends Model {
  static get table() {
    return 'pokemon_gender';
  }

  static get primaryKey() {
    return 'name';
  }
}

module.exports = PokemonGender;
