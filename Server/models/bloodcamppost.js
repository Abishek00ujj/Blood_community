const mongoose=require("mongoose");


const Camppost=mongoose.Schema({
    location:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model("Camp",Camppost);