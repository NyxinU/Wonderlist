# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user = User.create (
  [
    {
      username: 'invisibleman',
      password: 'teddywinters',
      email: 'Invisman@gmail.com',
      first_name: 'Ivan',
      last_name: 'Bliminse'
    },
    {
      username: 'nyxin',
      password: '12345678',
      email: 'nyxin@gmail.com',
      first_name: 'Nixon',
      last_name: 'Yiu'
    },
  ]
)


Task.destroy_all

task = Task.create(
  [
    {
      title: 'be awesome',
      due: Date.parse("01/01/2018"),
      reward: "awesomeness"
    },
    {
      title: 'learn latin',
      due: Date.parse("30/09/2018"),
      reward: "get vanilla ice cream"
    },
    {
      title: 'finish full stack',
      due: Date.parse("29/09/2017"),
      reward: "start on javascript project"
    },
    {
      title: 'finish Js project',
      due: Date.parse("05/10/2017"),
      reward: "start on flex project"
    },
    {

      title: 'finish flex project',
      due: Date.parse("19/10/2017"),
      reward: "study algorithms"
    },
  ]
)
