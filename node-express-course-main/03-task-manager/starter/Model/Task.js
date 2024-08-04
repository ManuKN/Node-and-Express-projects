const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , 'Name is Required'],
        trim:true,
        maxlength:[20 , 'Your Name should be less than 20 Charecters']
    },
    completed:{
        type:Boolean,
        default:false
    },
})

module.exports = mongoose.model('Task',TaskSchema);