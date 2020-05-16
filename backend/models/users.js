const mongoose = require ('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type:String,
        unique:true,
        require:true

    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    role:String,
    tokens:[String],
});
const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;