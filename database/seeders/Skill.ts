import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Skill from 'App/Models/Skill'
export default class extends BaseSeeder {
  public static developmentOnly = true
  public async run () {
    // Write your database queries inside the run method
    await Skill.createMany([
      {nome:'Desenvolvedor Mobile'},
      {nome:'Web Designer'},
      {nome:'Desenvolvedor Web'},
      {nome:'Desenvolvedor Fullstack'},
      {nome:'Desenvolvedor Front-End'},
      {nome:'Desenvolvedor Back-End'}
    ])
  }
}
