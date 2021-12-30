const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const authenticationSchema = mongoose.Schema({

    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }


})
// pre hook or Instance method

authenticationSchema.methods.correctPassword = async (typedPassword,originalPassword)=>{

    return await bcrypt.compare(typedPassword,originalPassword)
}


const authentication = mongoose.model("authentication",authenticationSchema)

module.exports = authentication