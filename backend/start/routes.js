'use strict'

const Route = use('Route')

Route.post('/sessions', 'SessionController.store').validator('Session')
Route.post('/users', 'UserController.store').validator('User/Store')

Route.group(() => {
  Route.get('/users/:id', 'UserController.show')
  Route.put('/users/:id', 'UserController.update').validator('User/Update')
}).middleware(['auth'])
