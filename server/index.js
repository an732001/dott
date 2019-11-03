const express = require('express');
const bodyParser=require('body-parser');
const app = express();
const {User}=require("./models/user.js");
const mongoose = require('./config/mongoose.js');

app.use(bodyParser.json());

app.post("/create-user",(req,res)=>{
  const {email,password,lat,lng,status}=req.body;
  User.findOne({email:email}).then(
    user=>{
      if(!user){
        const userNew= new User({email,password,lat,lng,status});
        userNew.save().then(()=>{res.send("Created User")},error=>{
          console.log(error);
          res.send(error);})
      }else{
        res.send("Sorry, this email is already taken.");
      }
    }
  )
})

app.post("/update-location",(req,res)=>{
  const email = req.body.email;
  const lat = req.body.lat;
  const lng = req.body.lng;

  User.findOne({email:email}).then(
    user=>{
      if(user){
        user.lat = lat;
        user.lng = lng;
        user.save().then(()=>{res.send("Updated Location")},error=>{
          console.log(error);
          res.send(error);})
      }else{
        res.send("User does not exist.");
      }
    }
  )
})

app.listen(3000,()=>{
  console.log("Started on port 3000");
})
// http GET POST PUT PATCH DELETE
