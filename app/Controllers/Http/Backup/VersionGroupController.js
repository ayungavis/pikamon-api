'use strict';

const VersionGroup = use('App/Models/VersionGroup');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with version_groups
 */
class VersionGroupController {
  /**
   * Show a list of all version_groups.
   * GET version_groups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const version_group = await VersionGroup.all();
    return response.status(200).json(version_group);
  }

  /**
   * Render a form to be used for creating a new version_group.
   * GET version_groups/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new version_group.
   * POST version_groups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const body = await request.all();
      const version_group = await VersionGroup.create(body);
      return response.status(201).json(version_group);
    } catch (e) {
      // console.log(e);
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Display a single version_group.
   * GET version_groups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const { id } = params;
      const version_group = await VersionGroup.find(id);
      return response.status(200).json(version_group);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Render a form to update an existing version_group.
   * GET version_groups/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update version_group details.
   * PUT or PATCH version_groups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const { id } = params;
      const body = request.all();
      const version_group = await VersionGroup.find(id);

      if (version_group) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      version_group.merge();
      await version_group.save();
      return response.status(200).json(version_group);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Delete a version_group with id.
   * DELETE version_groups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params;
      const version_group = await VersionGroup.find(id);

      if (version_group) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      await version_group.delete();
      return response.status(200).send({ message: 'Success!' });
    } catch (e) {
      return response.status(401).send({ message: 'Something went wrong!' });
    }
  }
}

module.exports = VersionGroupController;
