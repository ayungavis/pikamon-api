'use strict';

const PokemonAbility = use('App/Models/Ability');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pokemonAbilities
 */
class PokemonAbilityController {
  /**
   * Show a list of all pokemonAbilities.
   * GET pokemonAbilities
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const pokemon_ability = await PokemonAbility.all();
    return response.status(200).json(pokemon_ability);
  }

  /**
   * Render a form to be used for creating a new pokemon_ability.
   * GET pokemonAbilities/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new pokemon_ability.
   * POST pokemonAbilities
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const body = await request.all();
      const pokemon_ability = await PokemonAbility.create(body);
      return response.status(201).json(pokemon_ability);
    } catch (e) {
      // console.log(e);
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Display a single pokemon_ability.
   * GET pokemonAbilities/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const { id } = params;
      const pokemon_ability = await PokemonAbility.find(id);
      return response.status(200).json(pokemon_ability);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Render a form to update an existing pokemon_ability.
   * GET pokemonAbilities/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update pokemon_ability details.
   * PUT or PATCH pokemonAbilities/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const { id } = params;
      const body = request.all();
      const pokemon_ability = await PokemonAbility.find(id);

      if (pokemon_ability) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      pokemon_ability.merge();
      await pokemon_ability.save();
      return response.status(200).json(pokemon_ability);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Delete a pokemon_ability with id.
   * DELETE pokemonAbilities/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params;
      const pokemon_ability = await PokemonAbility.find(id);

      if (pokemon_ability) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      await pokemon_ability.delete();
      return response.status(200).send({ message: 'Success!' });
    } catch (e) {
      return response.status(401).send({ message: 'Something went wrong!' });
    }
  }
}

module.exports = PokemonAbilityController;
