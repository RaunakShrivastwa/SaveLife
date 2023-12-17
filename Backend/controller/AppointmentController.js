import Appointments from '../model/Appointment.js'

export default class Appointment{
    
    addAppointment = async (req,res)=>{
      try {
        const book = await Appointments.create(req.body);
        return res.json({ created: book })
  } catch (err) {
        return console.log("There is error ", err);
  }
    }

    getAppointmentById = async (req,res)=>{
      try{
          return res.json(await Appointments.find({user:req.params.id}))
      }catch(err){
        return console.log("There is errro");
      }
    }



}