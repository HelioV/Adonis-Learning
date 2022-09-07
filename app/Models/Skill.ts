import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Skill extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string
 
  @manyToMany(() => User, {
    pivotTable: 'skill_users',
    pivotColumns: ['proficiency'],
  })
  public users: ManyToMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
