import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
     try {
       
      const users = await User.query().preload('profile');
      return users;

     } catch (error) {
       console.log("Erro Index:",error)
     }
  }

  public async store({request}: HttpContextContract) {
    try {
      const createDate = request.all();
      const user = await User.create(createDate);
      return user;
    } catch (error) {
      console.log("Erro Store:",error)
    }
  }

  public async show({params}: HttpContextContract) {
  try {
    const user =await User.findOrFail(params.id);
    return user;
  } catch (error) {
    console.log("Erro Show:",error)
  }
  }


  public async update({request,params}: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id);
      user.merge(request.all())
      return user.save()
    } catch (error) {
      console.log("Erro Update:",error)
    }
  }

  public async destroy({params}: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id);
      await user.delete()
    } catch (error) {
      console.log("Erro Eliminação:",error)
    }
  }
}
