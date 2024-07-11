const express=require('express');
const {RegisterUser,UserDetails,SearchUser,GetUpdate,UpdateUser,DeleteUser}=require('../controller/userController')

const router=express.Router();

router.post("/user",RegisterUser);

router.get("/userlist",UserDetails);

router.get("/search/:key",SearchUser);

router.get("/getuserdetail/:id",GetUpdate);

router.put("/updatedetail/:id",UpdateUser);

router.delete("/cutinfo/:id",DeleteUser);


module.exports=router;