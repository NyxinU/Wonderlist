# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!(
    username: 'invisibleman',
    password: 'teddywinters',
    email: 'Invisman@gmail.com',
    first_name: 'Ivan',
    last_name: 'Bliminse'
  )

Task.destroy_all

Task.create!(
  title: 'be awesome',
  due: "2017-09-22",
  reward: "awesomeness"
 )

Task.create!(
  title: 'learn latin',
  due: "2017-09-25",
  reward: "get vanilla ice cream"
 )
