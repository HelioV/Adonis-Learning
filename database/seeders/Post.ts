import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'
export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Post.createMany([
      {title:'ISPTEC',description:'It is okay to run a PostSeeder multiple times and increase the number of posts you have in the database.',userId:1},
      {title:'UAN',description:'On the other hand, you would want the CountrySeeder to perform inserts only once. These kinds of seeders are idempotent',userId:2},
      {title:'Colégio',description:'Fortunately, Lucid models have inbuilt support for idempotent operations using updateOrCreate or fetchOrCreateMany. Continuing with the CountrySeeder, the following is an example of creating countries only once.',userId:3},
      {title:'França',description:'In the above example, the updateOrCreateMany method will look for existing rows inside the database using the isoCode code and only inserts the missing',userId:4},
      {title:'KALANDULA',description:'The db:seed command accepts an optional --connection flag and forwards it to the seeder files as a connection property. ',userId:5},
      {title:'ISAF',description:'Now you can specify the --connection flag on your db:seed command, and the UserSeeder will use it.',userId:6}
    ])
  }
}
 