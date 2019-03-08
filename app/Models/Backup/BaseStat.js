'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class BaseStat extends Model {
  static get table() {
    return 'base_stats';
  }

  static get primaryKey() {
    return 'pok_id';
  }

  pokemon() {
    return this.belongsTo('App/Models/Pokemon');
  }
}

module.exports = BaseStat;
