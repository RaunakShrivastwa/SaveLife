import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    feedback:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
});

const Blog = mongoose.model("Blog",blogSchema);

export default Blog;