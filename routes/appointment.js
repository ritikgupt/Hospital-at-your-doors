var express=require("express");
var router=express.Router();
var Appointment=require('../models/appointment')
router.get("/appointment",async(req,res,next)=>{
    res.render("appointment");
})
router.post("/appointment",async(req,res,next)=>{
Appointment.create({
    time:req.body.time,
    disease:req.body.disease,
    severity:req.body.severity,
    description:req.body.description,
    report:req.body.report,
})
res.send('appointment requested');
})
module.exports=router;