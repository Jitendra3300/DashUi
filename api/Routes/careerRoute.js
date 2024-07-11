const express=require("express");
const { CareerDetail, GetCareerDetail, SearchCareer, GetUpdateCareer, UpdateCareer, DeleteCareer} = require("../controller/careerController");


const router=express.Router();

router.post("/fillcareer",CareerDetail);

router.get("/getcareerdetail",GetCareerDetail);

router.get("/search/:key",SearchCareer);

router.get("/getupdatecareer/:id",GetUpdateCareer)

router.put("/updatecareer/:id",UpdateCareer);

router.delete("/destroycareer/:id",DeleteCareer)


module.exports=router;