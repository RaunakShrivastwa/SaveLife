import React from 'react'

function Footer() {
    return (
        <div className='' id='footer'>
            <footer class="footer foot">
                <div class="section__container footer__container">
                    <div class="footer__col">
                        <h3 className='text-black'>Save<span className='text-danger'>Life</span></h3>
                        <p>
                            We are honored to be a part of your healthcare journey and committed
                            to delivering compassionate, personalized, and top-notch care every
                            step of the way.
                        </p>
                        <p>
                            Trust us with your health, and let us work together to achieve the
                            best possible outcomes for you and your loved ones.
                        </p>
                    </div>
                    <div class="footer__col">
                        <h4>About Us</h4>
                        <p>Delhi</p>
                        <p>Help and Medical Support</p>
                        <p>Support Us</p>
                        <p>Save<span className='text-danger'>Life</span> </p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div class="footer__col">
                        <h4>Services</h4>
                        <p>Book Appointment</p>
                        <p>Talk To Exports</p>
                        <p>Free Medicine</p>
                        <p>Emergency 24x7</p>
                        <p className='text-success'>BE ACTIVE</p>
                    </div>
                    <div class="footer__col">
                        <h4>Contact Us</h4>
                        <p>
                            <i class="ri-map-pin-2-fill"></i> Noida 69, Delhi , India
                        </p>
                        <p><i class="ri-mail-fill"></i>Connect2Shubham@outlook.com</p>
                        <p><i class="ri-phone-fill"></i>+91 9508840645</p>
                    </div>
                </div>
                <div class="footer__bar">
                    <div class="footer__bar__content">
                        <p>If we stay active, we will stay healthy</p>
                        <div class="footer__socials">
                            <span><i class="ri-instagram-line"></i></span>
                            <span><i class="ri-facebook-fill"></i></span>
                            <span><i class="ri-heart-fill"></i></span>
                            <span><i class="ri-twitter-fill"></i></span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer