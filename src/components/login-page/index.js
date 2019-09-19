import React from 'react';
import { connect } from 'react-redux';

import Input from '../input'
import Button from '../button'

import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputClass: 'input',
      errorInputName: false,
      errorInputPass: false,
    }
  }

  onLogin() {
    const { userName, password } = this.props

    this.resetError()
    const checkUserName = userName && userName.length
    const checkPassword = password && password.length

    if (checkUserName && checkPassword) {
      this.props.history.push('/home')
    } else {
        if (!checkUserName) {
          this.setState({ errorInputName: true })
        }
        if (!checkPassword){
          this.setState({ errorInputPass: true })
        }
    }
  };

  resetError() {
    this.setState({
      errorInputName: false,
      errorInputPass: false
    })
  }

  render() {
    const { inputClass, errorInputName, errorInputPass } = this.state
    return (
      <div className="login-wrapper">
        <div className="left-content-login">
          <span className="text-login-left">Hello! Wellcome to Demo</span>
        </div>
        <div className="form-login">
          <div className='login'>
            <div className='title-login'>Log In</div>
            <Input
              id='user-name'
              classInput={!errorInputName ? inputClass : 'error'}
              type='text'
              placeholder='User Name'
            />
            <Input
              id='pass-word'
              classInput={!errorInputPass ? inputClass : 'error'}
              type='password'
              placeholder='Password'
            />
            <p className='text-sign-up'>
              New to us? 
              <a href='#'>
                Sign Up
              </a>
            </p>
            <Button text='Login' handleClick={() => this.onLogin()} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.login.userName,
    password: state.login.password,
  }};

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
