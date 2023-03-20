import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogRightSidebar from '../components/Blog/BlogRightSidebar';
import Footer from '../components/Layouts/Footer';

class Blog2 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className='' style={{marginTop:"100px"}}></div>
                {/* <PageBanner 
                    pageTitle="ZigyFlow Blog Page" 
                    BGImage="bg-four"
                />   */}

                <BlogRightSidebar />
                
                <Footer/>
            </>
        );
    }
}

export default Blog2;