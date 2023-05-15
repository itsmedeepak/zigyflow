import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img src="/images/logo.png" alt="image"  width="180"/>
                                            </a>
                                        </Link>
                                    </div>

                                    {/* <p>
                                        Loremmbcb nc norem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                    </p> */}

                                    <ul className="social-links">
                                        <li>
                                            <a href="https://www.facebook.com/profile.php?id=100090961759875" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        
                                        <li>
                                            <a href="https://www.linkedin.com/company/zigyflow/" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com/zigyflow?igshid=YmMyMTA2M2Y=" target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li> 
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget ml-4 pl-5">
                                    <h3>Explore</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>About</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Portfolio</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Team</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget ml-4">
                                    <h3>Quick Links</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/">
                                                <a>Contact Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Pricing</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Faq</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Get in Touch</h3>

                                    <ul className="get-in-touch">
                                        <li><i className="icofont-home"></i> 2750 Quadra Street Victoria, Canada.</li>
                                        <li>
                                            <i className="icofont-live-support"></i> 
                                            <a href="tel:+324-9442-515">+324-9442-515</a>
                                        </li>
                                        <li>
                                            <i className="icofont-envelope"></i> 
                                            <a href="mailto:hello@pungent.com">hello@pungent.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="container">
                            <p>Copyright &copy; {currentYear} Zigyflow. All Rights Reserved By <a href="/" target="_blank">zigyflow.com</a></p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;