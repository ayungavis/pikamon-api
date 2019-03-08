'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonCharacteristic extends Model {
  static get table() {
    return 'pokemon_characteristic';
  }

  static get primaryKey() {
    return 'id';
  }
}

module.exports = PokemonCharacteristic;
