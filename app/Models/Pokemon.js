'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pokemon extends Model {
	static get table() {
		return 'pokemons'
	}

	static get primaryKey() {
		return 'id'
	}

	type () {
		return this.belongsTo('App/Models/Type', 'type_ids', 'id')
	}

	category () {
		return this.belongsTo('App/Models/Category', 'categories_id', 'id')
	}
}

module.exports = Pokemon
