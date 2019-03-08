'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Ability extends Model {
  static get table() {
    return 'abilities';
  }

  static get primaryKey() {
    return 'abil_id';
  }

  pokemonAbility() {
    return this.hasMany('App/Models/PokemonAbility');
  }
}

module.exports = Ability;
