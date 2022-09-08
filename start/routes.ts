/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Route from '@ioc:Adonis/Core/Route'
import './include/posts/post'
import './include/profiles/profile'
import './include/users/user'

Route.group(() => {
  Route.get('/chamando', async () => {
    return 204
  })

  Route.resource('skillsusers','SkillUsersController').apiOnly()
}).prefix('/api')
.middleware('auth')


Route.get('/', (ctx) => {
  ctx.response.send('hello world')
}).middleware('auth')

Route.post('login', 'LoginController.login')
 
