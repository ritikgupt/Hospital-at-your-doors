var c=require("mongoose");
var PatientSchema=new c.Schema({
    fname:String,
    lname:String,
    state:String,
    allergy1:String,
    allergy2:String,
    blood:String,
    gender:String,
    status:String,
    surgery:String
})
module.exports=c.model("Patient",PatientSchema)
