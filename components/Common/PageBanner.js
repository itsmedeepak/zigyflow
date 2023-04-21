import React, { Component } from 'react';

class PageBanner extends Component {
    render() {

        let { pageTitle, BGImage } = this.props;

        return (
            // <div className="page-title-area bg-one">

            <> 
            
            <div className={`page-title-area `}></div>
            <div className="d-table1">
                     <div className="d-table-cell">
                         <div className="container">

                             <div className='column' >
                                 <p>
                                 {pageTitle}
                                 </p>

                                 </div>

                             <div className='column1'> 

                             <span> We can neither confirm or deny that we read minds so give 
                             us a bit of background on what you're looking for </span>

                             </div>
                         </div>
                     </div>
                 </div>

            <style jsx>
          {`
            .d-table1{
             border: 0.2rem double ;
             color:white;
              border-radius: 2rem;
              background-color: #444448
              


            }

            p{
              color:white
            }

            

          `} </style>

            

            </>


            
        );
    }
}

export default PageBanner;