const mongoose = require("mongoose");
const {boolean } = require ("webidl-conversion");
const CartsSchema = new mongoose.Schema(
  {
   userId: {type : String , required:true},
    products :   [
      {
        productId:{
          type : String  ,
        },
        quantity : {
          type : Number , 
          default :1, 
        },
        },

    ],
  

  }, {timetamps : true}
);
module.exports = mongoose.model("cart",CartsSchema);