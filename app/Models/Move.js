'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Move extends Model {
  static get table() {
    return 'move';
  }

  static get primaryKey() {
    return 'name';
  }

  moveAilment() {
    return this.belongsTo('App/Models/MoveAilment');
  }

  moveCategory() {
    return this.belongsTo('App/Models/MoveCategory');
  }

  moveDamageClass() {
    return this.belongsTo('App/Models/MoveDamageClass');
  }

  moveTarget() {
    return this.belongsTo('App/Models/MoveTarget');
  }

  pokemonType() {
    return this.belongsTo('App/Models/PokemonType');
  }

  machine() {
    return this.hasMany('App/Models/Machine');
  }

  pokemonHasMove() {
    return this.hasMany('App/Models/PokemonHasMove');
  }

  evolutionChainData() {
    return this.hasMany('App/Models/EvolutionChainDatum');
  }
}

module.exports = Move;
