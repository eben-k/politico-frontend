import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginUser } from '../../../store/modules/auth';

import Layout from '../../presentationals/Layout';

import '../../../assets/css/Login.css';

export const Login = ({ loginUser: handleLogin }) => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  function updateLocalState(event) {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  }
  async function onSubmit(event) {
    event.preventDefault();
    const loginResponse = await handleLogin(userDetails);
    return loginResponse;
  }
  return (
    <Layout>
      <div className="login-form">
        <h1 className="login-heading">Log In</h1>
        <div className="form">
          <form onSubmit={onSubmit} className="login" action="">
            <div>
              <input
                type="text"
                name="email"
                placeholder="Email"
                required
                onChange={updateLocalState}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={updateLocalState}
              />
            </div>

            <div>
              <input type="submit" value="LOG IN" />
            </div>

            <div className="forgotpassword">
              <p>
                <a href="reset.html">Forgot Password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func,
};

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  errors: state.auth.errors,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { loginUser },
)(Login);
