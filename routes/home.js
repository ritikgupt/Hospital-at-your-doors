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
router.get('/',isLoggedIn,(req,res)=>{
    if(req.user.fd=='patient'){
        res.render('patienthome',{user:req.user});
    }
    else{
        res.render('doctorhome',{user:req.user});
    }
})
router.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");
})
module.exports=router;