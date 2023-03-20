import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import TeamStyleThree from '../components/Team/TeamStyleThree';
import TeamStyleTwo from '../components/Team/TeamStyleTwo';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class Team extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Our team is comprised of talented individuals with diverse backgrounds and skill sets, allowing us to provide a wide range of services to our clients. " 
                    BGImage="bg-one"
                />  
                <TeamStyleThree />

                <TeamStyleTwo />

                <CtaAreaTwo />
                
                <Footer />
            </>
        );
    }
}

export default Team;