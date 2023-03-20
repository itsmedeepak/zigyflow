import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items:1,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
}

class Feedback extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="feedback-area ptb-100">
                <div className="container">
                    <div className="feedback-list">
                        <div className="quotes-icon">
                            <img src="/images/left-quote-white.png" alt="icon" />
                        </div>

                        {this.state.display ? <OwlCarousel 
                        className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-feedback">
                                <p>ZigyFlow has been an invaluable partner for our business. Their lead generation services have helped us to connect with new customers and grow our business. I highly recommend their services.</p>
                                <div className="bar"></div>

                                <h3>John Smith</h3>
                                <span>CEO & Founder, Vertex Solutions</span>
                            </div>

                            <div className="single-feedback">
                                <p>The team at ZigyFlow has done an excellent job managing our social media accounts and running effective advertising campaigns. We've seen a significant increase in engagement and conversions since we started working with them.</p>

                                <div className="bar"></div>

                                <h3>Oliver Smith</h3>
                                <span>Marketing Manager at NexusCorp</span>
                            </div>

                            <div className="single-feedback">
                                <p>ZigyFlow's IT consultancy services have helped us to streamline our operations and improve our overall efficiency. They have provided us with valuable insights and recommendations that have had a significant impact on our business.</p>

                                <div className="bar"></div>
                                
                                <h3>David Lee</h3>
                                <span>Summit Enterprises</span>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>

                {/* Client image */}
                <div className="client-image-box">
                    <img src="/images/clients/client1.png" className="client1" alt="client" />
                    <img src="/images/clients/client2.png" className="client2" alt="client" />
                    <img src="/images/clients/client3.png" className="client3" alt="client" />
                    <img src="/images/clients/client4.png" className="client4" alt="client" />
                    <img src="/images/clients/client5.png" className="client5" alt="client" />
                    <img src="/images/clients/client6.png" className="client6" alt="client" />
                    <img src="/images/clients/client7.png" className="client7" alt="client" />
                    <img src="/images/clients/client8.png" className="client8" alt="client" />
                </div>
            </section>
        );
    }
}

export default Feedback;