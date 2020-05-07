var c=require("mongoose");
var PatientSchema=new c.Schema({
    fname:String,
    lname:String,
    state:String,
    allergy:String,
    drugallergy:String,
    blood:String,
    status:String,
    age:String,
    father:String,
    occupation:String,
    nutrition:String,
    religion:String,
    family_medical:String,
    past_illness:String,
    gender:String,
    surgery:String
})
module.exports=c.model("Patient",PatientSchema)
