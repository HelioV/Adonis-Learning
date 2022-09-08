import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

    Route.resource('users','UsersController').apiOnly()

    Route.post('uploadphotouser','UsersController.uploadFile')
  }).prefix('/api')
  .middleware('auth')


