'use strict';

const PokemonHabitat = use('App/Models/PokemonHabitat');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pokemon_habitats
 */
class PokemonHabitatController {
  /**
   * Show a list of all pokemon_habitats.
   * GET pokemon_habitats
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const pokemon_habitat = await PokemonHabitat.all();
    return response.status(200).json(pokemon_habitat);
  }

  /**
   * Render a form to be used for creating a new pokemon_habitat.
   * GET pokemon_habitats/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new pokemon_habitat.
   * POST pokemon_habitats
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const body = await request.all();
      const pokemon_habitat = await PokemonHabitat.create(body);
      return response.status(201).json(pokemon_habitat);
    } catch (e) {
      // console.log(e);
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Display a single pokemon_habitat.
   * GET pokemon_habitats/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const { id } = params;
      const pokemon_habitat = await PokemonHabitat.find(id);
      return response.status(200).json(pokemon_habitat);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Render a form to update an existing pokemon_habitat.
   * GET pokemon_habitats/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update pokemon_habitat details.
   * PUT or PATCH pokemon_habitats/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const { id } = params;
      const body = request.all();
      const pokemon_habitat = await PokemonHabitat.find(id);

      if (pokemon_habitat) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      pokemon_habitat.merge();
      await pokemon_habitat.save();
      return response.status(200).json(pokemon_habitat);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Delete a pokemon_habitat with id.
   * DELETE pokemon_habitats/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params;
      const pokemon_habitat = await PokemonHabitat.find(id);

      if (pokemon_habitat) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      await pokemon_habitat.delete();
      return response.status(200).send({ message: 'Success!' });
    } catch (e) {
      return response.status(401).send({ message: 'Something went wrong!' });
    }
  }
}

module.exports = PokemonHabitatController;
