const userModel = require("./models/user");
const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");

mongoose
.connect(
   "mongodb://localhost:27017/dcs"
)
.then(() => console.log("mongo db connected"));


app.get("/api/",(req,res) => res.send("Hello Fullstack!!"));
//get list of all users
// app.get("/api/list",async(req,res) =>{
//    const userList = await userModel.find({},{username:true});
//    if(userList.length === 0){
//        return res.json({data : "no users in fullstack"});
//    }
//    return res.json({data :userList});
// });


//Register user
app.post("/api/registration",(req,res) => {
    const newUser  = req.body;
    userModel.create(newUser);
    return res.json({data : "registered successfully"});
});

app.post("/api/userdata",async(req, res) => {
    const user = await userModel.findOne({username:req.body.username});

    if(user){
        return res.json({data:user});
    }
    return res.json ({data:`${req.body.username} Not Found`});
});


//Login User
app.post("/api/logindata",async(req,res)=>{
   const uname = req.body.username;
   const pass = req.body.password;
   const user = await userModel.findOne({username : uname,password:pass});

   if(user){
       return res.json({data:"Login sucessfull"});
   }
   return res.json({data:"wrong detalis"});
});


//delete user
app.delete("/user/deleteuser/:uname",async(req,res) =>{
   const deleteuser= await userModel.findOneAndDelete({
       username:req.params.uname
   });
    return res.json({ data : "user deleted successfully"});
});

app.listen(port, () => {
    console.log('Server running on port 5000');
});

