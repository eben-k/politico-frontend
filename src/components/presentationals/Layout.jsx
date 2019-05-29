import React, { Fragment } from 'react';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="container">
        <Navbar />
        {children}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
