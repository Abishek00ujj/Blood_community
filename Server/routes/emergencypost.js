const router=require("express").Router();
const PatientData=require("../models/emergencypost");
const nodemailer = require("nodemailer");
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
router.post("/reqepost",async(req,res)=>{
    const { blood, unit, name, hospital, location, phone}=req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "abishek3834@gmail.com", 
          pass: "uamksflhwdcgnfbx", 
        },
      });
      const mailOptions = {
        from: "your-email@gmail.com",
        to: "abishek3834@gmail.com",
        subject: `Attention!!🩸 ${name} is Requesting! a Blood community post!`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: red; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="text-align: center; color: #6c24a4;">Requesting a blood!🩸 Attention chief</h2>
            <p>Hello, Admin , ${name} is requesting a blood post request!</p>  <p>Blood Group: ${blood}</p>
            <p>unit: ${unit}</p>
            <div style="text-align: center; margin: 20px 0; font-size: 24px; font-weight: bold; color: #4CAF50;"> <p style="font-size: 12px; color: #666;">Admin kindly call them and consider helping! : ${phone}</p></div>
            <hr style="border: 0; height: 1px; background: #ddd;">
            <p style="text-align: center; font-size: 12px; color: #666;">&copy; 2024 Blood-community. All rights reserved.</p>
          </div>
        `,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({ message: "Failed to send OTP email." });
        }
        console.log("OTP sent successfully:", info.response);
        res.status(200).json({ message: "OTP sent successfully!", otp });
      });
    try{
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