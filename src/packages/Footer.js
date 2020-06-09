import React from 'react';

import { logoWhite, fb, twitter } from 'Utils/ImageUtil';

const Footer = () => {
  return (
    <div id='footer' className='text-white py-4'>
      <div className='container mx-auto sm:flex px-4 lg:px-24'>
        <div className='text-center sm:text-left sm:flex-col'>
          <img src={logoWhite} alt='' />
          <p className='sub-title mt-2'>Copyright 2020</p>
        </div>
        <div className='text-center sm:text-right flex-1 mt-2 md:mt-2'>
          <a href='https://www.facebook.com/surroundinsurance/' target='_blank'>
            <img src={fb} alt='Surround Insurance on Facebook' className='w-6 mr-1 md:w-10 md:mr-2' />
          </a>
          <a href='https://twitter.com/SurroundInsure' target='_blank'>
            <img src={twitter} alt='Surround Insurance on Twitter' className='w-6 ml-1 md:w-10 md:ml-2' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
