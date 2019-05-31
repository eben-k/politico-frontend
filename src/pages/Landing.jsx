import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/presentationals/Layout';

import '../assets/css/Landing.css';
import general from '../assets/images/general.jpg';
import vote from '../assets/images/vote.png';
import vote3 from '../assets/images/vote-3.jpg';
import ballot from '../assets/images/ballot.png';
import politics2 from '../assets/images/politics-24.jpg';
import administration from '../assets/images/administration.jpg';
class Homepage extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1 className="catch-phrase"> Your Vote Always Counts!!! </h1>
        </div>
        <div id="page">
          <div className="container">
            <div className="card col-3">
              <img src={general} alt="Avatar" />
              <div className="card-detail-">
                <Link
                  to="/signup"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <h3>Register To Vote</h3>
                </Link>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card col-3">
              <img src={vote} alt="Avatar" />
              <div className="card-detail-">
                <Link
                  to="/parties"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <h3>Political Parties</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card col-3">
              <img src={vote3} alt="Avatar" />
              <div className="card-detail-">
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <h3>Candidates</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card col-3">
              <img src={ballot} alt="Avatar" />
              <div className="card-detail-">
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <h3>Voter Resources</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card col-3">
              <img src={politics2} alt="Avatar" />
              <div className="card-detail-">
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <h3>Election Data</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card col-3">
              <img src={administration} alt="Avatar" />
              <div className="card-detail-">
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <h3>Poll Workers</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Homepage;
