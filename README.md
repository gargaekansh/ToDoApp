# ToDo-app

The project uses express routes to post update and delete the data in the mongodb database and subsequently render results 

    Features:
    Get All Todos Items
    Add a new Todo Item 
    Delete all the Todos Items



# Github Repository Link
  https://github.com/gargaekansh/ToDoApp.git

  # YAML Files
    
    https://github.com/gargaekansh/ToDoApp/tree/main/YAML

  # WebApp Dockerhub Image Links  

     https://hub.docker.com/repository/docker/gargaekansh/todoapp/general  

   # Mongo DB Dockerhub Image Links  

       https://hub.docker.com/_/mongo
     
   #  Mongo Deployment URLs


     GET  http://34.121.103.116:30100/api/todos

     POST http://34.121.103.116:30100/api/todos

       Content-Type: application/json

        Payload:

        {
            "task": "First Todo Item"
        }


      DELETE  http://localhost:3000/api/todos

  #  Local Deployment URLs

      GET http://localhost:3000/api/todos


      POST http://localhost:3000/api/todos

        Content-Type: application/json

        Payload:

        {
            "task": "Second Todo Item"
        }


        
       DELETE  http://localhost:3000/api/todos