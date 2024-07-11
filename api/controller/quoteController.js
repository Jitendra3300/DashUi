const quoteModel = require("../model/quoteModel");

const QuoteUser = async (req, res) => {
  const regex = /^[a-zA-Z ]+$/;
  try {
    let quoteuser = new quoteModel(req.body);
    if (regex.test(quoteuser.name)) {
      let response = await quoteuser.save();
      res.send(response);
    } else {
      res.send("Name cannot contain numbers or special characters.");
    }

  } catch (error) {
    res.send(error.message);
  } 
};
const GetQuotes = async (req, res) => {
  try {
    let getquote = await quoteModel.find();
    if (getquote) {
      res.send(getquote);
    } else {
      res.send("No material found");
    }
  } catch (error) {
    res.send(error.message);
  }
};

const SearchQuotes = async (req, res) => {
  let searchquote = await quoteModel.find({
    $or: [
      { name: { $regex: req.params.key } },
      { email: { $regex: req.params.key } },
      { phone: { $regex: req.params.key } },
      { city: { $regex: req.params.key } },
      { requirement: { $regex: req.params.key } },
    ],
  });
  res.send(searchquote);
};
const GetUpdateQuote = async (req, res) => {
  try {
    let findquotes = await quoteModel.findOne({ _id: req.params.id });
    if (findquotes) {
      res.send(findquotes);
    } else {
      res.send("no result found");
    }
    console.log(findquotes);
  } catch (error) {
    res.send(error.message);
  }
};
const UpdateQuotes = async (req, res) => {
  let updatequote = await quoteModel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(updatequote);
};

const DeleteQuotes = async (req, res) => {
  try {
    let cutquote = await quoteModel.deleteOne({ _id: req.params.id });
    res.send(cutquote);
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = {
  QuoteUser,
  GetQuotes,
  SearchQuotes,
  GetUpdateQuote,
  UpdateQuotes,
  DeleteQuotes,
};
