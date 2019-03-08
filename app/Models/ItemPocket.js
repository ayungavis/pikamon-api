'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ItemPocket extends Model {
  static get table() {
    return 'item_pocket';
  }

  static get primaryKey() {
    return 'name';
  }

  itemCategory() {
    return this.hasMany('App/Models/ItemCategory');
  }
}

module.exports = ItemPocket;
