import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './lead.css'

export default class Lead extends Component {
  render() {
    return (
      <div className='top-menu-lead'>
        <a href='/home'>
          <img src={this.props.url} alt="Paris" width="50" height="40" />
        </a>
      </div>
    )
  }
}

Lead.propTypes = {
  url: PropTypes.string,
}
