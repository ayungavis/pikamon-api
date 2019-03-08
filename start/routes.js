'use strict';

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
const Route = use('Route');
const Prefix = 'api/v1';

Route.on('/').render('welcome');

Route.group(() => {
  Route.get('/', 'TypeController.index');
  Route.get(':id', 'TypeController.show');
  Route.post('/', 'TypeController.store').middleware('auth');
  Route.patch(':id', 'TypeController.update').middleware('auth');
  Route.delete(':id', 'TypeController.destroy').middleware('auth');
}).prefix(`${Prefix}/types`);

Route.group(() => {
  Route.get('/', 'MoveController.index');
  Route.get(':id', 'MoveController.show');
  Route.post('/', 'MoveController.store').middleware('auth');
  Route.patch(':id', 'MoveController.update').middleware('auth');
  Route.delete(':id', 'MoveController.destroy').middleware('auth');
}).prefix(`${Prefix}/moves`);

Route.group(() => {
  Route.get('/', 'AbilityController.index');
  Route.get(':id', 'AbilityController.show');
  Route.post('/', 'AbilityController.store').middleware('auth');
  Route.patch(':id', 'AbilityController.update').middleware('auth');
  Route.delete(':id', 'AbilityController.destroy').middleware('auth');
}).prefix(`${Prefix}/abilities`);

Route.group(() => {
  Route.get('/', 'PokemonController.index');
  Route.get(':id', 'PokemonController.show');
  Route.post('/', 'PokemonController.store').middleware('auth');
  Route.patch(':id', 'PokemonController.update').middleware('auth');
  Route.delete(':id', 'PokemonController.destroy').middleware('auth');
}).prefix(`${Prefix}/pokemons`);

Route.group(() => {
  Route.post('register', 'AuthController.register');
  Route.post('login', 'AuthController.login');
  Route.get('check', 'AuthController.check').middleware('auth');
  Route.post('refresh', 'AuthController.refreshToken').middleware('auth');
  Route.post('logout', 'AuthController.logout').middleware('auth');
}).prefix(`${Prefix}/auth`);
