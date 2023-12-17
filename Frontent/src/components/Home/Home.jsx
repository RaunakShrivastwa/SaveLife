import React, { useEffect, useState } from 'react'
import FitnessVideo from './FitnessVideo'
import MorningTime from './MorningTime'
import Breakfast from './Breakfast'
import AfterBreakfast from './AfterBreakfast'
import LunchTime from './LunchTime'
import Evening from './Evening'
import Dinner from './Dinner'
import Footer from '../Footer/Footer'
import Service from '../Service/Service';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import About from '../About/About'
import NavBar from '../NavigationBar/NavBar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const {user} = useParams();
    const [log,setLog]= useState();
     console.log(user);
     const userDataString = localStorage.getItem('Log');
     
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/user/getSingle/${user}`);
                console.log("response =",response.data);
                setLog(response.data.Found);
                if(!userDataString){
                    localStorage.setItem('Log', JSON.stringify(response.data.Found));
                 }
            } catch (error) {
                console.error("Error fetching course data:", error);
                // Handle error state or display an error message
            }
        };

        fetchData();
    }, [user]);

  return (
    <>
     
      <header id='home'>
        <div class="row mt-5 p-md-5" >
          <div class="col-sm-12 mb-1 col-md-8 col-sm-12 mb-sm-0">
            <div class="card border-0">
              <div class="card-body c-body">
                <h1 class="card-title"><strong>If we stay active, we will stay healthy</strong></h1>
                <p class="card-text">Living a healthy lifestyle involves a combination of mindful choices and habits. Taking care of your body and mind is
                  crucial for overall well-being. This includes staying physically active, nourishing yourself with a balanced diet, and ensuring
                  adequate hydration. Quality sleep is essential for recovery and maintaining optimal cognitive function. Managing stress through
                  various techniques contributes to mental resilience. Regular health check-ups help detect and address potential issues early on.
                  Striking a balance with screen time supports both physical and visual health. Cultivating positive social connections enriches
                  your life and enhances emotional wellness. Embracing these practices can lead to a more vibrant and fulfilling life.
                  Additionally, incorporating mindful activities such as meditation or yoga can further enhance mental clarity and
                  focus. Setting realistic goals for fitness and nutrition helps create sustainable habits. Finding joy in outdoor
                  activities adds a refreshing dimension to your overall well-being. Prioritizing self-care and taking breaks when
                  needed promotes a healthy work-life balance. Remember, small, consistent changes over time can have a significant
                  impact on your long-term health.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-sm-12">
            <div class="card border-0">
              <div class="card-body c-body" >
                <FitnessVideo />
              </div>
            </div>
          </div>
          <div class="row row-cols-2 row-cols-md-5 g-4">
            <div class="col">
              <div class="card">
                <img src="https://healingjourneyessentials.com/wp-content/uploads/2022/01/self-care-healthy-lifestyle-300x200.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Self-Care</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://healingjourneyessentials.com/wp-content/uploads/2022/01/7383fb51a3ad0ffbf67a8b4d1e9d9746_cropped_optimized-300x200.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Low Stress Levels</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://th.bing.com/th/id/OIP.6d0oKsLp2lcUx_wtbVbz0wHaE5?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Healthy Diet</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://healingjourneyessentials.com/wp-content/uploads/2022/01/70612539f244a80a307cc37767e2703d1643046143_cropped_optimized.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Exercise</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://healingjourneyessentials.com/wp-content/uploads/2022/01/865158c726bb8a4946d10e06ed70ec091643128542_cropped_optimized.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Positive Mindset</h5>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* for the morning routine */}
        <MorningTime />

        {/* for the Breakfast */}
        <Breakfast />

        {/* if breakfast complete */}
        <AfterBreakfast />

        {/* for the Lunch */}
        <LunchTime />

        {/* for the Evening */}
        <Evening />

        {/* for the dinner */}
        <Dinner />
        <div id='appointment'>
          <Appointment log={log}/>
        </div>
        <Service />
        <About />
        <Blog  log={log}/>
      </header>
      {/* for the footer */}
      <div id='footer'> <Footer /></div>
    </>
  )
}

export default Home