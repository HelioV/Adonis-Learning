import Route from '@ioc:Adonis/Core/Route'
import Post from 'App/Models/Post'
import authConfig from 'Config/auth'
Route.resource('posts','PostsController').apiOnly()
 
Route.get('post/:id', async ({ bouncer, request }) => {
    const post = await Post.findOrFail(request.param('id'))
    await bouncer
    .with('PostPolicy')
    .authorize('view', post)
  }).middleware('auth')