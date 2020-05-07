const mongoose=require('mongoose');
const h = require('passport-local-mongoose');
const UserSchema= new mongoose.Schema({
    username:{type:String,required:true},
    address:{type:String,required:true},
    mobile:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true,default:'123'},
    fd:{type:String,required:true}
})
UserSchema.plugin(h);
module.exports = mongoose.model('User', UserSchema);

