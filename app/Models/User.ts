import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel,hasMany,hasOne,manyToMany,ManyToMany,HasMany,HasOne } from '@ioc:Adonis/Lucid/Orm'
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
    localKey: 'id',
    pivotForeignKey: 'user_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'skill_id',
    pivotColumns: ['proficiency'],
  })
  public skills: ManyToMany<typeof Skill>

  @beforeSave()
  public static async hashPassword (User: User) {
    if (User.$dirty.password) {
      User.password = await Hash.make(User.password)
    }
  }
}
