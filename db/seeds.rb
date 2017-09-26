# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create ({
  username: 'invisibleman',
  password: 'teddywinters',
  email: 'Invisman@gmail.com',
  first_name: 'Ivan',
  last_name: 'Bliminse'
})

user2 = User.create ({
  username: 'nyxin',
  password: '12345678',
  email: 'nyxin@gmail.com',
  first_name: 'Nixon',
  last_name: 'Yiu'
})

List.destroy_all

list1 = List.create!({
  title: "App Academy",
  user_id: user1.id
})
list2 = List.create!({
  title: "Errands",
  user_id: user1.id
})

Task.destroy_all

task1 = Task.create!({
  title: 'be awesome',
  user_id: user1.id,
  list_id: list1.id,
  due: Date.parse("01/01/2018"),
  reward: "awesomeness"
})

task2 = Task.create!({
  title: 'Finish full stack project',
  user_id: user1.id,
  list_id: list2.id,
  due: Date.parse("28/09/2018"),
  reward: "start JS project"
})
