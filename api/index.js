const express = require("express");
const cors = require("cors");
const database = require("./db/config");
const CareerRoute=require("./Routes/careerRoute")
const ContactRoute=require("./Routes/contactRoute")
const UserRoute = require("./Routes/userRoute");
const QuoteRoute = require("./Routes/quoteRoute");
const app = express();
const morgan =  require("morgan")

database();
app.use(morgan("dev"))
app.use(cors());

app.use(express.json());

app.use("/api/auth", UserRoute);

app.use("/api/admin", QuoteRoute);

app.use("/api/contact",ContactRoute);

app.use("/api/career",CareerRoute);


app.listen(7001,"127.0.0.1",()=>{
    console.log("App is Listenting on http://127.0.0.1:7001")
})