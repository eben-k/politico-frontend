import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/NotFound.css';

const NotFound = () => {
  return (
    <Fragment>
      <div className="main-centre">
        <div>
          <h1 className="centre-piece">404</h1>
          <p className="sub-piece">This page does not exist unfortunately.</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Link
              to="/"
              className="btn-centre"
              style={{
                textDecoration: 'none',
              }}
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
