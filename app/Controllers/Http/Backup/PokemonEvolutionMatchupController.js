'use strict';

const PokemonEvolutionMatchup = use('App/Models/PokemonEvolutionMatchup');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pokemon_evolution_matchups
 */
class PokemonEvolutionMatchupController {
  /**
   * Show a list of all pokemon_evolution_matchups.
   * GET pokemon_evolution_matchups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const pokemon_evolution_matchup = await PokemonEvolutionMatchup.all();
    return response.status(200).json(pokemon_evolution_matchup);
  }

  /**
   * Render a form to be used for creating a new pokemon_evolution_matchup.
   * GET pokemon_evolution_matchups/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new pokemon_evolution_matchup.
   * POST pokemon_evolution_matchups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const body = await request.all();
      const pokemon_evolution_matchup = await PokemonEvolutionMatchup.create(body);
      return response.status(201).json(pokemon_evolution_matchup);
    } catch (e) {
      // console.log(e);
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Display a single pokemon_evolution_matchup.
   * GET pokemon_evolution_matchups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const { id } = params;
      const pokemon_evolution_matchup = await PokemonEvolutionMatchup.find(id);
      return response.status(200).json(pokemon_evolution_matchup);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Render a form to update an existing pokemon_evolution_matchup.
   * GET pokemon_evolution_matchups/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update pokemon_evolution_matchup details.
   * PUT or PATCH pokemon_evolution_matchups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const { id } = params;
      const body = request.all();
      const pokemon_evolution_matchup = await PokemonEvolutionMatchup.find(id);

      if (pokemon_evolution_matchup) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      pokemon_evolution_matchup.merge();
      await pokemon_evolution_matchup.save();
      return response.status(200).json(pokemon_evolution_matchup);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Delete a pokemon_evolution_matchup with id.
   * DELETE pokemon_evolution_matchups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params;
      const pokemon_evolution_matchup = await PokemonEvolutionMatchup.find(id);

      if (pokemon_evolution_matchup) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      await pokemon_evolution_matchup.delete();
      return response.status(200).send({ message: 'Success!' });
    } catch (e) {
      return response.status(401).send({ message: 'Something went wrong!' });
    }
  }
}

module.exports = PokemonEvolutionMatchupController;
