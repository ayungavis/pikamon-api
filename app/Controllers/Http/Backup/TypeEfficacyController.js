'use strict';

const TypeEfficacy = use('App/Models/TypeEfficacy');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with type_efficacies
 */
class TypeEfficacyController {
  /**
   * Show a list of all type_efficacies.
   * GET type_efficacies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const type_efficacy = await TypeEfficacy.all();
    return response.status(200).json(type_efficacy);
  }

  /**
   * Render a form to be used for creating a new type_efficacy.
   * GET type_efficacies/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new type_efficacy.
   * POST type_efficacies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const body = await request.all();
      const type_efficacy = await TypeEfficacy.create(body);
      return response.status(201).json(type_efficacy);
    } catch (e) {
      // console.log(e);
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Display a single type_efficacy.
   * GET type_efficacies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const { id } = params;
      const type_efficacy = await TypeEfficacy.find(id);
      return response.status(200).json(type_efficacy);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Render a form to update an existing type_efficacy.
   * GET type_efficacies/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update type_efficacy details.
   * PUT or PATCH type_efficacies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const { id } = params;
      const body = request.all();
      const type_efficacy = await TypeEfficacy.find(id);

      if (type_efficacy) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      type_efficacy.merge();
      await type_efficacy.save();
      return response.status(200).json(type_efficacy);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Delete a type_efficacy with id.
   * DELETE type_efficacies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params;
      const type_efficacy = await TypeEfficacy.find(id);

      if (type_efficacy) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      await type_efficacy.delete();
      return response.status(200).send({ message: 'Success!' });
    } catch (e) {
      return response.status(401).send({ message: 'Something went wrong!' });
    }
  }
}

module.exports = TypeEfficacyController;
