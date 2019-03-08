'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ItemFlingEffect extends Model {
  static get table() {
    return 'item_fling_effect';
  }

  static get primaryKey() {
    return 'name';
  }

  item() {
    return this.hasMany('App/Models/Item');
  }
}

module.exports = ItemFlingEffect;
