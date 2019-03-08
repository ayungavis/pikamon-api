'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ItemHasAttribute extends Model {
  static get table() {
    return 'item_has_attribute';
  }

  itemAttribute() {
    return this.belongsTo('App/Models/ItemAttribute');
  }

  item() {
    return this.belongsTo('App/Models/Item');
  }
}

module.exports = ItemHasAttribute;
