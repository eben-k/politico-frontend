import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signupUser } from '../../../store/modules/auth';

import Layout from '../../presentationals/Layout';

import '../../../assets/css/Signup.css';

export const Signup = ({ signupUser: handleSignup }) => {
  const [userDetails, setUserDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    passportUrl: '',
    phoneNumber: '',
    password: '',
  });

  function updateLocalState(event) {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  }
  async function onSubmit(event) {
    event.preventDefault();
    const signupResponse = await handleSignup(userDetails);
    return signupResponse;
  }
  return (
    <Layout>
      <div className="signup-form">
        <h1 className="login-heading">Sign Up To Politico</h1>
        <div className="form">
          <form onSubmit={onSubmit} id="form" className="signup" action="">
            <div>
              <input
                id="firstname"
                name="firstname"
                type="text"
                placeholder="First Name"
                onChange={updateLocalState}
              />
              <div id="firstnameError" className="error" />
            </div>
            <div>
              <input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Last Name"
                onChange={updateLocalState}
              />
              <div id="lastnameError" className="error" />
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                onChange={updateLocalState}
              />
              <div id="emailError" className="error" />
            </div>
            <div>
              <input
                id="phone"
                name="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                onChange={updateLocalState}
              />
              <div id="phoneError" className="error" />
            </div>
            <div>
              <input
                id="passport"
                type="text"
                name="passportUrl"
                placeholder="PassportUrl"
                onChange={updateLocalState}
              />
              <div id="passportError" className="error" />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={updateLocalState}
              />
              <div id="password-error" className="error" />
            </div>
            <p>
              By creating an account you agree to our{' '}
              <a href="#">Terms & Privacy</a>.
            </p>
            <div className="form">
              <div id="signup-error" />
              <div id="signup-success" />
            </div>
            <div>
              <div className="loader" id="spinner" />
            </div>
            <div>
              <input id="submit-button" type="submit" value="SIGN UP" />
            </div>
            <div>
              <p>
                Already have an account? <a href="login.html">Log in Here</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

Signup.propTypes = {
  signupUser: PropTypes.func,
};

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  errors: state.auth.errors,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { signupUser },
)(Signup);
