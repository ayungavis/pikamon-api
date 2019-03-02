'use strict'

const Type = use('App/Models/Type')
const Database = use('Database')

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
  async index ({ request, response, view }) {
    let types = await Type.all()
    return response.json(types)
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
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new type.
   * POST types
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const input = request.only([
      'name'
    ])
    const type = new Type()

    type.name = input.name

    await type.save()
    return response.status(201).json(type)
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
  async show ({ params, request, response, view }) {
    const type = await Type.find(params.id)
    return response.json(type)
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
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update type details.
   * PUT or PATCH types/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const input = request.only([
      'name'
    ])
    const type = await Type.find(params.id)

    if (!type) {
      return response.status(404).json({data: 'Resource not found'})
    }

   type.name = input.name

    await type.save()
    return response.status(200).json(type)
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
    const type = await Type.find(params.id)

    if (!type) {
      return response.status(404).json({data: 'Resource not found'})
    }

    await type.delete()
    return response.status(204).json(null)
  }
}

module.exports = TypeController
