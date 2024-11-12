const router=require("express").Router();
const PatientData=require("../models/emergencypost");

router.post("/addepost",async(req,res)=>{
    try{
          const { blood, unit, name, hospital, location, phone}=req.body;
          const x=new PatientData({blood, unit, name, hospital, location, phone});
          const savedData=await x.save();
          res.status(201).json({message:"Data saved successfully",data:savedData});
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({ message: "Server error!" });
    }
})

router.get("/getepost",async(req,res)=>{
    try{
        const Data=await PatientData.find();
        res.status(200).json({message:"Successfully data received",data:Data});
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({ message: "Server error!" });
    }
})

module.exports=router;