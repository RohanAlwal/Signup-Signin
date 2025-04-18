const mongoose = require('mongoose')

const userSchema1 = new mongoose.Schema({
    username : {type:String, required:true},
    email : {type:String, required:true},
    password : {type:String, required:true}
});

module.exports = mongoose.model('User', userSchema1);