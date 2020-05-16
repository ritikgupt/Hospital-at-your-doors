var express=require("express");
var router=express.Router();
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var cloudinary = require('cloudinary');
var Appointment=require('../models/appointment');
cloudinary.config({
  cloud_name: 'dzsms0nne',
  api_key: '542159551497727',
  api_secret: 'yRkiZK6Gf4eNNhXqvrNI9WHFKM0',
});
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    else
    res.redirect("/login");
}
var Appointment=require('../models/appointment')
router.get("/appointment",isLoggedIn,async(req,res,next)=>{
    res.render("appointment",{user:req.user});
})
router.post("/appointment",upload.single('report'),async(req,res,next)=>{
    console.log(req.file);
    cloudinary.v2.uploader.upload(req.file.path, (err, result)=>{
        if (err){
          throw err;
        }
        else{
        console.log(result)
Appointment.create({
    time:req.body.time,
    reason:req.body.reason,
    symptoms:req.body.symptoms,
    severity:req.body.severity,
    precaution:req.body.precaution,
    report:result.secure_url,
    v_doc:req.body.v_doc,
    patient_id:req.body.patient_id
})
res.redirect('/');}
    })
})
module.exports=router;