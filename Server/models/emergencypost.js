const mongoose=require("mongoose");

const PatientSchema=new mongoose.Schema({
     blood:{
        type: String,
        required:true
     },
     unit:{
        type:String,
        required:true
     },
     name:{
        type:String,
        required:true
     },
     hospital:{
        type:String,
        required:true
     },
     location:{
        type:String,
        required:true
     },
     phone:{
        type:String,
        required:true
     }
})


module.exports=mongoose.model("Patient",PatientSchema);