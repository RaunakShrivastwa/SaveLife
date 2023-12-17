import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faRunning, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


function AfterBreakfast() {
  return (
    <div className='p-md-5'>
      <h3 className=' text-success'><strong>If we have had breakfast, what should we do after that?</strong></h3>
      <section class="section__container service__container">
        <div class="service__grid">
          <div class="service__card">
            <span> <FontAwesomeIcon icon={faRunning} /></span>
            <h4>Physical Activity</h4>
            <p>
              Move, stretch, breathe, and walk,
              Exercise your body, talk the talk.
              Dance, jog, or do yoga's sway,
              Keep active, make each movement play
            </p>
            <a href="#">Learn More</a>
          </div>

          <div class="service__card ">
            <span><i class="ri-mental-health-line"></i></span>
            <h4>Hobbies or Interests</h4>
            <p>
              Hobbies and interests span a vast array,
              From painting skies in hues of day,
              To gardening plots where flowers bloom,
              Or reading tales that banish gloom.
            </p>
            <a href="#">Learn More</a>
          </div>

          <div class="service__card">
            <span><FontAwesomeIcon icon={faGraduationCap} /></span>
            <h4>Learning</h4>
            <p>
              Learning in older age, a boundless treasure,
              Mind's exploration knows no measure.
              New languages, arts, or history's lore,
              Keeps the mind vibrant, eager for more.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>

      <p>As we age, our bodies may have different nutritional needs and digestive patterns. For some individuals above 65, eating 
        smaller, more frequent meals might be beneficial, especially if they have challenges with appetite or digestion. It can help
        maintain energy levels and ensure adequate nutrient intake.
        For older adults, it's crucial to focus on nutrient-dense foods, including fruits, vegetables, lean proteins, whole grains,
         and healthy fats. These foods can provide essential vitamins, minerals, and fiber that support overall health.
        Some older adults might find that they need to space their meals out differently due to changes in appetite or digestion. 
        Listening to your body's hunger and fullness cues is essential. If you're unsure about your dietary needs as an older adult, 
        consulting with a registered dietitian or a healthcare professional can provide personalized guidance based on your health 
        status and individual requirements.
      </p>
    </div>
  )
}

export default AfterBreakfast