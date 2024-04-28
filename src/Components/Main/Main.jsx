import React, { useEffect, useState } from 'react';
import './main.css';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TruncatedParagraph from './../TruncatedParagraph/TruncatedParagraph';

const Main = ({ filteredData }) => {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);

  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (index) => {
    setExpandedItem(index === expandedItem ? null : index);
  };

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {filteredData.map((item, index) => (
          <div
            data-aos='fade-up'
            key={item.destTitle}
            className="singleDestination">
            <div className='imageDiv'>
              <img src={item.ImgSrc} alt={item.destTitle} />
            </div>
            <div className="cardInfo">
              <h4 className="destTitle">
                {item.destTitle}
              </h4>
              <span className='continent flex'>
                <HiOutlineLocationMarker className='icon'/>
                <span className='name'>
                  {item.location}
                </span>
              </span>
              <div className="fees flex">
                <div className='grade'>
                  <span>{item.grade}<small>+1</small></span>
                </div>
                <div className='price'>
                  <h5>{item.fees}</h5>
                </div>
              </div>
              <div className='desc'>
                {expandedItem === index ? (
                  <p>{item.description}</p>
                ) : (
                  <TruncatedParagraph text={item.description} maxLength={100}/>
                )}
              </div>
              <button className="btn flex" onClick={() => toggleExpand(index)}>
                DETAILS <HiOutlineClipboardCheck className='icon'/>
              </button>
            </div>
          </div>
        ))}
        {filteredData.length === 0 && (
          <div className='noOffersMessage'>
            <p>Oops!!!</p> 
            <p>No offers available for the selected destination and price.</p>
          </div>
        )}
      </div>
    </section>
  );
}
 
export default Main;