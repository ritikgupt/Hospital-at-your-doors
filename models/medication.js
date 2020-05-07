var c=require("mongoose");
var MedicationSchema=new c.Schema({
    medicines:{type:String,required:true},
    quantity:{type:String,required:true},
    times:{type:String,required:true},
    hospitilization:{type:String,required:true},
    report:{type:String,required:true},
})
module.exports=c.model("Medication",MedicationSchema)