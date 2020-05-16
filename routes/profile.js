const express=require("express");
const router=express.Router();
const User=require('../models/user');
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    else
    res.redirect("/login");
}
router.get('/:id/profile',(req,res)=>{
    console.log(req.user);
    res.render('profile',{user:req.user});
});
router.get('/:id/editprofile',isLoggedIn,(req,res)=>{
    res.render('editprofile',{user:req.user});
})
router.post('/:id/editprofile',(req,res)=>{
    console.log(req.params.id);
    User.findByIdAndUpdate(req.params.id,req.body.user,(err,foundUser)=>{
        console.log('reached');
        if(err)
        throw err
        else
        {
            res.redirect(foundUser)
        res.redirect('/');
        }
    })
});
module.exports=router;