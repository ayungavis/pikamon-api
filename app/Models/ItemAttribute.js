'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ItemAttribute extends Model {
  static get table() {
    return 'item_attribute';
  }

  static get primaryKey() {
    return 'name';
  }

  itemHasAttribute() {
    return this.hasMany('App/Models/ItemHasAttribute');
  }
}

module.exports = ItemAttribute;
