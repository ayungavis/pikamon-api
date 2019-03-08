'use strict';

const PokemonEvolution = use('App/Models/PokemonEvolution');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pokemon_evolutions
 */
class PokemonEvolutionController {
  /**
   * Show a list of all pokemon_evolutions.
   * GET pokemon_evolutions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const pokemon_evolution = await PokemonEvolution.all();
    return response.status(200).json(pokemon_evolution);
  }

  /**
   * Render a form to be used for creating a new pokemon_evolution.
   * GET pokemon_evolutions/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new pokemon_evolution.
   * POST pokemon_evolutions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const body = await request.all();
      const pokemon_evolution = await PokemonEvolution.create(body);
      return response.status(201).json(pokemon_evolution);
    } catch (e) {
      // console.log(e);
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Display a single pokemon_evolution.
   * GET pokemon_evolutions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const { id } = params;
      const pokemon_evolution = await PokemonEvolution.find(id);
      return response.status(200).json(pokemon_evolution);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Render a form to update an existing pokemon_evolution.
   * GET pokemon_evolutions/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update pokemon_evolution details.
   * PUT or PATCH pokemon_evolutions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const { id } = params;
      const body = request.all();
      const pokemon_evolution = await PokemonEvolution.find(id);

      if (pokemon_evolution) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      pokemon_evolution.merge();
      await pokemon_evolution.save();
      return response.status(200).json(pokemon_evolution);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Delete a pokemon_evolution with id.
   * DELETE pokemon_evolutions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params;
      const pokemon_evolution = await PokemonEvolution.find(id);

      if (pokemon_evolution) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      await pokemon_evolution.delete();
      return response.status(200).send({ message: 'Success!' });
    } catch (e) {
      return response.status(401).send({ message: 'Something went wrong!' });
    }
  }
}

module.exports = PokemonEvolutionController;
