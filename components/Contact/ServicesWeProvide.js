import React, { useState } from 'react';
import { BsFillFileTextFill } from 'react-icons/bs';

import { BsImage } from 'react-icons/bs';
import { FiPackage } from 'react-icons/fi';
import { RiComputerLine } from 'react-icons/ri';

import { BsCalculatorFill } from 'react-icons/bs';

import { BsFillCameraReelsFill } from 'react-icons/bs';

import { BsFillCameraFill } from 'react-icons/bs';

import { GiEarthAmerica } from 'react-icons/gi';

import { BsRocketTakeoff } from 'react-icons/bs';
const sz = 30;



const ServicesWeProvide = () => {

  const [idx,Setidx]=useState("ini");

   

const handle2=()=>{
 Setidx("def");
}
const handle1=()=>{
 Setidx("def");
}
  return (
    <div>
      {' '}
      <h2>Your Requirements </h2>
      <div className="YourRequirements">
        <div className="contactServicesbox">

          <div className={`contactServicesboxdiv`} id={idx}
            
            
          >
            <BsImage size={sz} />
            Branding
          </div>
          <div className="contactServicesboxdiv">
           
            <FiPackage size={sz} />
            Packaging
          </div>

          <div className="contactServicesboxdiv">
            <RiComputerLine size={sz} />
            Web Development
          </div>

          <div className="contactServicesboxdiv">
            <BsCalculatorFill size={sz} />
            UI/UX
          </div>
          <div className="contactServicesboxdiv">
            <BsFillCameraReelsFill size={sz} />
            Video Production
          </div>
          <div className="contactServicesboxdiv">
            <BsFillCameraFill size={sz} />
            Photography
          </div>

          <div className="contactServicesboxdiv">
            <GiEarthAmerica size={sz} />
            Digital Marketting
          </div>

          <div className="contactServicesboxdiv">
            <BsRocketTakeoff size={sz} />
            Performance Marketting
          </div>

            <style jsx> 
              {`
                 .contactServicesboxdiv{

                   max-width: 80px;
                   max-height: 30rem;
                   font-size: 0.8rem;
                 }
              `}
            </style>

        </div>
      </div>
    </div>
  );
};

export default ServicesWeProvide;
