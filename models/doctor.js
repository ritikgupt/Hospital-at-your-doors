var mongoose=require("mongoose");
var DoctorSchema=new mongoose.Schema({
    fname:String,
    lname:String,
    speacialist:String,
    state:String,
    hospital:String,
    blood:String,
    gender:String,
    age:String,
    degree:String,
    hos_time:String
})
module.exports=mongoose.model("Doctor",DoctorSchema)
