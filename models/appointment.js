var c=require("mongoose");
var AppointmentSchema=new c.Schema({
    time:{type:String,required:true},
    disease:{type:String,required:true},
    severity:{type:String,required:true},
    description:{type:String,required:true},
})
module.exports=c.model("Appointment",AppointmentSchema)
