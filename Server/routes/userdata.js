
const router = require("express").Router();
const userdata = require("../models/userdata");
const UserData=require("../models/userdata");

router.post("/adddetails",async(req,res)=>{
    try
    {
         const {_userid,name,blood,dob,year,number,city,state,img}=req.body;
         const userdata = new UserData({ _userid, name, blood, dob, year, number, city, state, img });
        const savedData = await userdata.save();
        res.status(201).json({ message: "Details added successfully!", data: savedData });
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({ message: "Server error!" });
    }
}); 


router.get("/getdetails",async(req,res)=>{
   try
   {
       const getDetails=await UserData.find();
       res.status(200).json({message:"All user details fetched successfully",data:getDetails});
   }
   catch(err)
   {
     console.error(err);
     res.status(500).json({ message: "Server error!" });
   }
});


module.exports = router;