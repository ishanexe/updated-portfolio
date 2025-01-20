const mongoose = require('mongoose')
// const {Schema}=mongoose;

const UserSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    }
})

module.exports=mongoose.model('people', UserSchema)