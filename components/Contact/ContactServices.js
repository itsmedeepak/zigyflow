import React from 'react';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { BsFillFileTextFill } from 'react-icons/bs';
import { BsRocketTakeoffFill } from 'react-icons/bs';
import { MdCellWifi } from 'react-icons/md';





const ContactServices = () => {
  return (
    <>
      <div className="contactServices">
        
        <h2>Services We Provide</h2> 
      </div>

      <div className="contactServicesbox">

        <div className={`contactServicesboxdiv`} >

            {/* <div  className='reacticons'> <BsFillFileTextFill size={50}/>  </div> */}
            <BsFillFileTextFill  size={50}/>  
                   Startup/D2C Brand


         {/* <div>  Startup/D2C </div> */}

        </div>
        <div className="contactServicesboxdiv">

           {/* <div  className='reacticons'> <HiRocketLaunch size={50}/>  </div> */}
                       <BsRocketTakeoffFill size={50}/>  
                         Existing/NewBuisness 


        </div>
        <div className="contactServicesboxdiv">

           <MdCellWifi size={50}/>  
            Product/Tech-Companies
        </div>
      </div>
    </>
  );
};

export default ContactServices;
