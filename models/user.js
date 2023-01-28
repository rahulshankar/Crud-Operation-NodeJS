const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name:{
        type: String,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    course : {
        type : String,
        required : true
    }

})

module.exports = mongoose.model('User', userSchema)