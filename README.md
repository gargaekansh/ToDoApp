# ToDo-app

The project uses express routes to post update and delete the data in the mongodb database and subsequently render results 

    Features:
    Get All Todos Items
    Add a new Todo Item 
    Delete all the Todos Items



# Github Repository Link
  https://github.com/gargaekansh/ToDoApp.git

  # YAML Files Location
    
    https://github.com/gargaekansh/ToDoApp/tree/main/YAML

  # WebApp Dockerhub Image Links  

     https://hub.docker.com/repository/docker/gargaekansh/todoapp/general  

   # Mongo DB Dockerhub Image Links  

       https://hub.docker.com/_/mongo

       

   # Mongo DB Configuration on Kubernates

       1):-    kubectl exec -it mongo-0 -- mongo


        2):-  rs.initiate({
                "_id" : "rs0",
                "members" : [
                        {
                                "_id" : 0,
                                "host" : "mongo-0.mongo.default.svc.cluster.local:27017",
                        }
                ]
        })

       3):-   use admin

        4):-    db.createUser({
                user: "mongouser",
                pwd: "mongopassword",
                roles: [ { role: "dbOwner", db: "admin" } ]
            })

     
   #  URL for Service API tier to view the records from backend tier.


     GET  http://34.121.103.116:30100/api/todos

     POST http://34.121.103.116:30100/api/todos

       Content-Type: application/json

        Payload:

        {
            "task": "First Todo Item"
        }


     DELETE  http://34.121.103.116:30100/api/todos
     

  #  Local Deployment URLs

      GET http://localhost:3000/api/todos


      POST http://localhost:3000/api/todos

        Content-Type: application/json

        Payload:

        {
            "task": "Second Todo Item"
        }


        
       DELETE  http://localhost:3000/api/todos


  #  firewall rule to allow TCP traffic on  node port

     gcloud compute firewall-rules create test-node-port \
    --allow tcp:30100     


  #  screen recording video Location Sharepoint

         https://nagarro-my.sharepoint.com/:f:/p/akansh_garg/ElgOIzMEEqhPg-eq1bpfaVoBtMeQ6rPfOzaQTte6fuCq7g?e=pbhTFR



  #  screen recording video description       

       1)  "01_GKE_ all objects deployed and running.mp4" 

                  Overall setup of the system.

                  Show all objects deployed and running.

       
       2)  "02_DatabaseDeployment.mp4"    

                   Everything is correctly deployed for database.     
      
       3)  "03_Retrieve records from db.mp4"

                    Run API and retrieve records from db. 
       
       4)  "04_Deleting db pods doesn’t delete data from db"

                     deleting db pods doesn’t delete data from db.

       5)  "05_rolling update.mp4"  

                     rolling update for API service pods.  

       6)  "06_Horizontal Pod Autoscaler.mp4"

                     Horizontal Pod Autoscaler in action Using Postman.                        


      