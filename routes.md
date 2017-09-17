Routes 

API Endpoints

Lists
- Get /api/lists - returns all lists for that user 
- Get /api/lists/:id - returns list
- POST /api/lists - creates a chirp
- PATCH /api/lists/:id - edit a chirp
- DELETE /api/lists/:id - remove a chirp

Tasks
- Get /api/lists - returns all tasks for that user 
- Get /api/lists/:id - returns task
- POST /api/lists - creates a task
- PATCH /api/lists/:id - edit a task
- DELETE /api/lists/:id - remove a task

Notes
- Get /api/tasks/notes - returns all notes for that task
- POST /api/notes - creates a note
- PATCH /api/notes/:id - edit a note
- DELETE /api/notes/:id - remove a note

Users

- GET /api/users/:id - return user info 
- POST /api/users - sign up

Sessions 
- POST /api/session/:id - login 

Frontend Routes

/ - homescreen
/login
/signup
/list/all - all task
/list/today - task due today
/list/tommorrow - task due tommorrow
/list/this week - task due this week
/list/trash - task in trash
/list/:id/completed - task completed in that list
/list/:id - custom list
