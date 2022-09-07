import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Profile from 'App/Models/Profile'

export default class extends BaseSeeder {
  public static developmentOnly = true
  public async run () {
    // Write your database queries inside the run method
    await Profile.createMany([
      {nome:'Adamastro Gimalange',number:'113',endereco:'Talatona',userId:1},
      {nome:'Ermelinda Luzo Tavares Viegas',number:'974326743',endereco:'Mutamba',userId:2},
      {nome:'Edgar Quifica',number:'113',endereco:'Uige candombe',userId:3},
      {nome:'Morais Quifica',number:'113',endereco:'Cidade do Kilamba',userId:4},
      {nome:'Zeferino Matulo',number:'113',endereco:'Viana- Estalagem',userId:5},
      {nome:'Ana Tvares Viegas',number:'992213456',endereco:'Viana- Estalagem',userId:6}
    ])
  }
}
 