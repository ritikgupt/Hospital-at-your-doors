const express=require("express");
const router=express.Router();
router.get('/physical',(req,res)=>{
    res.render('physical',{user:req.user});
});
module.exports=router;