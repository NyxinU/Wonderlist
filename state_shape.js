{
  lists : {
    byId : {
      "list1" : {
        id: "list1",
        author: "user1",
        title: "All Task",
        tasks: ["task1", "task2", "task3"]
      },
      "list2" : {
        id: "list2",
        author: "user1",
        title: "Today",
        tasks: ["task1", "task2"]
      },
      "list3" : {
        id: "list3",
        author: "user1",
        title: "App Academy",
        tasks: ["task1", "task2", "task3"]
      }
    }
    allIds : ["list1", "list2", "list3"]
  },
  tasks : {
    byId : {
      "task1" : {
        id: "task1",
        author: "user1",
        title: "Fullstack Proposal",
        due: "9/18/2017",
        reward: "eat ice cream",
        notes: ["note1"]
      },
      "task2" : {
        id: "task2",
        author: "user1",
        title: "Do UI/UX Homework",
        due: "9/18/2017",
        reward: "take 15 min break",
        notes: []
      }
    }
    allIds : ["task1", "task2"]
  },
  notes : {
    byId : {
      "note1" : {
        id: "note1",
        body: "MVP task, list, list summary, search"
      }
    }
    allIds : ["note1"]
  },
  users : {
    byId : {
      "user1" : {
        id: "user1"
        username: "username1"
        firstName: "firstname1"
        lastName: "lastName1"
      }
    }
    allIds : ["user1"]
  }
}
