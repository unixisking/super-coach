import PropTypes from 'prop-types';
import React from 'react';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div className="bg-black overflow-hidden">
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
