'use strict';

const PokemonBase = use('App/Models/PokemonBase');
const DataGrid = use('DataGrid');
const Database = use('Database');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pokemons
 */
class PokemonBaseController {
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
        return PokemonBase.query();
          // .with('pokemonAbility')
          // .with('pokemonType');
          // .with('pokemonHasItem')
          // .with('pokemonHasMove');
      },
      sortable: {
        id: 'id',
        name: 'name',
        hp: 'hp',
        attack: 'attack',
        defense: 'defense',
        special_attack: 'special_attack',
        special_defense: 'special_defense',
        speed: 'speed',
        experience: 'experience',
        weight: 'weight',
        height: 'height',
        ability_1: 'ability_1',
        ability_2: 'ability_2',
        ability_3: 'ability_3',
        type_1: 'type_1',
        type_2: 'type_2',
      },
      searchable: ['name',],
      filterable: {
        id: 'id',
        name: 'name',
        hp: 'hp',
        attack: 'attack',
        defense: 'defense',
        special_attack: 'special_attack',
        special_defense: 'special_defense',
        speed: 'speed',
        experience: 'experience',
        weight: 'weight',
        height: 'height',
        ability_1: 'ability_1',
        ability_2: 'ability_2',
        ability_3: 'ability_3',
        type_1: 'type_1',
        type_2: 'type_2',
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
      const pokemon = await PokemonBase.create(body);
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
      const { name } = params;
      const pokemon = await PokemonBase.find(name);
      // const pokemonData = await Database.table('pokemon_base')
      //   .innerJoin('pokemon_ability', 'pokemon_base.ability_1', 'pokemon_ability.name')
      //   .innerJoin('pokemon_ability', 'pokemon_base.ability_2', 'pokemon_ability.name').as('ability2')
      //   .where('pokemon_base.id', id);
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
      const pokemon = await PokemonBase.find(id);

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
      const pokemon = await PokemonBase.find(id);

      if (!pokemon) {
        return response.status(404).send({ message: 'Data not found!' });
      }

      await pokemon.delete();
      return response.status(200).send({ message: 'Success!' });
    } catch (e) {
      return response.status(400).send({ message: 'Something went wrong!' });
    }
  }
}

module.exports = PokemonBaseController;
