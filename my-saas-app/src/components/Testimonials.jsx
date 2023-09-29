import React from 'react'
import '../css/Testimonials.css'
import user1 from '../images/user1.jpg'
import user2 from '../images/user2.jpg'
import user3 from '../images/user3.jpg'


export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonial-section">
            <div className="container">
                <h2 className="text-center mb-5">What Our Customers Say</h2>
                <div className="row">
                    {/* <!-- Testimonial 1 --> */}
                    <div className="col-lg-4 mb-4">
                        <div className="testimonial-card">
                            <img src={user1} alt="user 1 img"/>
                            <p>"I love your product! It has made my work so much easier and efficient."</p>
                            <h5>John Doe</h5>
                            <p className="subtitle">CEO, Company XYZ</p>
                        </div>
                    </div>

                    {/* <!-- Testimonial 2 --> */}
                    <div className="col-lg-4 mb-4">
                        <div className="testimonial-card">
                        <img src={user3} alt="user 3 img"/>
                            <p>"I've been using your software for years, and it keeps getting better, I am so much happy!"</p>
                            <h5>Sarah Johnson</h5>
                            <p className="subtitle">Founder, Startup ABC</p>
                        </div>
                    </div>

                    {/* <!-- Testimonial 3 --> */}

                    <div className="col-lg-4 mb-4">
                        <div className="testimonial-card">
                        <img src={user2} alt="user 2 img"/>
                            <p>"Your customer support is top-notch! Quick and helpful responses every time."</p>
                            <h5>Jane Smith</h5>
                            <p className="subtitle">COO, ABC Inc.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
  )
}
