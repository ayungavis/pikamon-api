'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Type extends Model {
  static get table() {
    return 'types';
  }

  static get primaryKey() {
    return 'type_id';
  }

  pokemonType() {
    return this.hasMany('App/Models/PokemonType');
  }

  move() {
    return this.hasMany('App/Models/Move');
  }

  typeEfficacy() {
    return this.belongsTo('App/Models/TypeEfficacy');
  }
}

module.exports = Type;
