const express = require('express');

var mongoose = require('mongoose');

var cors = require('cors');

var app = express();

var port = process.env.PORT || 3000;

const databasename = process.env.MONGO_DB;


// CONTROLLERS
const routes = require('./routes/routes');

app.use(express.json());

//CORS
app.use(cors())


try {

    const mongoUrllocal = 'mongodb://127.0.0.1:27017/tododb';

    // let mongoUrlK8sheadlessService = `mongodb+srv://${process.env.DB_URL}/${process.env.MONGO_DB}?ssl=false&authSource=admin&retryWrites=true&w=majority`;
   
    const mongoUrlK8sheadlessService = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?replicaSet=${process.env.MONGO_REPLICASET}&authSource=admin`;


   // console.log('mongoUrlK8sheadlessService =' + mongoUrlK8sheadlessService);



    //db connection with mongoose(mongodb)
        mongoose.connect(mongoUrlK8sheadlessService, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("I CAN CONNECT !!")

    app.use('/api', routes)

}
catch (error) {

    console.log("Error Connection  !!")

    console.log(error);

}



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
