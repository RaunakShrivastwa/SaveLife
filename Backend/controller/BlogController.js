import Blogs from '../model/Blog.js';

export default class Blog{
    
    addBlog = async (req,res)=>{
       try{
            const blog= await Blogs.create(req.body);
            return res.json(blog)
       }catch(err){
        return console.log("There is error ",err);
       }
    }

    getAllBlog = async (req,res)=>{
        try{
              const blogs = await Blogs.find({});
              return res.json(blogs)
        }catch(err){
            return console.log("There is errror",err);
        }
    }
}