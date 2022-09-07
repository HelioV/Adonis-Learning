import { DateTime } from 'luxon'
import { BaseModel, column,HasMany, hasMany, HasOne, hasOne, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import Profile from './Profile'
import Skill from './Skill'
export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({serializeAs: null})
  public password: string

  @column({})
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=>Post)
  public posts: HasMany<typeof Post>

  @hasOne(()=>Profile)
  public profile: HasOne<typeof Profile>

  @manyToMany(() => Skill, {
    pivotTable: 'skill_users',
    pivotColumns: ['proficiency'],
  })
  public skills: ManyToMany<typeof Skill>
}
