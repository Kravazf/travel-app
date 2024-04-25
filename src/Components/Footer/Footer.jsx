import './footer.css';
import videoYakht from '../../Assets/video_yaht_small.mp4';
import { FiSend } from 'react-icons/fi';

const Footer = () => {
  return ( 
    <section className='footer'>
      <div className='videoDiv'>
        <video src={videoYakht} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div className='text'>
            <small>
              KEEP IN TOUCH
            </small>
            <h2>
              Travel with us
            </h2>
          </div>
          <div className="inputDiv flex">
            <input type='email' placeholder='Enter Email Address'/>
            <button className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Footer;
