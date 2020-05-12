var express=require("express");
var router=express.Router();
const Doctor=require('../models/doctor');
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    else
    res.redirect("/login");
}
router.get("/doctor",async(req,res,next)=>{
    res.render("doctor",{currentUser:req.user})
})
router.post("/doctor",async(req,res,next)=>{
    Doctor.create({
        lname:req.body.lname,
        fname:req.body.fname,
        speacialist:req.body.speacialist,
        state:req.body.state,
        hospital:req.body.hospital,
        blood:req.body.blood,
        gender:req.body.gender,
        age:req.body.age,
        hos_time:req.body.hos_time,
        degree:req.body.degree
    })
    res.redirect("/")
})
module.exports=router