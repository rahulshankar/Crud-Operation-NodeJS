const express = require('express')
const router = express.Router()
const User = require('../models/user')

//to get all users
router.get('/', async(req, res) => {
    try{
            const users = await User.find()
            res.json(users)
    }catch(err){
        res.send('Error' + err)
    }
})


// to get user by id
router.get('/:id', async(req, res) => {
    try{
            const user = await User.findById(req.params.id)
            res.json(user)
    }catch(err){
        res.send('Error' + err)
    }
})

// post 
router.post('/', async(req, res) => {
    const user = new User({
        name : req.body.name,
        department : req.body.department,
        course : req.body.course
    })
    try{
            const user1 = await user.save()
            res.json(user1)
    }catch(err){
        res.send('Error' + err)
    }
})

// patch
router.patch('/:id', async(req,res) => {
    try{
        const user = await User.findById(req.params.id)
        user.course = req.body.course
        const u1 = await user.save()
        res.json(u1)
    }
    catch(err){
        console.log('Error' +err)
    }
})

// delete
router.patch('/:id', async(req,res) => {
    try{
        const user = await User.findById(req.params.id)
        const u1 = await user.remove()
        res.json(u1)
    }
    catch(err){
        console.log('Error' +err)
    }
})

module.exports = router