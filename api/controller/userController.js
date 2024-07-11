const userModel = require("../model/userModel")


const RegisterUser=async (req, res) => {
  const regex = /^[a-zA-Z ]+$/;

    try {
      let user = new userModel(req.body);
      if (regex.test(user.name)) {
        let result = await user.save();
        res.send(result);
;
      } else {
        res.send("Name cannot contain numbers or special characters.");
      }
    } catch (error) {
      res.send(error);
    }
  };

const UserDetails= async (req, res) => {
  let data = await  userModel.find();
  if (data.length > 0) {
    res.send(data);
  } else {
    res.send("No user found");
  }
};
const SearchUser= async (req, res) => {
  let result = await userModel.find({
    $or: [
      { name: { $regex: req.params.key } },
      { email: { $regex: req.params.key } },
      { city: { $regex: req.params.key } },
      { businessCategory: { $regex: req.params.key } },
      { phone : { $regex: req.params.key } },
    ],
  });
  res.send(result);
};
const GetUpdate=async (req, res) => {
  try {
    let finduser = await userModel.findOne({ _id: req.params.id });
    if (finduser) {
      res.send(finduser);
    } else {
      res.send("no user found");
    }
  } catch (err) {
    res.send(err.message);
  }
};
const UpdateUser=async (req, res) => {
  let update = await  userModel.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(update);
};
const DeleteUser= async (req, res) => {
  const _id = req.params.id;
  try {
    let remove = await  userModel.deleteOne({ _id });
res.send(remove);
  } catch (error) {
    res.send(error)
  }
};
module.exports={RegisterUser,UserDetails,SearchUser,GetUpdate,UpdateUser,DeleteUser}