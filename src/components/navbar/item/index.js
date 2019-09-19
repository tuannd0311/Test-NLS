import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './item.css'

export default class Item extends Component {

  render() {
    const { path } = this.props
    const pathName = window.location.pathname === path

    return (
      <div className='top-menu-item'>
        <p className='top-menu-text'>
          <a href={path} style={pathName ? { color: '#3899ec' } : null }>
            {this.props.text}
          </a>
        </p>
      </div>
    )
  }
}

Item.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
};
