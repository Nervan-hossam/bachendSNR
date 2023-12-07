const mongoose = require("mongoose");
const {boolean } = require ("webidl-conversion");
const OrdersSchema = new mongoose.Schema(
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
  amount : {type :Number , required : true},
  address : {type  : Object , required:true },
 status: {type :String , default : "pending"},


  }, {timetamps : true}
);
module.exports = mongoose.model("order",OrdersSchema);