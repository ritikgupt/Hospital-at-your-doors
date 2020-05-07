var express=require("express");
var router=express.Router();
var Medication=require('../models/medication')
router.get("/medication",async(req,res,next)=>{
    res.render("medication");
})
router.post("/medication",async(req,res,next)=>{
Medication.create({
    times:req.body.times,
    quantity:req.body.quantity,
    medicines:req.body.medicines,
    report:req.body.report,
    hospitilization:req.body.hospitilization
})
res.send('medication sent');
})
module.exports=router;