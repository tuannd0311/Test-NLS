import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid/faBars'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import Item from '././item'
import Lead from '././lead'

import './navbar.css'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuClass: '',
    }
  }

  setToggleTopMenuClass = () => {
    if (this.state.menu_class === '') {
      this.setState({
        menuClass: 'toggled',
      })
    } else {
      this.setState({
        menuClass: '',
      })
    }
  }

  render = () => {
    let topMenuClass = `top-menu ${this.state.menuClass}`
    console.log('prop', this.props)
    return (
      <div className={topMenuClass} >
        <Lead url={logo} />
        <div className='left'>
          <Item text='Home' path='/home' />
          <Item text='Dog' path='#' />
          <Item text='Cat' path='#'/>
          <Item text='About' path='#' />
          <Item text='Contact' path='#'/>
        </div>
        <Link to={`/`} className='right'> 
          <button className="button">
            Login
          </button>
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          className='top-menu-icon'
          onClick={this.setToggleTopMenuClass}
        />
        <div className='clear-fix' />
      </div>
    )
  }
}
