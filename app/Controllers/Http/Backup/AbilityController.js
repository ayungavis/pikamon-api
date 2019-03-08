'use strict';

const Ability = use('App/Models/Ability');
const DataGrid = use('DataGrid');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with abilities
 */
class AbilityController {
  /**
   * Show a list of all abilities.
   * GET abilities
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const config = {
      query() {
        return Ability.query()
          .with('pokemonAbility');
      },
      sortable: {
        abil_id: 'abil_id',
        abil_name: 'abil_name',
      },
      searchable: ['abil_id', 'abil_name'],
      filterable: {
        abil_id: 'abil_id',
        abil_name: 'abil_name',
      },
    }
    return DataGrid.paginate(config);
  }

  /**
   * Render a form to be used for creating a new ability.
   * GET abilities/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new ability.
   * POST abilities
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const body = await request.all();
      const ability = await Ability.create(body);
      return response.status(201).json(ability);
    } catch (e) {
      // console.log(e);
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Display a single ability.
   * GET abilities/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const { id } = params;
      const ability = await Ability.find(id);
      return response.status(200).json(ability);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Render a form to update an existing ability.
   * GET abilities/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update ability details.
   * PUT or PATCH abilities/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const { id } = params;
      const body = request.all();
      const ability = await Ability.find(id);

      if (ability) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      ability.merge();
      await ability.save();
      return response.status(200).json(ability);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Delete a ability with id.
   * DELETE abilities/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params;
      const ability = await Ability.find(id);

      if (ability) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      await ability.delete();
      return response.status(200).send({ message: 'Success!' });
    } catch (e) {
      return response.status(401).send({ message: 'Something went wrong!' });
    }
  }
}

module.exports = AbilityController;
