import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { siLogo } from 'Utils/ImageUtil';

class Header extends Component {
  render = () => {
    return (
      <div className='container mx-auto p-4 md:pt-12 lg:px-24'>
        <div className='flex flex-row'>
          <Link to='/' className='flex'>
            <img src={siLogo} className='imgLogo mt-2 sm:mt-0' alt='Surround Insurance Logo' />
          </Link>
          <div onClick={() => {}} className='flex-1 mt-2 text-right cursor-pointer text-si-link'>
            Log out
          </div>
        </div>
      </div>
    );
  };
}

export default Header;
