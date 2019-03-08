'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class EvolutionChainDatum extends Model {
  static get table() {
    return 'evolution_chain_data';
  }

  evolutionChain() {
    return this.belongsTo('App/Models/EvolutionChain');
  }

  item() {
    return this.belongsTo('App/Models/Item');
  }

  pokemonSpecies() {
    return this.belongsTo('App/Models/PokemonSpecy');
  }

  move() {
    return this.belongsTo('App/Models/Move');
  }

  pokemonType() {
    return this.belongsTo('App/Models/PokemonType');
  }

  evolutionTrigger() {
    return this.belongsTo('App/Models/EvolutionTrigger');
  }
}

module.exports = EvolutionChainDatum;
