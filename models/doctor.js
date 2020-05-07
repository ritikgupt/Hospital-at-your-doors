var c=require("mongoose");
var DoctorSchema=new c.Schema({
    fname:String,
    lname:String,
    speacialist:String,
    state:String,
    hospital:String,
    blood:String,
    gender:String,
    status:String,
    hos_time:String
})
module.exports=c.model("Doctor",DoctorSchema)
