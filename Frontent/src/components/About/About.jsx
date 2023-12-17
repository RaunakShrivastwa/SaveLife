import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = e?.target?.getAttribute('href')?.substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        const targetOffset = targetSection.offsetTop;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    }
};
  return (
    <div id='about' className='p-md-5' style={{ height: '100vh', width: '100%' }}>
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0 col-md-8 col-sm-12">
          <div class="card">
            <div class="card-body">
              <h2 class="section__header">About Us</h2>
              <p>
                Welcome to our healthcare website, your one-stop destination for
                reliable and comprehensive health care information. We are committed
                to promoting wellness and providing valuable resources to empower you
                on your health journey.
              </p>
              <p>
                Explore our extensive collection of expertly written articles and
                guides covering a wide range of health topics. From understanding
                common medical conditions to tips for maintaining a healthy lifestyle,
                our content is designed to educate, inspire, and support you in making
                informed choices for your health.
              </p>
              <p>
                Discover practical health tips and lifestyle advice to optimize your
                physical and mental well-being. We believe that small changes can lead
                to significant improvements in your quality of life, and we're here to
                guide you on your path to a healthier and happier you.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-sm-12">
          <div class="card">
            <div class="card-body">
              <img width='100%' src="https://th.bing.com/th/id/OIP.hiMWvVuKRN2v2UnDFtSuxAHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            </div>
          </div>
        </div>
      </div>
     <h2 className='text-success py-4 mt-4'>Our goal is to promote health among people. This is our endeavor towards that objective. Keep working towards it, stay healthy, follow us, and also encourage others to do the same.</h2>
     <div className='text-center'>
     <Link className='btn btn-success' to="footer" onClick={scrollToSection}>Contact</Link>
     </div>
    </div>
  )
}

export default About