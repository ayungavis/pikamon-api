'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonStat extends Model {
  static get table() {
    return 'pokemon_stats';
  }

  static get primaryKey() {
    return 'name';
  }
}

module.exports = PokemonStat;
