'use strict';

const Move = use('App/Models/Move');
const DataGrid = use('DataGrid');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with moves
 */
class MoveController {
  /**
   * Show a list of all moves.
   * GET moves
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const config = {
      query() {
        return Move.query()
          .with('pokemonMove')
          .with('type');
      },
      sortable: {
        move_id: 'move_id',
        move_name: 'move_name',
        type_id: 'type_id',
        move_power: 'move_power',
        move_pp: 'move_pp',
        move_accuracy: 'move_accuracy',
      },
      searchable: ['move_id', 'move_name', 'type_id', 'move_power', 'move_pp', 'move_accuracy'],
      filterable: {
        move_id: 'move_id',
        move_name: 'move_name',
        type_id: 'type_id',
        move_power: 'move_power',
        move_pp: 'move_pp',
        move_accuracy: 'move_accuracy',
      },
    }
    return DataGrid.paginate(config);
  }

  /**
   * Render a form to be used for creating a new move.
   * GET moves/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new move.
   * POST moves
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const body = await request.all();
      const move = await Move.create(body);
      return response.status(201).json(move);
    } catch (e) {
      // console.log(e);
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Display a single move.
   * GET moves/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const { id } = params;
      const move = await Move.find(id);
      return response.status(200).json(move);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Render a form to update an existing move.
   * GET moves/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update move details.
   * PUT or PATCH moves/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const { id } = params;
      const body = request.all();
      const move = await Move.find(id);

      if (move) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      move.merge();
      await move.save();
      return response.status(200).json(move);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Delete a move with id.
   * DELETE moves/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params;
      const move = await Move.find(id);

      if (move) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      await move.delete();
      return response.status(200).send({ message: 'Success!' });
    } catch (e) {
      return response.status(401).send({ message: 'Something went wrong!' });
    }
  }
}

module.exports = MoveController;
