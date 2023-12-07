const mongoose=require("mongoose")
const userSchema = new mongoose.Schema({
    username:{ typr:String, required:true , unique:true},
    email:{typr:String, required:true , unique:true},
    password:{typr:String, required:true },
    isAdmin :{
        type:boolean , default:false,
    },
    
});
modi