import PropTypes from 'prop-types';
import React from 'react';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div className="bg-black">
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
