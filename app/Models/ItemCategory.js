'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ItemCategory extends Model {
  static get table() {
    return 'item_category';
  }

  static get primaryKey() {
    return 'name';
  }

  itemPocket() {
    return this.belongsTo('App/Models/ItemPocket');
  }

  item() {
    return this.hasMany('App/Models/Item');
  }
}

module.exports = ItemCategory;
