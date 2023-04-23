import React, { useState } from 'react';
import { BsFillFileTextFill } from 'react-icons/bs';
import { BsRocketTakeoffFill } from 'react-icons/bs';
import { MdCellWifi } from 'react-icons/md';

// import styled from '../../styles/contactservices.module.css';
import styled from 'styled-components';
import styles from '../../styles/changeidx.module.css';
import '../../styles/changeidx.module.css';

// const List = [
//   {
//     id: 1,
//     data: 'Startup/D2C Brand',
//     IconStyle: {
//       IconTitle: <BsFillFileTextFill />,
//     },
//   },

//   {
//     id: 2,
//     data: 'Existing/NewBuisness',
//     IconStyle: {
//       IconTitle: <BsFillFileTextFill />,
//     },
//   },

//   {
//     id: 3,
//     data: 'Product/Tech-Companies',
//     IconStyle: {
//       IconTitle: <BsFillFileTextFill />,
//     },
//   },
// ];

const ContactServices = () => {
  const [idx, setidx] = useState('initialstyle');

  // console.log(List[0].IconStyle.IconTitle);

  return (
    <>
      <div className="contactServices">
        <h2>Services We Provide</h2>
      </div>

      <div className="contactServicesbox">
        <div
          className={`contactServicesboxdiv`}
          id={idx}
          onClick={() => setidx('b')}
        >
          <BsFillFileTextFill size={45} />
          <p>Startup/D2C Brand </p>

          <style jsx>
            {`
              #b {
                border: 2px solid #000;
                border-radius: 8px;
                box-shadow: 0 0 6px #000;
                background-color: #ffa500;
              }

              p {
                font-size: 0.75rem;
              }
            `}
          </style>
        </div>

        <div
          className="contactServicesboxdiv"
          id={idx}
          onClick={() => setidx('a')}
        >
          <BsRocketTakeoffFill size={45} />
          <p> Existing/NewBuisness </p>

          <style jsx>
            {`
              #a {
                border: 2px solid #000;
                border-radius: 8px;
                box-shadow: 0 0 6px #000;
                background-color: #ffa500;
              }

              p {
                font-size: 0.75rem;
              }
            `}
          </style>
        </div>

        <div
          className="contactServicesboxdiv"
          id={idx}
          onClick={() => setidx('c')}
        >
          <MdCellWifi size={45} />
          <p>Product/Tech-Companies </p>

          <style jsx>
            {`
              #c {
                border: 2px solid #000;
                border-radius: 8px;
                box-shadow: 0 0 6px #000;
                background-color: #ffa500;
              }

              p {
                font-size: 0.75rem;
              }
            `}
          </style>
        </div>
      </div>
      {/* 
      <div>
        {List.map((item, idx) => (
          <StyledItem color={idx === selectedIndex ? '#1bb953' : '#fff'}>
            <div> {item.data} </div>
            <div></div>
          </StyledItem>
        ))}
      </div> */}
    </>
  );
};

export default ContactServices;
