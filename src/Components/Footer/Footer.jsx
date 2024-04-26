import './footer.css';
import videoYakht from '../../Assets/video_yaht_small.mp4';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    AOS.init({duration: 1700})
  }, []);

  return ( 
    <section className='footer flex'>
      <div className='videoDiv'>
        <video src={videoYakht} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className='secContent flex container'>
        <div data-aos='fade-up' className='contactDiv flex'>
          <div className='text'>
            <small>
              KEEP IN TOUCH
            </small>
            <h2>
              Travel with us
            </h2>
          </div>
          <div className='inputDiv flex'>
            <input type='email' placeholder='Enter Email Address'/>
            <button className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>
        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdOutlineTravelExplore className='icon'/>  Travel.
              </a>
            </div>
            <div className='footerParagraph'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores fugiat quod, earum repudiandae illo, impedit minus ipsam incidunt unde possimus est odit iure. Nemo sint ipsam, sunt suscipit ipsa iusto.
            </div>
            <div className='footerSocials flex'>
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiOutlineInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>
          <div className='footerLinks grid'>
            <div className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Services
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Insurance
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Payment
              </li>
            </div>
            <div className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Bookings
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Rentcars
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> HostelWorld
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Trivago
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> TripAdvisor
              </li>
            </div>
            <div className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> London
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> California
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Indonesia
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> Europe
              </li>
              <li className='footerList flex'>
                 <FiChevronRight className='icon'/> Oceania
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
