import React from 'react'

function Service() {
  return (
    <div id='service' className='' style={{ height: '100vh', width: '100%' }}>
      <section class="section__container service__container">
        <div class="service__header">
          <div class="service__header__content">
            <h2 class="section__header">Our Special service</h2>
            <p>
              Beyond simply providing medical care, our commitment lies in
              delivering unparalleled service tailored to your unique needs.
            </p>
          </div>
          <button class="service__btn">Ask A Service</button>
        </div>
        <div class="service__grid">
          <div class="service__card">
            <span><i class="ri-microscope-line"></i></span>
            <h4>Laboratory Test</h4>
            <p>
              Accurate Diagnostics, Swift Results: Experience top-notch Laboratory
              Testing at our facility.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div class="service__card ">
            <span><i class="ri-mental-health-line"></i></span>
            <h4>Health Check</h4>
            <p>
              Our thorough assessments and expert evaluations help you stay
              proactive about your health.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div class="service__card">
            <span><i class="ri-hospital-line"></i></span>
            <h4>General Dentistry</h4>
            <p>
              Experience comprehensive oral care with Dentistry. Trust us to keep
              your smile healthy and bright.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service