
const express = require('express');
const Model = require('../models/model');
const router = express.Router();



//Get all todos
router.get('/todos', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})




//Post Method  - Create new Todo Item 
router.post('/todos', async (req, res) => {
    const data = new Model({
        name: req.body.task,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


//Delete  Method - Delete all Todo Items 
router.delete("/todos",async (req, res)=>{

    try {
        const data = await Model.deleteMany({})
        res.status(200);
        res.send(`All Todo Items have been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});



module.exports = router;
