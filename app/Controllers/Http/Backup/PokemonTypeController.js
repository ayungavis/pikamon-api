'use strict';

const PokemonType = use('App/Models/PokemonType');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pokemon_types
 */
class PokemonTypeController {
  /**
   * Show a list of all pokemon_types.
   * GET pokemon_types
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const pokemon_type = await PokemonType.all();
    return response.status(200).json(pokemon_type);
  }

  /**
   * Render a form to be used for creating a new pokemon_type.
   * GET pokemon_types/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new pokemon_type.
   * POST pokemon_types
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const body = await request.all();
      const pokemon_type = await PokemonType.create(body);
      return response.status(201).json(pokemon_type);
    } catch (e) {
      // console.log(e);
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Display a single pokemon_type.
   * GET pokemon_types/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const { id } = params;
      const pokemon_type = await PokemonType.find(id);
      return response.status(200).json(pokemon_type);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Render a form to update an existing pokemon_type.
   * GET pokemon_types/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update pokemon_type details.
   * PUT or PATCH pokemon_types/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const { id } = params;
      const body = request.all();
      const pokemon_type = await PokemonType.find(id);

      if (pokemon_type) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      pokemon_type.merge();
      await pokemon_type.save();
      return response.status(200).json(pokemon_type);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Delete a pokemon_type with id.
   * DELETE pokemon_types/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params;
      const pokemon_type = await PokemonType.find(id);

      if (pokemon_type) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      await pokemon_type.delete();
      return response.status(200).send({ message: 'Success!' });
    } catch (e) {
      return response.status(401).send({ message: 'Something went wrong!' });
    }
  }
}

module.exports = PokemonTypeController;
