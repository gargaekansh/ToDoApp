var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var app = express();

var port = process.env.PORT || 3000;

 let mongoUrlK8s = `mongodb://${process.env.USER_NAME}:${process.env.USER_PWD}@${process.env.DB_URL}`

// use when starting application locally with node command
//let mongoUrlLocal = "mongodb://admin:password@localhost:27017";

//db connection with mongoose(mongodb)
 mongoose.connect(mongoUrlK8s, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// // // mongoose.connect("mongodb://localhost/todo", {
// // //     dbName :'todos',
// // //     useNewUrlParser: true,
// // //     useUnifiedTopology: true
// // // });

//to get the css file from public folder
app.use(express.static(__dirname + '/public'));

//interact with index.ejs
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//mongoose schema
var todoSchema = new mongoose.Schema({
    // name: String

    name: { type: String, required: true }
});

var Todo = mongoose.model("Todo", todoSchema);


//routes
// app.get("/", (req, res)=>{
//     ////Todo.find({}, (error, todoList)=>{
//     //     if(error){
//     //         console.log(error);
//     //     }
//         // else{
//             console.log(`app.get`);

//             const todoList = [
//                 new Todo ( {  name: 'Ram'}) ,
//                 new Todo ( {  name: 'Shyam' }),
//                 new Todo({  name: 'Hari'})
//               ];

//               console.log(todoList); 


//             // console.log(todoList);

//             // var result = Object.entries(todoList);
//             //    console.log(result);

//             res.render("index.ejs", {todoList: todoList});
//         // }
//     // });
// });


//routes
app.get("/", (req, res)=>{
    Todo.find({}, (error, todoList)=>{
        if(error){
            console.log(error);
        }
        else{
            res.render("index.ejs", {todoList: todoList});
        }
    });
});


//route for adding new task
app.post("/newtodo", (req, res)=>{
    var newTask = new Todo({
        name: req.body.task
    });

console.log(newTask);

    //add to db
    Todo.create(newTask, (err, Todo)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(`inserted ${newTask} to the database todo`);
            res.redirect("/");
        }
    });
});

//route to delete a task by id
app.get("/delete/:id", (req, res)=>{
    var taskId = req.params.id;//get the id from the api 
    console.log(req.params.id);
    mongoose.model('Todo').deleteOne({_id: taskId}, (err, result)=>{
        if(err){
            console.log(`Error is deleting the task ${taskId}`);
        }
        else{
            console.log("Task successfully deleted from database");
            res.redirect("/");
        }
    });
});

//route for deleting all tasks
app.post("/delAlltodo", (req, res)=>{
    var myquery = { name: /^O/ };
    mongoose.model('Todo').deleteMany({}, (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(`Deleted all tasks`);
            res.redirect("/");
        }
    });
});

//catch the invalid get requests
app.get("*", (req, res)=>{
    res.send("<h1>Invalid Page</h1>");
});

//listen on port 3000
app.listen(port, (error)=>{
    if(error){
        console.log("Issue in connecting to the server");

        //http://localhost:3000/
    }
    else{
        console.log("Successfully connected to the server");
    }
})
