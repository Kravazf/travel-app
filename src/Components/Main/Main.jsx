import './main.css';
import data from './data.js'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    AOS.init({duration: 1700})
  }, []);

  return ( 
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {
          data.map((item) => {
            return (
              <div data-aos='fade-up' key={item.id} className="singleDestination">
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
                    <p>{item.description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
   );
}
 
export default Main;
