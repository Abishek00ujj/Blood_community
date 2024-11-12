const router=require("express").Router();

const campData=require("../models/bloodcamppost");

router.post("/addcpost",async(req,res)=>{
    try{
         const {location,address,contact}=req.body;
         const x=new campData({location,address,contact});
         const response=x.save();
         res.status(201).json({message:"Data send succesfully",data:response});
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({ message: "Server error!" });
    }
});

router.get("/getcpost",async(req,res)=>{
    try{
        const Data=await campData.find();
        res.status(200).json({message:"Successfully data received",data:Data});
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({ message: "Server error!" });
    }
})

module.exports=router;