import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    try {
      const token = await auth.use('api').attempt(email, password)
      return token
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  }
}
