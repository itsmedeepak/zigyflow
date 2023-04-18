import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class About extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="about-image">
                                    <img src="/images/about-img1.jpg" alt="image" className="rounded-10" />

                                    <div className="video-box">
                                        <div
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn"
                                        > 
                                            <i className="pe-7s-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title">
                                        <h2>About Us</h2>

                                        <p>
                                            ZiggyFlow is focused on helping small local businesses succeed in the digital age. We understand the challenges that these businesses face, from limited resources to intense competition from online marketplaces and e-commerce giants. 

                                        </p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Who We Are</h4>
                                        <p>
                                           Ziggy Flow understand the challenges that small local businesses face in today's competitive digital landscape. With the rise of e-commerce and online marketplaces, it's becoming increasingly difficult for small businesses to stay relevant and competitive.

                                            </p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Our History</h4>
                                        <p>
                                           ZiggyFlow was founded with a clear mission in mind  to help small local businesses succeed online. We recognized the challenges that these businesses faced in the rapidly evolving digital landscape and saw an opportunity to provide them with innovative and effective software solutions that could help them scale and grow.

                                            </p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Our Mission</h4>
                                        <p>
                                            Our mission is to empower these businesses by providing them with innovative and effective software solutions that help them scale and succeed online
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='_ysd-zHamjk' 
                        onClose={() => this.setState({isOpen: false})} 
                    />
                </section>
            </>
        );
    }
}

export default About;