var c=require("mongoose");
var DoctorSchema=new c.Schema({
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
module.exports=c.model("Doctor",DoctorSchema)
