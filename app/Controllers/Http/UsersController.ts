import Application  from '@ioc:Adonis/Core/Application';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
     try {
       
      const users = await User.query()
      .preload('skills')
      .preload('posts')
      .preload('profile');
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
    const user =await User.find(params.id);
    await user?.load('profile')
    await user?.load('skills')
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

  public async uploadFile({request}: HttpContextContract) {
    const user = await User.find(request.input('id'))
    if(user)
    {
      const coverImage = request.file('photo')
      if (coverImage) {
        await coverImage.moveToDisk('./user')
        user.photo=coverImage.filePath
        user.save()
        return "Arquivo alterado com sucesso"
      }
      return "Nenhum arquivo foi carregado"
    }
    else return "Usuario nao achado"
    
  }
}
