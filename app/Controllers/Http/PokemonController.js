'use strict'

const Pokemon = use('App/Models/Pokemon')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pokemons
 */
class PokemonController {
  /**
   * Show a list of all pokemons.
   * GET pokemons
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let pokemons = await Pokemon.query().with('type').with('category').fetch()
    return response.json(pokemons)
  }

  /**
   * Render a form to be used for creating a new pokemon.
   * GET pokemons/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new pokemon.
   * POST pokemons
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const input = request.only([
      'name',
      'image_url',
      'type_ids',
      'category_id',
      'latitude',
      'longitude'
    ])
    const pokemon = new Pokemon()

    pokemon.name = input.name
    pokemon.image_url = input.image_url
    pokemon.type_ids = input.type_ids
    pokemon.category_id = input.category_id
    pokemon.latitude = input.latitude
    pokemon.longitude = input.longitude

    await pokemon.save()
    return response.status(201).json(pokemon)
  }

  /**
   * Display a single pokemon.
   * GET pokemons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const pokemon = await Pokemon.find(params.id)
    await pokemon.loadMany(['type', 'category'])
    return response.json(pokemon)
  }

  /**
   * Render a form to update an existing pokemon.
   * GET pokemons/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update pokemon details.
   * PUT or PATCH pokemons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const input = request.only([
      'name',
      'image_url',
      'type_ids',
      'category_id',
      'latitude',
      'longitude'
    ])
    const pokemon = await Pokemon.find(params.id)

    if (!pokemon) {
      return response.status(404).json({data: 'Resource not found'})
    }

    pokemon.name = input.name
    pokemon.image_url = input.image_url
    pokemon.type_ids = input.type_ids
    pokemon.category_id = input.category_id
    pokemon.latitude = input.latitude
    pokemon.longitude = input.longitude

    await pokemon.save()
    return response.status(200).json(pokemon)
  }

  /**
   * Delete a pokemon with id.
   * DELETE pokemons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const pokemon = await Pokemon.find(params.id)

    if (!pokemon) {
      return response.status(404).json({data: 'Resource not found'})
    }

    await pokemon.delete()
    return response.status(204).json(null)
  }
}

module.exports = PokemonController
