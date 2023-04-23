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
import styles from "../../styles/ServicesWeProvide.module.css";
const List = [
  {
    id: 1,
    data: ' Branding',

    IconStyle: <BsImage/>,
  },

  {
    id: 2,
    data: ' Packaging',

    IconStyle: FiPackage,
  },

  {
    id: 3,
    data: 'Web Development',
    IconStyle: RiComputerLine,
  },
  {
    id: 4,
    data: ' UI/UX',
    IconStyle: BsCalculatorFill,
  },
  {
    id: 5,
    data: ' Video Production',
    IconStyle: BsFillCameraReelsFill,
  },
  {
    id: 6,
    data: ' Photography',
    IconStyle: BsFillCameraFill,
  },
  {
    id: 7,
    data: 'Digital Marketting',
    IconStyle: GiEarthAmerica,
  },
  {
    id: 8,
    data: ' Performance Marketting',
    IconStyle: BsRocketTakeoff,
  },
];



const ServicesWeProvide = () => {
  const [item, Setitem] = useState([false,false,false,false,false,false,false,false,false]);
  


  const handlechange = (e) => {
  const itemId = e.currentTarget.id;
  const updatedItem = [...item];
  updatedItem[itemId] = !updatedItem[itemId];
  Setitem(updatedItem);
 
};

  return (
    <div>

      <h2>Your Requirements </h2>

      
      <div className={styles['my-class']}>
        <div
          id="1" 
          onClick={handlechange}
          className={  item[1] ? styles['selected'] : styles['unselected']  }
        >
          <BsImage size={30} />
          <p> Branding</p>
        </div>

        <div
          id="2"
          onClick={handlechange}
          className={item[2] ? styles['selected'] : styles['unselected']}
        >
          <FiPackage size={30} />
          <p>Packaging</p>
        </div>


        <div
          id="3"
          onClick={handlechange}
          className={item[3] ? styles['selected'] : styles['unselected']}
        >
          <RiComputerLine size={30} />
          <p> Web Development </p>
        </div>


        <div
          id="4"
          onClick={handlechange}
          className={item[4] ? styles['selected'] : styles['unselected']}
        >
          <BsCalculatorFill size={30} />
          <p> UI/UX</p>
        </div>

        </div>
        
        <div className={styles['my-class']}>

        <div
          id="5"
          onClick={handlechange}
          className={item[5] ? styles['selected'] : styles['unselected']}
        >
          <BsFillCameraReelsFill size={30} />
          <p>  Video Production</p>
        </div>


        <div
          id="6"
          onClick={handlechange}
          className={item[6] ? styles['selected'] : styles['unselected']}
        >
          <BsFillCameraFill size={30} />
          <p> Photography</p>
        </div>

        <div
          id="7"
          onClick={handlechange}
          className={item[7] ? styles['selected'] : styles['unselected']}
        >
          <GiEarthAmerica size={30} />
          <p> Digital Marketting</p>
        </div>

        <div
        id="8"
          onClick={handlechange}
          className={item[8] ? styles['selected'] : styles['unselected']}
        >
          < BsRocketTakeoff size={30} />
          <p> Performance Marketting</p>
        </div>



      </div>
    </div>
  );
};

export default ServicesWeProvide;
