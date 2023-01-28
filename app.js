const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost/users'

const app = express() // to start express 

//DB connection
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log('Connected....')
})

//permission for json
app.use(express.json())

//routes
const userRouters = require('./routes/users')
app.use('/users', userRouters)

app.listen(9000, () => {
    console.log('Server started')
})