'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class VersionGroup extends Model {
  static get table() {
    return 'version_groups';
  }

  static get primaryKey() {
    return 'version_id';
  }

  pokemonMove() {
    return this.hasMany('App/Models/PokemonMove');
  }
}

module.exports = VersionGroup;
