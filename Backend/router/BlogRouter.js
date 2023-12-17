import express from 'express';
import BlogController  from '../controller/BlogController.js';

const router = express.Router();
 const blog= new BlogController();
 router.post('/add',blog.addBlog);
 router.get('/get',blog.getAllBlog)

export default router;