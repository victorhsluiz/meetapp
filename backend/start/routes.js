'use strict'

const Route = use('Route')

Route.post('signin', 'SessionController.store').validator('Session')
Route.post('signup', 'UserController.store').validator('User/Store')

Route.group(() => {
  Route.get('/user/:id', 'UserController.show')
  Route.put('/user/:id', 'UserController.update').validator('User/Update')

  Route.post('/meetups', 'MeetupController.store').validator('Meetup')
  Route.get('/meetups/:id', 'MeetupController.show')
  Route.post('/meetups/:id/subscribe', 'MeetupSubscriptionController.store')
  Route.delete('/meetups/:id/subscribe', 'MeetupSubscriptionController.destroy')

  Route.get('/files/:id', 'FileController.show')
  Route.post('/files', 'FileController.store')
}).middleware(['auth'])
