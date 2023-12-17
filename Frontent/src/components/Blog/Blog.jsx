import React, { useEffect, useState } from 'react'
import BlogPost from './BlogPost'
import axios from 'axios';


function Blog({log}) {
  const [address, setAdress] = useState();
  const [age, setAge] = useState();
  const [feedback, setFeedBack] = useState();
  const [blog,setBlog]= useState();

  useEffect(() => {
    const load = async () => {
      const all = await axios.get(`http://localhost:8000/blog/get`);
      setBlog(all.data)
    }
    load();
  }, [blog])
 
 
  const handle = async (e)=>{
    e.preventDefault();
    const body = {
      name: log?.name,
      address: address,
      age: age,
      feedback: feedback,
      image: log?.image

    };
    const booked = await axios.post(`http://localhost:8000/blog/add`, body);
    alert(`${log.name} your Appointment have been Bookend Successfully`)
    setAdress('');
    setAge('');
    setFeedBack('');
    setBlog('')
  }
  return (
    <div id='blog' class="row p-5" style={{height:'auto'}}>
      <div className='text-center'>
        <h2>Our Happy Patients Feedback</h2>
      </div>
    <div class="col-sm-6 mb-3 mb-sm-0 col-md-8 col-sm-12">
      <div class="card border-0">
        <div class="card-body">
          <BlogPost blog={blog}/>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-4 col-sm-12">
      <div class="card border-0">
        <div class="card-body d-flex justify-content-around align-items-center">
          
          <div class="header__form">
                <form onSubmit={(e)=>{handle(e)}}>
                    <h4>Add Your Feedback</h4>
                    <input type="text" value={log?.name} placeholder="Name" />
                    <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age" />
                    <input type="text" value={address} onChange={(e)=>setAdress(e.target.value)} placeholder="Address" />
                    <input type="text" value={feedback} onChange={(e)=>setFeedBack(e.target.value)} placeholder="Feedback" />
                    <button class="btn form__btn">Post</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Blog