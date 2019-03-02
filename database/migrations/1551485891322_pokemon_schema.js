'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonSchema extends Schema {
  up () {
    this.create('pokemons', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.text('image_url').notNullable()
      table.integer('type_ids').unsigned().references('id').inTable('types')
      table.integer('categories_id').unsigned().references('id').inTable('categories')
      table.double('latitude').notNullable()
      table.double('longitude').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pokemons')
  }
}

module.exports = PokemonSchema
