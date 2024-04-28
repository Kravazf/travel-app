import React, { useEffect, useState } from 'react';
import './home.css';
import video from '../../Assets/video3.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = ({ onPriceFilter }) => {
  const [price, setPrice] = useState(400);
  const [destination, setDestination] = useState('');
  
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handlePriceChange = (event) => {
    const newPrice = parseInt(event.target.value);
    setPrice(newPrice);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleFilterClick = () => {
    onPriceFilter(price, destination); 
  };

  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type='video/mp4'></video>
      <div className='homeContent container'>
        <div className='textDiv'>
          <p data-aos='fade-up' className='smallText'>
            Our Packages
          </p>
          <h1 data-aos='fade-up' className='homeTitle'>
            Search your Holiday
          </h1>
        </div>
        <div data-aos='fade-up' className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor='city'>Search your destination:</label>
            <div className='input flex'>
              <input 
                id='city' 
                name='city' 
                type='text' 
                placeholder='Enter name here...' 
                value={destination}
                onChange={handleDestinationChange}
              />
              <GrLocation className='icon' />
            </div>
          </div>
          <div className='dateInput'>
            <label htmlFor='date'>Select your date:</label>
            <div className='input flex'>
              <input
                id='date'
                name='date'
                type='date'
                />
            </div>
          </div>
          <div className='priceInput'>
            <div className='label_total flex'>
              <label htmlFor='price'>Max price:</label>
              <h3 className='total'>{price}$</h3>
            </div>
            <div className='input flex'>
              <input
                id='price'
                name='price'
                type='range'
                min='400'
                max='5000'
                value={price}
                onChange={handlePriceChange}
              />
            </div>
          </div>

          <button onClick={handleFilterClick} className='searchOptions flex'>
            <HiFilter className='icon' />
            <p>MORE FILTERS</p>
          </button>
        </div>
        <div data-aos='fade-up' className='homeFooterIcons flex'>
          <div className='rightIcons'>
            <a href="#"><FiFacebook className='icon' /></a>
            <a href="#"><AiOutlineInstagram className='icon' /></a>
            <a href="#"><FaTripadvisor className='icon' /></a>
          </div>
          <div className='leftIcons'>
            <a href="#"><BsListTask className='icon' /></a>
            <a href="#"><TbApps className='icon' /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;