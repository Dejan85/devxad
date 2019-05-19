import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pigGame from '../../../sass/images/pigGame.png';

class Work extends Component {
  render() {
    return (
      <div className='work'>
        <h2 className='work__h2'>LATEST WORK</h2>
        <div className='work__description'>
          <span className='work__description--span'>
            Simple Javascript Game
          </span>
          <h3 className='work__description--h3'>Pig Game</h3>
          <p className='work__description--p'>
            This is small javascript game This is small javascript game This is
            small javascript game. This is small javascript game This is small
            javascript game This is small javascript game. This is small
            javascript game This is small javascript game This is small
            javascript game. This is small javascript game This is small
            javascript game This is small javascript game.
          </p>
          <Link className='work__description--btn' to='/'>
            Live
          </Link>
        </div>
        <div className='work__img'>
          <img src={pigGame} alt='pig game' />
        </div>
      </div>
    );
  }
}

export default Work;
