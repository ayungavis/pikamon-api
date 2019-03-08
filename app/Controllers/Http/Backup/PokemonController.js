'use strict';

const Pokemon = use('App/Models/Pokemon');
const DataGrid = use('DataGrid');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pokemons
 */
class PokemonController {
  /**
   * Show a list of all pokemons.
   * GET pokemons
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const config = {
      query() {
        return Pokemon.query()
          .with('pokemonAbility')
          .with('baseStat')
          .with('pokemonType')
          .with('pokemonMove')
          .with('pokemonEvolutionMatchup');
      },
      sortable: {
        pok_id: 'pok_id',
        pok_name: 'pok_name',
        pok_height: 'pok_height',
        pok_weight: 'pok_weight',
        pok_base_experience: 'poke_base_experience',
        latitude: 'latitude',
        longitude: 'longitude',
      },
      searchable: ['pok_name', 'pok_height', 'pok_weight', 'latitude', 'longitude'],
      filterable: {
        pok_id: 'pok_id',
        pok_name: 'pok_name',
        pok_height: 'pok_height',
        pok_weight: 'pok_weight',
        pok_base_experience: 'poke_base_experience',
        latitude: 'latitude',
        longitude: 'longitude',
      },
    }
    return DataGrid.paginate(config);
  }

  /**
   * Render a form to be used for creating a new pokemon.
   * GET pokemons/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new pokemon.
   * POST pokemons
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const body = await request.all();
      const pokemon = await Pokemon.create(body);
      return response.status(201).json(pokemon);
    } catch (e) {
      // console.log(e);
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Display a single pokemon.
   * GET pokemons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const { id } = params;
      const pokemon = await Pokemon.find(id);
      return response.status(200).json(pokemon);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Render a form to update an existing pokemon.
   * GET pokemons/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update pokemon details.
   * PUT or PATCH pokemons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const { id } = params;
      const body = request.all();
      const pokemon = await Pokemon.find(id);

      if (pokemon) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      pokemon.merge();
      await pokemon.save();
      return response.status(200).json(pokemon);
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }

  /**
   * Delete a pokemon with id.
   * DELETE pokemons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params;
      const pokemon = await Pokemon.find(id);

      if (pokemon) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      await pokemon.delete();
      return response.status(200).send({ message: 'Success!' });
    } catch (e) {
      return response.status(401).send({ message: 'Something went wrong!' });
    }
  }
}

module.exports = PokemonController;
