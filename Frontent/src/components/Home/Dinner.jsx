import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faRunning, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Dinner() {
    return (
        <div className='p-md-5'>
            <div className='text-center'>
                <h2>Dinner when, how much, and what should be done?</h2>
               
            </div>
            <p>Sure, for dinner, aim to eat a few hours before going to bed to allow for proper digestion. Opt for a balanced 
                    meal consisting of proteins like chicken, fish, or tofu, accompanied by vegetables, carbohydrates such as whole 
                    grains or sweet potatoes, and healthy fats like avocado or nuts. Avoid heavy or spicy foods that might interfere 
                    with sleep. After dinner, engaging in light activities such as taking a leisurely walk or relaxing can aid 
                    digestion and contribute to a restful night's sleep.</p>
            <section class="section__container service__container">
                <div class="service__grid">
                    <div class="service__card">
                        <span> <img className='im' src="https://th.bing.com/th/id/OIP.PrLQXqPUJVHLD7AqpAUqhAHaE7?w=231&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></span>
                        <h4>Physical Activity</h4>                    
                    </div>

                    <div class="service__card ">
                        <span><img className='im' src="https://th.bing.com/th/id/OIP.sqxTrJC842l4KNHFTDJ6eQHaFj?w=281&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></span>
                        <h4>Turkey chili with beans and a side salad.</h4>                                             
                    </div>

                    <div class="service__card">
                        <span><img className='im' src="https://th.bing.com/th/id/OIP.NR3r2Vx0FtDynPay5nIzHAHaE7?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></span>
                        <h4>Whole wheat pasta with marinara sauce and a side of roasted vegetables.</h4>                                      
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dinner