const contactModel = require("../model/contactModel");

const ContactEntry=async (req, res) => {
  const regex = /^[a-zA-Z ]+$/;

    try {
      let contact = new contactModel(req.body);
      if(regex.test(contact.name)){
        let result = await contact.save();
        res.send(result);

      }else {
        res.send("Name cannot contain numbers or special characters.");
      }
    } catch (error) {
      res.send(error);
    }
  };

  const ContactDetails= async (req, res) => {
    let list = await  contactModel.find();
    if (list.length > 0) {
      res.send(list);
    } else {
      res.send("No user found");
    }
  };

  const SearchContact= async (req, res) => {
    let result = await contactModel.find({
      $or: [
        { name: { $regex: req.params.key } },
        { email: { $regex: req.params.key } },
        { phone: { $regex: req.params.key } },
        { city: { $regex: req.params.key } },
  
      ],
    });
    res.send(result);
  };
  const GetUpdateContact=async (req, res) => {
    try {
      let findcontact = await contactModel.findOne({ _id: req.params.id });
      if (findcontact) {
        res.send(findcontact);
      } else {
        res.send("no user found");
      }
    } catch (err) {
      res.send(err.message);
    }
  };
  const UpdateContact=async (req, res) => {
    let updatecontact = await  contactModel.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    res.send(updatecontact);
  };
  const DeleteContact= async (req, res) => {
    const _id = req.params.id;
    try {
      let removecontact = await  contactModel.deleteOne({ _id });
  res.send(removecontact);
    } catch (error) {
      res.send(error)
    }
  };

  
  module.exports={ContactEntry,ContactDetails,SearchContact,GetUpdateContact,UpdateContact,DeleteContact}