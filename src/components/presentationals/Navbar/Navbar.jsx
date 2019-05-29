import React from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <i className="fab fa-pinterest-p" />
          olitico
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/signup">
            <div>Elections</div>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <div>
              <i className="fas fa-sign-in-alt" /> Log In
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
