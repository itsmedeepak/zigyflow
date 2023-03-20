import React, { Component } from 'react';
import Link from 'next/link';

class Team extends Component {
    render() {
        return (
            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Skilled Team</h2>
                        <p>Our team is comprised of talented individuals with diverse backgrounds and skill sets, allowing us to provide a wide range of services to our clients.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="team-card text-center">
                                <img src="/images/team/circle-team1.png" alt="Image" className="rounded-circle" />

                                <div className="team-caption">
                                    <h3>Deepak Kumar</h3>
                                    <p>CEO & Founder</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.linkedin.com/in/programdns" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/itsmeedepak?t=S5XQDVsQB-qgu0Ag-V-_nQ&s=09" target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/profile.php?id=100090940372215&mibextid=ZbWKwL" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com/itsmedeepak071?igshid=OTJhZDVkZWE=" target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://itsmedeepak.vercel.app/" target="_blank">
                                                <i className="icofont-dribbble"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="team-card text-center">
                                <img src="/images/team/circle-team2.png" alt="Image" className="rounded-circle" />

                                <div className="team-caption">
                                    <h3>Omi Sneha</h3>
                                    <p>Co-Founder</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.linkedin.com/in/omi-sneha-b1357a204/" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://dribbble.com/" target="_blank">
                                                <i className="icofont-dribbble"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-sm-6">
                            <div className="team-card text-center">
                                <img src="/images/team/circle-team3.jpg" alt="Image" className="rounded-circle" />

                                <div className="team-caption">
                                    <h3>Williams Smith</h3>
                                    <p>Front-end Specialist</p>
                                    <ul>
                                        <li>
                                            <a href="linkedin.com" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://dribbble.com/" target="_blank">
                                                <i className="icofont-dribbble"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="team-card text-center">
                                <img src="/images/team/circle-team4.jpg" alt="Image" className="rounded-circle" />

                                <div className="team-caption">
                                    <h3>David Miller</h3>
                                    <p>Reactjs Specialist</p>
                                    <ul>
                                        <li>
                                            <a href="linkedin.com" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://dribbble.com/" target="_blank">
                                                <i className="icofont-dribbble"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;