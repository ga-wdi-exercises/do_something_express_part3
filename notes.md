# Current Problems
* List and Task are not parsing correct values from post requests via Postman. Specifically fields other than id and listId interestingly enough.
* My task's fields are different than the solutions
* Did not need to create seed files or list/task data as json files
* When I did try to run ```node db/seed.js``` the lists where loaded but not the tasks due to Sequelize error "unknown validation"--look into that
