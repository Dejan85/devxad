import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <div className='services'>
        <h2 className='services__h2'>Services</h2>
        <div className='services__content'>
          <div className='services__content__box'>
            <i className='fab fa-html5 services__content__box--icon' />
            <p className='services__content__box--heading'>Static Web Page</p>
            <p className='services__content__box--p'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta impedit
            </p>
          </div>

          <div className='services__content__box'>
            <i className='fab fa-react services__content__box--icon' />
            <p className='services__content__box--heading'>Web Application</p>
            <p className='services__content__box--p'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta impedit
            </p>
          </div>

          <div className='services__content__box'>
            <i className='fab fa-node-js services__content__box--icon' />
            <p className='services__content__box--heading'>
              Full Stack Application
            </p>
            <p className='services__content__box--p'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta impedit
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
