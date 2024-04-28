import { AiFillCloseCircle } from 'react-icons/ai';
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { TbGridDots } from 'react-icons/tb';
import { useState } from 'react';

const NavBar = () => {
  const [active, setActive] = useState('navBar');

  //Function to toggle navBar
  const showNav = () => {
    setActive('navBar activeNavbar');
  }

  //Function to remove navBar

  const removeNavbar = () => {
    setActive('navBar');
  }

  return ( 
    <section className='NavBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='/' className='logo flex'>
            <h1>
              <MdOutlineTravelExplore className='icon'/>
              Travel.
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='/' className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href='/' className='navLink'>Packages</a>
            </li>
            <li className='navItem'>
              <a href='/' className='navLink'>Shop</a>
            </li>
            <li className='navItem'>
              <a href='/' className='navLink'>About</a>
            </li>
            <li className='navItem'>
              <a href='/' className='navLink'>Pages</a>
            </li>
            <li className='navItem'>
              <a href='/' className='navLink'>News</a>
            </li>
            <li className='navItem'>
              <a href='/' className='navLink'>Contact</a>
            </li>
            <button className='btn'>
              <a href='/'>BOOK NOW</a>
            </button>
          </ul>
          <div
            onClick={removeNavbar}
            className='closeNavbar'>
              <AiFillCloseCircle className='icon'/>
          </div>
        </div>
        <div
          onClick={showNav}
          className='toggleNavbar'>
            <TbGridDots className='icon'/>
        </div>
      </header>
    </section>
   );
}
 
export default NavBar;