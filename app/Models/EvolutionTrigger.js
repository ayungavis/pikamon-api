'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class EvolutionTrigger extends Model {
  static get table() {
    return 'evolution_trigger';
  }

  static get primaryKey() {
    return 'name';
  }

  evolutionChainData() {
    return this.hasMany('App/Models/EvolutionChainDatum');
  }
}

module.exports = EvolutionTrigger;
