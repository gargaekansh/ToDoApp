const express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var argv = require('minimist')(process.argv.slice(2));
var cors = require('cors');

var app = express();

var port = process.env.PORT || 3000;

const databasename = process.env.MONGO_DB;


// CONTROLLERS
// var todosCtrl = require('./controllers/todos');
// const routes = require('./controllers/todos');

const routes = require('./routes/routes');

//CORS
app.use(
	cors({
		credentials: true,
		origin: true
	})
);
app.options('*', cors());

////app.use(cors())

// // // Configure the API domain
// // var domain = 'localhost';
// // if (argv.domain !== undefined) domain = argv.domain;
// // else
// // 	console.log(
// // 		'No --domain=xxx specified, taking default hostname "localhost".'
// // 	);


try {

    const mongoUrllocal = 'mongodb://127.0.0.1:27017/tododb';

    // let mongoUrlK8sheadlessService = `mongodb+srv://${process.env.DB_URL}/${process.env.MONGO_DB}?ssl=false&authSource=admin&retryWrites=true&w=majority`;
   
    //const mongoUrlK8sheadlessService = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?replicaSet=${process.env.MONGO_REPLICASET}&authSource=admin`;
   // const mongoUrlK8sheadlessService = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?replicaSet=${process.env.MONGO_REPLICASET}&authSource=admin`;


   // console.log('mongoUrlK8sheadlessService =' + mongoUrlK8sheadlessService);



    //db connection with mongoose(mongodb)
    //// mongoose.connect(mongoUrlK8sheadlessService, {
        mongoose.connect(mongoUrllocal, {
        // dbName:${process.env.MONGO_DB},
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("I CAN CONNECT !!")


    // app.use('/api/v1/todos', todosCtrl);

    // app.use('/api/v1', todosCtrl);

    app.use('/api', routes)

}
catch (error) {

    console.log("Error Connection  !!")

    console.log(error);

}


// // //to get the css file from public folder
// // app.use(express.static(__dirname + '/public'));

//interact with index.ejs
// // app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

//mongoose schema
// // var todoSchema = new mongoose.Schema({
// //     // name: String

// //     name: { type: String, required: true }
// // });

// // var Todo = mongoose.model("Todo", todoSchema);

// console.log("host " + Todo.db.host); // localhost
// console.log("port " + Todo.db.port); // 27017
// console.log("db.name " + Todo.db.name); // myDatabase



// //routes
// app.get("/", (req, res)=>{
//     Todo.find({}, (error, todoList)=>{
//         if(error){
//             console.log(error);
//         }
//         else{
//             res.render("index.ejs", {todoList: todoList});
//         }
//     });
// });


// //route for adding new task
// app.post("/newtodo", (req, res)=>{
//     var newTask = new Todo({
//         name: req.body.task
//     });

// console.log(newTask);

//     //add to db
//     Todo.create(newTask, (err, Todo)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(`inserted ${newTask} to the database todo`);
//             res.redirect("/");
//         }
//     });
// });

//route to delete a task by id
// app.get("/delete/:id", (req, res)=>{
//     var taskId = req.params.id;//get the id from the api 
//     console.log(req.params.id);
//     mongoose.model('Todo').deleteOne({_id: taskId}, (err, result)=>{
//         if(err){
//             console.log(`Error is deleting the task ${taskId}`);
//         }
//         else{
//             console.log("Task successfully deleted from database");
//             res.redirect("/");
//         }
//     });
// });

//route for deleting all tasks
// app.post("/delAlltodo", (req, res)=>{
//     var myquery = { name: /^O/ };
//     mongoose.model('Todo').deleteMany({}, (err, result)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(`Deleted all tasks`);
//             res.redirect("/");
//         }
//     });
// });

//catch the invalid get requests
// app.get("*", (req, res) => {
//     res.send("<h1>Invalid Page</h1>");
// });

//listen on port 3000
app.listen(port, (error) => {
    if (error) {
        console.log("Issue in connecting to the server " + error);

        //http://localhost:3000/
    }
    else {
        console.log("Successfully connected to the server . server running on port 3000 . http://localhost:3000/");
    }
})
