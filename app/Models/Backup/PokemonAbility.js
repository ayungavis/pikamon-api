'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PokemonAbility extends Model {
  static get table() {
    return 'pokemon_abilities';
  }

  static get primaryKey() {
    return 'id';
  }

  ability() {
    return this.belongsTo('App/Models/Ability');
  }

  pokemon() {
    return this.belongsTo('App/Models/Pokemon');
  }
}

module.exports = PokemonAbility;
