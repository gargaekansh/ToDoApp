
// var router = express.Router();
// var ObjectId = require('mongodb').ObjectID;

const express = require('express');
const Model = require('../models/model');
const router = express.Router();


// router.get('/', (req, res, next) => {
// 	let _id = req.query._id ? ObjectId(req.query._id) : null;
// 	var profile_id = req.query.profile_id;
// 	var username = req.query.username;
// 	var password = req.query.password;
// 	let where = {};
// 	if (_id) where._id = _id;
// 	if (profile_id) where.profile_id = parseInt(profile_id);
// 	if (username) where.username = username;
// 	if (password) where.password = password;

// 	db.collection('users')
// 		.find(where)
// 		.toArray((err, result) => {
// 			res.send(200, result);
// 		});
// });



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



//Get all Method
router.get('/todos', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})



// router.post('/', (req, res, next) => {
// 	db.collection('users').save(req.body, (err, result) => {
// 		if (err) return console.log(err);
// 		let user = result.ops[0];
// 		console.log('collection("users").save => user', user);
// 		res.status(200).send(user);
// 	});
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



//Post Method
router.post('/todos', async (req, res) => {
    const data = new Model({
        name: req.body.name,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


// router.put('/', (req, res, next) => {
// 	let vm = req.body;
// 	let _id = vm._id;
// 	delete vm['_id'];
// 	db.collection('users').updateOne(
// 		{
// 			_id: ObjectId(_id)
// 		},
// 		{
// 			$set: vm
// 		},
// 		(err, result) => {
// 			if (err) return res.send(err);
// 			res.send(200);
// 		}
// 	);
// });

// router.delete('/', (req, res, next) => {
// 	let _id = req.query._id ? ObjectId(req.query._id) : null;
// 	console.log('_id', _id);
// 	if (!_id) {
// 		res.send(400, 'Inform the user ID');
// 		return;
// 	}
// 	let filter = {_id: _id};
// 	db.collection('users')
// 		.find(filter)
// 		.toArray((err, result) => {
// 			if (result.length === 0) {
// 				res.send(400, 'User not found');
// 				return;
// 			}
// 			db.collection('users').deleteOne(filter, (err, result) => {
// 				if (err) return res.send(500, err);
// 				res.send(200);
// 			});
// 		});
// });

module.exports = router;
