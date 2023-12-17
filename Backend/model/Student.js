import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    disease:{
        type: String
    },
    image:{
        type:String
    }
});

const Student = mongoose.model("Student",studentSchema);

export default Student;