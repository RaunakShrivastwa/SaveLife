import express from 'express';
import Appointment from '../controller/AppointmentController.js';

const router = express.Router();
const AppointmentClass = new Appointment();

router.post('/add',AppointmentClass.addAppointment);
router.get('/get/:id',AppointmentClass.getAppointmentById)

export default router;