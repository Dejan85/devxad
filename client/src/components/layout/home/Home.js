import React, { Component } from 'react';

// components
import Logo from './Logo';
import Nav from './Nav';
import Content from './Content';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <header className='home__header'>
          <Logo />
          <Nav />
        </header>
        <Content />
      </div>
    );
  }
}

export default Home;
