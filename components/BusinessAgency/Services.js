import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <>
                <div className="ptb-100 pb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Services</h2>
                            <p>At ZigyFlow, we offer a range of services designed to help businesses establish a strong online presence and achieve their marketing goals. Our services include:</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one bg-fcfbfb text-center">
                                    <i className="pe-7s-rocket bg-13c4a1"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>SEO Optimization</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one bg-fcfbfb text-center">
                                    <i className="pe-7s-diamond bg-6610f2"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Market Research</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one bg-fcfbfb text-center">
                                    <i className="pe-7s-light bg-ffb700"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Digital Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one bg-fcfbfb text-center">
                                    <i className="pe-7s-target bg-fc3549"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Keyword Targeting</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one bg-fcfbfb text-center">
                                    <i className="pe-7s-mail-open-file bg-00d280"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Email Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one bg-fcfbfb text-center">
                                    <i className="pe-7s-users bg-ff612f"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Marketing & Reporting</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Services;