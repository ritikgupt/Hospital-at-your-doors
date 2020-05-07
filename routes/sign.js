var express=require("express");
var router=express.Router();
var passport=require("passport");
var E = require('passport-local');
var User = require("../models/user");
passport.use(new E(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 
router.get("/sign",async(req,res,next)=>{
    res.render("sign");
})
router.post("/sign",async(req,res,next)=>{
    User.register(new User({username:req.body.username,email:req.body.email,address:req.body.address,mobile:req.body.mobile,fd:req.body.fd}),req.body.password,function(err,user){
        if(err)
        {
            console.log(err);
            return res.send('error')
        }
        else{
            passport.authenticate("local")(req,res,function(){
                if(req.body.fd==="patient")
                res.redirect("/patient")
                else
                res.redirect("/doctor")
            })
        }
    })
})
module.exports=router;