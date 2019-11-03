const express = require('express');
const bodyParser=require('body-parser');
const app = express();
const {User}=require("./models/user.js");
const mongoose = require('./config/mongoose.js');

app.use(bodyParser.json());

app.post("/create-user",(req,res)=>{
  const {email,password}=req.body;
  User.findOne({email:email}).then(
    user=>{
      if(!user){
        const userNew= new User({email,password});
        userNew.save().then(()=>{res.send("Created User")},error=>{
          console.log(error);
          res.send(error);})
      }else{
        res.send("Sorry, this email is already taken.");
      }
    }
  )
})

app.listen(3000,()=>{
  console.log("Started on port 3000");
})
// http GET POST PUT PATCH DELETE
