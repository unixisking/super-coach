import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function Button({ text, ...props }) {
  const AnimatedLink = motion(Link);
  return (
    <AnimatedLink
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="inline-flex items-center px-8 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-primary rounded-3xl"
      {...props}
    >
      {text}
    </AnimatedLink>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;