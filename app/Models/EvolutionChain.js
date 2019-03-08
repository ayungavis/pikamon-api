'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class EvolutionChain extends Model {
  static get table() {
    return 'evolution_chain';
  }

  static get primaryKey() {
    return 'id';
  }

  item() {
    return this.belongsTo('App/Models/Item');
  }

  evolutionChainData() {
    return this.hasMany('App/Models/EvolutionChainDatum');
  }
}

module.exports = EvolutionChain;
