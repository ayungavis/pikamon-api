'use strict';

const PokemonMoveMethod = use('App/Models/PokemonMoveMethod');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pokemon_move_methods
 */
class PokemonMoveMethodController {
  /**
   * Show a list of all pokemon_move_methods.
   * GET pokemon_move_methods
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const pokemon_move_method = await PokemonMoveMethod.all();
    return response.status(200).json(pokemon_move_method);
  }

  /**
   * Render a form to be used for creating a new pokemon_move_method.
   * GET pokemon_move_methods/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new pokemon_move_method.
   * POST pokemon_move_methods
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const body = await request.all();
      const pokemon_move_method = await PokemonMoveMethod.create(body);
      return response.status(201).json(pokemon_move_method);
    } catch (e) {
      // console.log(e);
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Display a single pokemon_move_method.
   * GET pokemon_move_methods/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const { id } = params;
      const pokemon_move_method = await PokemonMoveMethod.find(id);
      return response.status(200).json(pokemon_move_method);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Render a form to update an existing pokemon_move_method.
   * GET pokemon_move_methods/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update pokemon_move_method details.
   * PUT or PATCH pokemon_move_methods/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const { id } = params;
      const body = request.all();
      const pokemon_move_method = await PokemonMoveMethod.find(id);

      if (pokemon_move_method) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      pokemon_move_method.merge();
      await pokemon_move_method.save();
      return response.status(200).json(pokemon_move_method);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Delete a pokemon_move_method with id.
   * DELETE pokemon_move_methods/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params;
      const pokemon_move_method = await PokemonMoveMethod.find(id);

      if (pokemon_move_method) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      await pokemon_move_method.delete();
      return response.status(200).send({ message: 'Success!' });
    } catch (e) {
      return response.status(401).send({ message: 'Something went wrong!' });
    }
  }
}

module.exports = PokemonMoveMethodController;
