
const express = require('express');
const app = express();
const port = 3001;
const mongoose =require("mongoose");
const dotenv= require("dotenv");
const userRoute = require("./routes/user")
dotenv.config();
mongoose.connect(
  process.env.mongo_url
  )
  .then(()=>console.log("DBconnection successfull!"))
  .catch((err)=>
{
  console.log(err);
});
app.use(express.json())
app.use("/api/users" , userRoute);


app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


