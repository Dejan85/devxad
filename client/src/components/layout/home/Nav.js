import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='home__nav'>
      <ul className='home__nav--list'>
        <li className='home__nav--item'>
          <Link to='/' className='home__nav--link active'>
            Home
          </Link>
        </li>
        <li className='home__nav--item'>
          <Link to='/' className='home__nav--link'>
            Services
          </Link>
        </li>
        <li className='home__nav--item'>
          <Link to='/' className='home__nav--link'>
            Work
          </Link>
        </li>
        <li className='home__nav--item'>
          <Link to='/' className='home__nav--link'>
            Portfolio
          </Link>
        </li>
        <li className='home__nav--item'>
          <Link to='/' className='home__nav--link'>
            About
          </Link>
        </li>
        <li className='home__nav--item'>
          <Link to='/' className='home__nav--link'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
