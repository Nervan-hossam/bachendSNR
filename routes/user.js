const verifyToken = require("./verifyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenAndAuthorization,async (req,res)=>{
   if(req.body.password){
        req.body.password= cryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString()
   }

   try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id , {
        $set: req.body
    },
    {new:true}
    );
    res.status(200).json(updatedUser);
   } catch(err){
     res.status(500).json(err);
   }
});      

//DELETE
router.delete("/:id" , verifyTokenAndAuthorization, async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json(" User has brrn deleted...")
    }catch(err){
        res.status(500).json(err)
    }
})

//Get User
router.get("/find/:id" , verifyTokenAndAdmin, async (req,res)=>{
    try{
        const user= await User.findById(req.params.id)
        const { password, ...others }= user._doc ;
        res.status(200).json(others);
      
    }catch(err){
        res.status(500).json(err)
    }
});

//Get All User
router.get("/" , verifyTokenAndAdmin, async (req,res)=>{
    const query = req.query.new 
    try{
                                    // return first 5 user ,, want all user remove .limit(5)  or in postman no write localhost: ...../users?new=true >> remove ?new= true will return all users 
        const users= query?  await User.find().limit(5).sort({_id: -1 }) : await User.find();
        res.status(200).json(users);
      
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports=router;
