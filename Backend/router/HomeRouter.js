import express from 'express';
import StudentRouter from './StudentRouter.js';
import passport from 'passport';
import AppointmentRouter from '../router/AppointmentRouter.js'
import BlogRouter from '../router/BlogRouter.js'
const router = express.Router();

router.use('/user',StudentRouter);
router.post('/signUp',(req,res)=>{
    return res.json({Error:'error'})
});

router.use('/appointment',AppointmentRouter)
router.use('/blog',BlogRouter)



export default router;