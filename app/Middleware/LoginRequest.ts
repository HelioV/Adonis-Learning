import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class LoginRequest {
  public async handle(
    { request, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    
    //response.unauthorized({ error: 'Logado com sucesso' })
    await next()
  }
}
