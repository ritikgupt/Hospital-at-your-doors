const express=require("express");
const router=express.Router();
const Patient=require('../models/patient');
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    else
    res.redirect("/login");
}
router.get("/patient",isLoggedIn,async(req,res,next)=>{
    res.render("patient",{currentUser:req.user})
})
router.post("/patient",async(req,res,next)=>{
    Patient.create(
        {
            lname:req.body.lname,
            fname:req.body.fname,
            state:req.body.patient.state,
            drugallergy:req.body.drugallergy,
            allergy:req.bod.allergy,
            blood:req.body.blood,
            gender:req.body.gender,
            status:req.body.status,
            surgery:req.body.surgery,
            age:req.body.age,
            father:req.body.father,
            family_medical:req.body.family_medical,
            past_illness:req.body.past_illness,    
            occupation:req.body.occupation,
        }
    )
    res.redirect("/")
})
module.exports=router;