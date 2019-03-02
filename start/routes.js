'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Prefix = 'api/v1';

Route.on('/').render('welcome')

Route.group(() => {
	Route.get('/', 'TypeController.index').middleware('auth')
	Route.get(':id', 'TypeController.show').middleware('auth')
	Route.post('/', 'TypeController.store').middleware('auth')
	Route.patch(':id', 'TypeController.update').middleware('auth')
	Route.delete(':id', 'TypeController.destroy').middleware('auth')
}).prefix(Prefix + '/types');

Route.group(() => {
	Route.get('/', 'CategoryController.index').middleware('auth')
	Route.get(':id', 'CategoryController.show').middleware('auth')
	Route.post('/', 'CategoryController.store').middleware('auth')
	Route.patch(':id', 'CategoryController.update').middleware('auth')
	Route.delete(':id', 'CategoryController.destroy').middleware('auth')
}).prefix(Prefix + '/categories');

Route.group(() => {
	Route.get('/', 'PokemonController.index').middleware('auth')
	Route.get(':id', 'PokemonController.show').middleware('auth')
	Route.post('/', 'PokemonController.store').middleware('auth')
	Route.patch(':id', 'PokemonController.update').middleware('auth')
	Route.delete(':id', 'PokemonController.destroy').middleware('auth')
}).prefix(Prefix + '/pokemons');

Route.group(() => {
	Route.post('register', 'AuthController.register');
	Route.post('login', 'AuthController.login');
	Route.get('check', 'AuthController.check').middleware('auth')
	Route.post('refresh', 'AuthController.refreshToken').middleware('auth')
	Route.post('logout', 'AuthController.logout').middleware('auth')
}).prefix(Prefix + '/auth');
