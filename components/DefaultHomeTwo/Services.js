import React, { Component } from 'react';
import Link from 'next/link';

class ServicesStyleFour extends Component {
    render() {
        return (
            <div className="bg-fcfbfb ptb-100 pb-60">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Services</h2>
                        <p>At ZigyFlow, we offer a range of services designed to help businesses establish a strong online presence and achieve their marketing goals. </p>
                    </div>
                    <div className="row justify-content-center" >
                    <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one white-bg text-center" style={{borderRadius:"18px",cursor:'pointer'}}>
                                <i className="pe-7s-mail-open-file bg-00d280"></i>
                                <h3>
                                    
                                        Lead Generation
                                    
                                </h3>
                                <p>Our lead generation services include creating and running targeted advertising campaigns on social media platforms.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one white-bg text-center" style={{ borderRadius: "18px" ,cursor:'pointer'}}>
                                <i className="pe-7s-users bg-13c4a1"></i>
                                <h3>
                                    
                                        Social Marketing
                                    
                                </h3>
                                <p>Social marketing services include creating and managing social media accounts, developing and executing social media strategies</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one white-bg text-center" style={{ borderRadius: "18px" ,cursor:'pointer'}}>
                                <i className="pe-7s-diamond bg-6610f2"></i>
                                <h3>
                                    
                                        Market Research
                                    
                                </h3>
                                <p>Market research report is aimed at analyzing the current market trends and customer behavior in the digital industry. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one white-bg text-center" style={{ borderRadius: "18px" ,cursor:'pointer'}}>
                                <i className="pe-7s-light bg-ffb700"></i>
                                <h3>
                                   
                                        Digital Marketing
                                    
                                </h3>
                                <p> ZigyFlow provides digital marketing services to other businesses to help them establish a strong online presence.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one white-bg text-center" style={{ borderRadius: "18px",cursor:'pointer' }}>
                                <i className="pe-7s-users bg-ff612f"></i>
                                <h3>
                                    
                                        Marketing & Reporting
                                    
                                </h3>
                                <p>We provide comprehensive reporting services that give our clients visibility into their online performance.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one white-bg text-center" style={{ borderRadius: "18px",cursor:'pointer' }}>
                                <i className="pe-7s-headphones bg-6610f2"></i>
                                <h3>
                                   
                                        IT Consultancy
                                    
                                </h3>
                                <p>Our IT consultancy services include technology strategy development, software selection and IT infrastructure</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            
                            <div className="service-card-one white-bg text-center " style={{ borderRadius: "18px" ,cursor:'pointer'}}>
                                <i className="pe-7s-rocket bg-13c4a1"></i>
                                <h3>
                                 
                                        SEO Optimization
                                   
                                </h3>
                                <p>We optimize websites to ensure that they are easily found by potential customers on search engines like Google. </p>
                            </div>
                        </div>

                       

                        
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one white-bg text-center" style={{ borderRadius: "18px" ,cursor:'pointer'}}>
                                <i className="pe-7s-target bg-fc3549"></i>
                                <h3>
                                   
                                        Keyword Targeting
                                   
                                </h3>
                                <p>Our keyword targeting services involve conducting thorough research to identify the most relevant and high-traffic keywords.</p>
                            </div>
                        </div>



                       

                       

                        

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one white-bg text-center" style={{ borderRadius: "18px" ,cursor:'pointer'}}>
                                <i className="pe-7s-comment bg-fc3549"></i>
                                <h3>
                                  
                                       Admin Support
                                    
                                </h3>
                                <p>Our administrative support services include document management, email management, customer support and more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesStyleFour;