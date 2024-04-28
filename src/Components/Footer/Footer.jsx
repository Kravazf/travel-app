import './footer.css';
import videoYakht from '../../Assets/video_yaht_small.mp4';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);

  const handleSendButtonClick = () => {
    // Очищення поля вводу email
    setEmail('');
  };

  return ( 
    <section className='footer flex'>
      <div className='videoDiv'>
        <video src={videoYakht} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className='secContent flex container'>
        <div data-aos='fade-right' className='contactDiv flex'>
          <div className='text'>
            <small>
              KEEP IN TOUCH
            </small>
            <h2>
              Travel with us
            </h2>
          </div>
          <div className='inputDiv flex'>
            <input
              id='email'
              data-aos='fade-up'
              type='email'
              autoComplete='email'
              placeholder='Enter Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            <button
              data-aos='fade-up'
              className='btn flex'
              type='submit'
              onClick={handleSendButtonClick}
              >
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>
        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='/' className='logo flex'>
                <MdOutlineTravelExplore className='icon'/>  Travel.
              </a>
            </div>
            <div data-aos='fade-up' className='footerParagraph'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores fugiat quod, earum repudiandae illo, impedit minus ipsam incidunt unde possimus est odit iure. Nemo sint ipsam, sunt suscipit ipsa iusto.
            </div>
            <div data-aos='fade-up' className='footerSocials flex'>
              <a href="#"><AiOutlineTwitter className='icon'/></a>
              <a href="#"><AiFillYoutube className='icon'/></a>
              <a href="#"><AiOutlineInstagram className='icon'/></a>
              <a href="#"><FaTripadvisor className='icon'/></a>
            </div>
          </div>
          <div className='footerLinks grid'>
            <div data-aos='fade-up' data-aos-duration='2500' className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> <a href='#'>Services</a>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> <a href='#'>Insurance</a>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> <a href='#'>Agency</a>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> <a href='#'>Tourism</a>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> <a href='#'>Payment</a>
              </li>
            </div>
            <div data-aos='fade-up' data-aos-duration='3500' className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/><a href='#'>Bookings</a>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> <a href='#'>Rentcars</a>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> <a href='#'>HostelWorld</a>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> <a href='#'>Trivago</a>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> <a href='#'>TripAdvisor</a>
              </li>
            </div>
            <div data-aos='fade-up' data-aos-duration='4500' className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> <a href='#'>London</a>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> <a href='#'>California</a>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> <a href='#'>Indonesia</a>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> <a href='#'>Europe</a>
              </li>
              <li className='footerList flex'>
                 <FiChevronRight className='icon'/> <a href='#'>Oceania</a>
              </li>
            </div>
          </div>
          <div className='footerDiv flex'>
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHT RESERVED <strong>'WEBP'</strong>2024</small>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Footer;
