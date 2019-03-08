'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Machine extends Model {
  static get table() {
    return 'machine';
  }

  static get primaryKey() {
    return 'id';
  }

  item() {
    return this.belongsTo('App/Models/Item');
  }

  move() {
    return this.belongsTo('App/Models/Move');
  }
}

module.exports = Machine;
