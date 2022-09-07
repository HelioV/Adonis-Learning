import User from './User'
import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasManyThrough, hasManyThrough} from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public endereco: string

  @column()
  public number: string

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>User)
  public user: BelongsTo<typeof User>
 
  /*@hasManyThrough([
    ()=>Post,
    ()=>User
  ],{ 
    throughForeignKey:'profileId'
  })
  public posts: HasManyThrough<typeof Post>*/
}
 