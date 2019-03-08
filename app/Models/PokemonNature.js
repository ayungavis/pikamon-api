'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonNature extends Model {
  static get table() {
    return 'pokemon_nature';
  }

  static get primaryKey() {
    return 'name';
  }
}

module.exports = PokemonNature;
