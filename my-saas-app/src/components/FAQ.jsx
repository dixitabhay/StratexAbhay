import React from 'react'
import '../css/FAQ.css'

export default function FAQ() {
    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <h2 className="text-center mb-5">Frequently Asked Questions</h2>
                <div className="row">
                    {/* <!-- FAQ 1 --> */}
                    <div className="col-lg-12">
                        <div className="faq-card" data-bs-toggle="collapse" data-bs-target="#faq1">
                            <div className="faq-question">How do I get started ?</div>
                            <h3 className='faq-answer'>Getting started is easy. Just sign up for an account and follow our setup guide.</h3>
                        </div>
                    </div>

                    {/* <!-- FAQ 2 --> */}
                    <div className="col-lg-12">
                        <div className="faq-card" data-bs-toggle="collapse" data-bs-target="#faq2">
                            <div className="faq-question">Is my data secure ?</div>
                            <h3 className='faq-answer'>We take data security seriously. Your data is encrypted and stored securely on our servers.</h3>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="faq-card" data-bs-toggle="collapse" data-bs-target="#faq2">
                            <div className="faq-question">Support ?</div>
                            <h3 className='faq-answer'>If anyone have any problem with our products are welcome to our support to ask for help. We try to answer the questions as first as possible. Be specific and tell as much details as you can.</h3>
                        </div>
                    </div>

                    {/* <!-- Add more FAQs here --> */}
                </div>
            </div>
        </section>
    )
}
