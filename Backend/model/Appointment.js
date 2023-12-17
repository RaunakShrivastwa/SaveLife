import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    deases:{
        type:String,
        required:true
    },
    phone:{
        type:String
    },
    user:{
        type:String
    },
    date:{
        type:String,
        required:true
    }
});

const Appointment = mongoose.model("Appointment",appointmentSchema);

export default Appointment;