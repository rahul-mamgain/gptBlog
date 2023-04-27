import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox,shopify } from './imports';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
    <div className=''>
      <img src={google} />
    </div>
    <div className=''>
      <img src={slack} />
    </div>
    <div className=''>
      <img src={atlassian} />
    </div>
    <div className=''>
      <img src={dropbox} />
    </div>
    <div className=''>
      <img src={shopify} />
    </div>

    </div>
  )
}

export default Brand