import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
    <Link to='/'>
      <div className='option'>
          <p className='optTitle'>H</p>
      </div>
    </Link>
    <Link to='/register'>
      <div className='option'>
          <div className='optTitle'>
            <div className='optTitleBlock'>
              <p className='optTitleBloack'>R</p>
            </div>
          </div>
      </div>
    </Link>

    </div>
  )
}

export default Navigation;
