const careerModel = require("../model/careerModel");

const CareerDetail = async (req, res) => {
  try {
    const careerdetail = new careerModel(req.body);
      const result = await careerdetail.save( );
      res.send(result);
      console.log(req.body)

  } catch (error) {
    res.send(error.message);
  }
};

const GetCareerDetail=async(req,res)=>{
  const getcareer=await careerModel.find();
  if (getcareer.length > 0) {
    res.send(getcareer);
  } else {
    res.send("No user found");
  }
}

const SearchCareer= async (req, res) => {
  let search = await careerModel.find({
    $or: [
      { name: { $regex: req.params.key } },
      { email: { $regex: req.params.key } },
      { phone: { $regex: req.params.key } },
      { designation: { $regex: req.params.key } },

    ],
  });
  res.send(search);
};

const GetUpdateCareer=async (req, res) => {
  try {
    let findcareer = await careerModel.findOne({ _id: req.params.id });
    if (findcareer) {
      res.send(findcareer);
    } else {
      res.send("no user found");
    }
  } catch (err) {
    res.send(err.message);
  }
};
const UpdateCareer=async (req, res) => {
  let updatecareer = await  careerModel.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(updatecareer);
};

const DeleteCareer=async(req,res)=>{
  try {
      let deletecareer= await careerModel.deleteOne({_id:req.params.id});
      res.send(deletecareer);
  } catch (error) {
      res.send(error.message)
  }
};

module.exports = { CareerDetail,GetCareerDetail,SearchCareer,GetUpdateCareer,UpdateCareer,DeleteCareer};
