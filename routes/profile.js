const express=require("express");
const router=express.Router();
const User=require('../models/user');
router.get('/:id/profile',(req,res)=>{
    console.log(req.user);
    res.render('profile',{user:req.user});
});
module.exports=router;