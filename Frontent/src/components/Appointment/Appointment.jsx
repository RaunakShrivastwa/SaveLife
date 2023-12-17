import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Appointment({ log }) {

  const [name, setName] = useState();
  const [address, setAdress] = useState();
  const [phone, setPhone] = useState();
  const [deases, setDeases] = useState();
  const [date, setData] = useState();
  const [booked, setBooked] = useState();


  useEffect(() => {
    const load = async () => {
      const all = await axios.get(`http://localhost:8000/appointment/get/${log?._id}`);
      setBooked(all.data)
    }
    load();
  }, [booked])
  console.log("All Booked ", booked);
  const submitForm = async (e) => {
    e.preventDefault();
    const body = {
      name: log?.name,
      address: address,
      phone: phone,
      deases: deases,
      date: date,
      user: log._id

    };
    const booked = await axios.post(`http://localhost:8000/appointment/add`, body);
    alert(`${log.name} your Appointment have been Bookend Successfully`)
    setName('')
    setPhone('');
    setDeases('');
    setData('');
    setAdress("")
  }
  return (
    <div id='appointment p-3' className='nav' style={{ height: '100vh', width: '100%' }}>
      <div class="section__container header__container">
        <div class="header__content">
          <h1 className='text-black'>Providing an Exceptional Patient Experience</h1>
          <p className='text-black'>
            Welcome, where exceptional patient experiences are our priority.
            With compassionate care, state-of-the-art facilities, and a
            patient-centered approach, we're dedicated to your well-being. Trust
            us with your health and experience the difference.
          </p>
          <button className='btn '>Your Appointment</button>
          <div id="carouselExample" className="carousel slide py-5 mt-2">
            <div className="carousel-inner">
              <div className="carousel-item active text-center rounded" style={{ background: '#12ac8e' }}>
                 <h4>Slide and View</h4>
              </div>
              {booked?.map((item, index) => (
                <div key={index} className="carousel-item text-center rounded" style={{ background: '#12ac8e' }}>
                  <h4>{item?.name}</h4>
                  <small>Disease: {item?.deases}</small>
                  <span>At {item?.address}</span> <span>{item?.date}</span>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden text-danger">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden text-success">Next</span>
            </button>
          </div>


        </div>
        <div class="header__form">
          <form onSubmit={(e) => { submitForm(e) }}>
            <input type="text" value={log?.name} placeholder="First Name" />
            <input type="text" value={address} onChange={(e) => setAdress(e.target.value)} placeholder="Address" />
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone No." />
            <input type="text" value={deases} onChange={(e) => setDeases(e.target.value)} placeholder="deases" />
            <input type="date" value={date} onChange={(e) => setData(e.target.value)} placeholder="deases" />
            <button class="btn form__btn">Book Appointment</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Appointment