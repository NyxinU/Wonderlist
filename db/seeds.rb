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

List.destroy_all

list1 = List.create!({
  title: "App Academy",
  user_id: user1.id
})
list2 = List.create!({
  title: "Errands",
  user_id: user1.id
})
list3 = List.create!({
  title: "Work",
  user_id: user1.id
})
list4 = List.create!({
  title: "Social",
  user_id: user1.id
})

Task.destroy_all

# app Academy tasks
task1 = Task.create!({
  title: 'Finish full stack project',
  user_id: user1.id,
  list_id: list1.id,
  due: Date.parse("28/09/2017"),
  reward: "start JS project"
})

task2 = Task.create!({
  title: 'Finish JS project',
  user_id: user1.id,
  list_id: list1.id,
  due: Date.parse("04/10/2017"),
  reward: "start flex project"
})
task3 = Task.create!({
  title: 'Finish Flex Project',
  user_id: user1.id,
  list_id: list1.id,
  due: Date.parse("20/10/2017"),
  reward: "study algorithms"
})
task4 = Task.create!({
  title: 'Finish week 13 of a/A',
  user_id: user1.id,
  list_id: list1.id,
  due: Date.parse("27/10/2017"),
  reward: "send out 150 resumes"
})
task5 = Task.create!({
  title: 'Send 50 resumes',
  user_id: user1.id,
  list_id: list1.id,
  due: Date.parse("03/11/2017"),
  reward: "send another 50 resumes"
})
task6 = Task.create!({
  title: 'Send 50 resumes',
  user_id: user1.id,
  list_id: list1.id,
  due: Date.parse("10/11/2017"),
  reward: "send another 50 resumes"
})
task7 = Task.create!({
  title: 'Send 50 resumes',
  user_id: user1.id,
  list_id: list1.id,
  due: Date.parse("17/11/2017"),
  reward: "self study until employment"
})

# Errands tasks
task8 = Task.create!({
  title: 'See Optometrist',
  user_id: user1.id,
  list_id: list2.id,
  due: Date.parse("03/10/2017"),
  reward: "pick new glasses"
})
task9 = Task.create!({
  title: 'Drop off package at post office',
  user_id: user1.id,
  list_id: list2.id,
  due: Date.parse("03/10/2017"),
  reward: "grab a drink from boba guys"
})
task12 = Task.create!({
  title: 'Return Library books',
  user_id: user1.id,
  list_id: list2.id,
  due: Date.parse("11/10/2017"),
  reward: "stop by my fav diner"
})
task14 = Task.create!({
  title: 'Buy a bakery',
  user_id: user1.id,
  list_id: list3.id,
  due: Date.parse("01/10/2017"),
  reward: ""
})
# Work tasks
task17 = Task.create!({
  title: 'Rent a van',
  user_id: user1.id,
  list_id: list3.id,
  due: Date.parse("02/11/2017"),
  reward: ""
})

task10 = Task.create!({
  title: 'Pick up supplies from the hardware store',
  user_id: user1.id,
  list_id: list3.id,
  due: Date.parse("03/11/2017"),
  reward: ""
})
task13 = Task.create!({
  title: 'Pick up uniform',
  user_id: user1.id,
  list_id: list3.id,
  due: Date.parse("03/11/2017"),
  reward: ""
})
task11 = Task.create!({
  title: 'Meet Neal at the museum',
  user_id: user1.id,
  list_id: list3.id,
  due: Date.parse("05/11/2017"),
  reward: ""
})
# Social Task
task15 = Task.create!({
  title: 'Book Club meeting',
  user_id: user1.id,
  list_id: list4.id,
  due: Date.parse("25/10/2017"),
  reward: "reward in itself :D"
})
