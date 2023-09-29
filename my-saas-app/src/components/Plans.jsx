import React from 'react'
import '../css/plans.css'


export default function Plans() {

    return (
        <section id="cards" className="my-5" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container">
                <h2 className="text-center mb-4 plan-heading">Choose a Plan</h2>
                <div className="row">
                    {/* <!-- Card 1 --> */}
                    <div className="col-lg-4 mb-4">
                        <div className="card custom-card shadow">
                            <div className="card-body">
                                <h3 className="card-title">Silver Account</h3>
                                <h6 className="card-subtitle py-2">$40 Monthly</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0">Awesome Support</li>
                                    <li className="list-group-item border-0">Carefully crafted components</li>
                                    <li className="list-group-item border-0">Super friendly support team</li>
                                    <li className="list-group-item border-0">Regular Updates</li>
                                </ul>
                                <div className="text-center">
                                    <a href="#" className="btn btn-outline-danger my-3">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div className="col-lg-4 mb-4">
                        <div className="card custom-card shadow">
                            <div className="card-body">
                                <h3 className="card-title">Gold Account</h3>
                                <h6 className="card-subtitle py-2">$100 Monthly</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0">Awesome Support</li>
                                    <li className="list-group-item border-0">Carefully crafted components</li>
                                    <li className="list-group-item border-0">Super friendly support team</li>
                                    <li className="list-group-item border-0">Regular Updates</li>
                                </ul>
                                <div className="text-center">
                                    <a href="#" className="btn btn-outline-danger my-3">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 3 --> */}
                    <div className="col-lg-4 mb-4">
                        <div className="card custom-card shadow">
                            <div className="card-body">
                                <h3 className="card-title">Platinum Account</h3>
                                <h6 className="card-subtitle py-2">$150 Monthly</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0">Awesome Support</li>
                                    <li className="list-group-item border-0">Carefully crafted components</li>
                                    <li className="list-group-item border-0">Super friendly support team</li>
                                    <li className="list-group-item border-0">Regular Updates</li>
                                </ul>
                                <div className="text-center">
                                    <a href="#" className="btn btn-outline-danger my-3">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
