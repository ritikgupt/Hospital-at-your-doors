const express=require("express");
const path=require("path");
const PORT = process.env.PORT || 5000;
const parser=require("body-parser");
const mongoose=require("mongoose");
const method=require("method-override");
const g=require("express-sanitizer");
const passport=require("passport");
const E=require("passport-local"); 
const app=express(); 
express().set('views', path.join(__dirname, 'views'))
app.use(parser.urlencoded({ extended: false }));
const User=require("./models/user");
mongoose.connect("mongodb://localhost:27017/hosp", { useNewUrlParser: true,useFindAndModify : false,useUnifiedTopology: true });
app.set("view engine","ejs");
app.use(express.static("public"));
app.use('/uploads',express.static("uploads"));
mongoose.set('useCreateIndex', true);
app.use(g());
app.use(method("_method"));
app.use(require("express-session")
({
  secret:"Let your work make the noise not your mouth.",
  resave:false,
  saveUninitialized:false  
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use( new E(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
const signRoutes=require('./routes/sign');
app.use(signRoutes);
const doctorRoutes=require('./routes/doctor');
app.use(doctorRoutes);
const patientRoutes=require('./routes/patient');
app.use(patientRoutes);
const loginRoutes=require('./routes/login');
app.use(loginRoutes);
const appointmentRoutes=require('./routes/appointment');
app.use(appointmentRoutes);
// app.use('/sign',require('./routes/sign'))
app.listen(PORT,function(){
    console.log("Server has started.");
});