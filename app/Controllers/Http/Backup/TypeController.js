'use strict';

const Type = use('App/Models/Type');
const DataGrid = use('DataGrid');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with types
 */
class TypeController {
  /**
   * Show a list of all types.
   * GET types
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const config = {
      query() {
        return Type.query()
          .with('pokemonType')
          .with('move');
      },
      sortable: {
        type_id: 'type_id',
        type_name: 'type_name',
      },
      searchable: ['type_id', 'type_name'],
      filterable: {
        type_id: 'type_id',
        type_name: 'type_name',
      },
    }
    return DataGrid.paginate(config);
  }

  /**
   * Render a form to be used for creating a new type.
   * GET types/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new type.
   * POST types
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const body = await request.all();
      const type = await Type.create(body);
      return response.status(201).json(type);
    } catch (e) {
      // console.log(e);
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Display a single type.
   * GET types/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const { id } = params;
      const type = await Type.find(id);
      return response.status(200).json(type);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Render a form to update an existing type.
   * GET types/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update type details.
   * PUT or PATCH types/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const { id } = params;
      const body = request.all();
      const type = await Type.find(id);

      if (type) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      type.merge();
      await type.save();
      return response.status(200).json(type);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Delete a type with id.
   * DELETE types/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params;
      const type = await Type.find(id);

      if (type) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      await type.delete();
      return response.status(200).send({ message: 'Success!' });
    } catch (e) {
      return response.status(401).send({ message: 'Something went wrong!' });
    }
  }
}

module.exports = TypeController;
