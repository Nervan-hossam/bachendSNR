const mongoose = require("mongoose");
const {boolean } = require ("webidl-conversion");
const ProductsSchema = new mongoose.Schema(
  {
  title : {type : String , required:true ,  unique :true},
    desc : { type : String , required:true }, 
    img : { type : String , required:true }, 
  categories : { type : Array  }, 
    size : { type : String , required:true }, 
    color : { type : String , required:true }, 
    price : { type : Number , required:true }, 


  }, {timetamps : true}
);
module.exports = mongoose.model("products",ProductsSchema);