const express=require("express");
const { ContactEntry, ContactDetails, SearchContact, UpdateContact, GetUpdateContact, DeleteContact } = require("../controller/contactController");
 const router=express.Router();

 router.post("/fillcontact",ContactEntry);

 router.get("/getcontact",ContactDetails);

 router.get("/search/:key",SearchContact);

 router.get("/getupdatecontact/:id",GetUpdateContact)

 router.put("/updatecontact/:id",UpdateContact);

 router.delete("/deletecontact/:id",DeleteContact);

 module.exports=router;