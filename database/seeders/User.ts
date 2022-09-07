import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public static developmentOnly = true
  public async run () {
    // Write your database queries inside the run method
    const uniqueKey='email'
    await User.fetchOrCreateMany(uniqueKey,[
      {password:'123456', email:'adamastor@gmail.com'},
      {password:'123456', email:'ermelinda@gmail.com'},
      {password:'123456', email:'edgarviegas@gmail.com'},
      {password:'123456', email:'moraisQuifrica@gmail.com'},
      {password:'123456', email:'zeferinoZenga@gmail.com'},
      {password:'123456', email:'anatavaresviegas@gmail.com'}
    ])
  }
}
