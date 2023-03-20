import React, { Component } from 'react';
import Link from 'next/link';

class Partner extends Component {
    render() {
        return (
            <section className="partner-area pt-100 pb-60">
                <div className="container">
                    <div className="section-title">
                        <h2>Trusted By</h2>
                        <p>ZigyFlow is trusted by businesses of all sizes and industries, from startups to well-established corporations. Our client base includes companies in technology, healthcare, e-commerce, finance, and more. Our commitment to providing exceptional service and results has earned us the trust and loyalty of our clients. Here are just a few of the companies we've had the pleasure of working with</p>
                    </div>

                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner1.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner2.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner3.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner4.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner5.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner6.png" alt="image" />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;