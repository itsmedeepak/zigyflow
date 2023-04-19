import React from 'react';
import { BsFillFileTextFill } from 'react-icons/bs';

import { BsImage } from 'react-icons/bs';
import { FiPackage } from 'react-icons/fi';
import { RiComputerLine } from 'react-icons/ri';

import { BsCalculatorFill } from 'react-icons/bs';

import { BsFillCameraReelsFill } from 'react-icons/bs';

import { BsFillCameraFill } from 'react-icons/bs';

import { GiEarthAmerica } from 'react-icons/gi';

import { BsRocketTakeoff } from 'react-icons/bs';



const ServicesWeProvide = () => {
  return (
    <div > <h2>Your Requirements </h2>
    <div className='YourRequirements'> 

     

      <div className="contactServicesbox">

        <div className={`contactServicesboxdiv`} >

            {/* <div  className='reacticons'> <BsFillFileTextFill size={50}/>  </div> */}
            <BsImage size={40}/>  

                  Branding


         {/* <div>  Startup/D2C </div> */}

        </div>
        <div className="contactServicesboxdiv">

           {/* <div  className='reacticons'> <HiRocketLaunch size={50}/>  </div> */}
                       < FiPackage size={40}/>  
                         Packaging 


        </div>

        <div className="contactServicesboxdiv">

           < RiComputerLine size={40}/>  
            Web Development
        </div>

        <div className="contactServicesboxdiv">

           < BsCalculatorFill size={40}/>  
            UI/UX
        </div>
        <div className="contactServicesboxdiv">

           < BsFillCameraReelsFill size={40}/>  
            Video Production
        </div>
        <div className="contactServicesboxdiv">

           < BsFillCameraFill size={40}/>  
            Photography
        </div>


        <div className="contactServicesboxdiv">

           < GiEarthAmerica size={40}/>  
            Digital Marketting
        </div>

        <div className="contactServicesboxdiv">

           < BsRocketTakeoff size={40}/>  
            Performance Marketting
        </div>

        


      </div>
      


      
      </div> 
    </div>

  )
} 

export default ServicesWeProvide