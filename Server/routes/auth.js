const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const hashPassword = bcrypt.hashSync(password, 8);
        const user = new User({ email, username, password: hashPassword });

        await user.save();
        res.status(201).json({ message: "User registered successfully", user });
    } catch (err) {
        console.error("Registration error:", err.message);
        res.status(500).json({ message: "Server error!" });
    }
});

router.post("/login",async(req,res)=>{
    try{
    const {email,password}=req.body;
    const existingUser=await User.findOne({email});
    if(!existingUser)
    {
        return res.status(400).json({message:"Please register first!"});
    }
    const isMatch = bcrypt.compareSync(password, existingUser.password);
    if(!isMatch)
    {
        return res.status(400).json({message:"Invalid password"});
    }
    return res.status(200).json({message:"Logged in successfull"});
}
     catch(err)
    {
       return res.status(404).json({message:"Error"});
    }
})

module.exports = router;
