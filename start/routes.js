'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const User = use('App/Models/User');

Route.get('/create-and-loggin-user', async ({ auth }) => {

  const user = await User.findOrCreate({ email: 'higo@rocketseat.com.br' },{
    username: 'higoribeiro',
    email: 'higo@rocketseat.com.br',
    password: 'higo1234',
  })

  const token = await auth.attempt('higo@rocketseat.com.br', 'higo1234');

  return token

})

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/device', () => {
  return 'you can'
}).middleware('auth', 'device', 'isDevice:admin')

Route.get('/device-other-page', () => {
  return 'you can'
}).middleware('auth', 'device', 'canDevice:read')

Route.get('/api', () => {
  return 'you can'
}).middleware('auth', 'is:admin')
