'use strict';

const PokemonMove = use('App/Models/PokemonMove');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pokemon_moves
 */
class PokemonMoveController {
  /**
   * Show a list of all pokemon_moves.
   * GET pokemon_moves
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const pokemon_move = await PokemonMove.all();
    return response.status(200).json(pokemon_move);
  }

  /**
   * Render a form to be used for creating a new pokemon_move.
   * GET pokemon_moves/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new pokemon_move.
   * POST pokemon_moves
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const body = await request.all();
      const pokemon_move = await PokemonMove.create(body);
      return response.status(201).json(pokemon_move);
    } catch (e) {
      // console.log(e);
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Display a single pokemon_move.
   * GET pokemon_moves/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const { id } = params;
      const pokemon_move = await PokemonMove.find(id);
      return response.status(200).json(pokemon_move);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Render a form to update an existing pokemon_move.
   * GET pokemon_moves/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update pokemon_move details.
   * PUT or PATCH pokemon_moves/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const { id } = params;
      const body = request.all();
      const pokemon_move = await PokemonMove.find(id);

      if (pokemon_move) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      pokemon_move.merge();
      await pokemon_move.save();
      return response.status(200).json(pokemon_move);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Delete a pokemon_move with id.
   * DELETE pokemon_moves/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params;
      const pokemon_move = await PokemonMove.find(id);

      if (pokemon_move) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      await pokemon_move.delete();
      return response.status(200).send({ message: 'Success!' });
    } catch (e) {
      return response.status(401).send({ message: 'Something went wrong!' });
    }
  }
}

module.exports = PokemonMoveController;
