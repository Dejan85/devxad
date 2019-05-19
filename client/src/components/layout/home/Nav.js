import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='home__nav'>
      <ul className='home__nav--list'>
        <li className='home__nav--item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='home__nav--item'>
          <Link to='/'>Services</Link>
        </li>
        <li className='home__nav--item'>
          <Link to='/'>Work</Link>
        </li>
        <li className='home__nav--item'>
          <Link to='/'>Portfolio</Link>
        </li>
        <li className='home__nav--item'>
          <Link to='/'>About</Link>
        </li>
        <li className='home__nav--item'>
          <Link to='/'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
