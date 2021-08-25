import PropTypes from 'prop-types';
import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

function Layout({ children }) {
  return (
    <div className="bg-black">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
