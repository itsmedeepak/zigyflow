import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import Navbar from '../components/Layouts/Navbar';

import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';
import ContactServices from '../components/Contact/ContactServices';
import ServicesWeProvide from '../components/Contact/ServicesWeProvide';
import ProjectDetails from '../components/Contact/ProjectDetails';


class Contact extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Let's Get This Rolling!" 
                    BGImage="bg-one"
                />  

                {/* <ContactInfo /> */}
                
                <ContactForm />


                


                

                <Footer/>
            </>
        );
    }
}

export default Contact;