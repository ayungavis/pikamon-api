'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonMove extends Model {
  static get table() {
    return 'pokemon_moves';
  }

  static get primaryKey() {
    return 'id';
  }

  pokemon() {
    return this.belongsTo('App/Models/Pokemon');
  }

  versionGroup() {
    return this.belongsTo('App/Models/VersionGroup');
  }

  move() {
    return this.belongsTo('App/Models/Move');
  }

  pokemonMoveMethod() {
    return this.belongsTo('App/Models/PokemonMoveMethod');
  }
}

module.exports = PokemonMove;
