var c=require("mongoose");
var AppointmentSchema=new c.Schema({
    time:{type:String,required:true},
    reason:{type:String,required:true},
    symptoms:{type:String,required:true},
    precaution:{type:String,required:true},
    v_doc:{type:String,required:true},
    report:{type:String,required:true},
    patient_id:{type:String,required:true},
    severity:{type:String,required:true},
})
module.exports=c.model("Appointment",AppointmentSchema)