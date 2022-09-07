import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SkillUser from 'App/Models/SkillUser';
export default class SkillUsersController {
  public async index({}: HttpContextContract) {
    try {
  
     const Posts = await SkillUser.all()
     return Posts;

    } catch (error) {
      console.log("Erro Index:",error)
    }
 }

 public async store({request}: HttpContextContract) {
   try {
     const createDate = request.all();
     const post = await SkillUser.create(createDate);
     return post;
   } catch (error) {
     console.log("Erro Store:",error)
   }
 }

 public async show({params}: HttpContextContract) {
 try {
   const post = await SkillUser.findOrFail(params.id);
   return post;
 } catch (error) {
   console.log("Erro Show:",error)
 }
 }


 public async update({request,params}: HttpContextContract) {
   try {
     const post = await SkillUser.findOrFail(params.id);
     post.merge(request.all())
     return post.save()
   } catch (error) {
     console.log("Erro Update:",error)
   }
 }

 public async destroy({params}: HttpContextContract) {
   try {
     const post = await SkillUser.findOrFail(params.id);
     await post.delete()
   } catch (error) {
     console.log("Erro Eliminação:",error)
   }
 }
}
