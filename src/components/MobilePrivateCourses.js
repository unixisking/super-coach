import React from 'react';
import PropTypes from 'prop-types';

function MobilePrivateCourse(props) {
  return (
    <div className="relative mt-12 lg:mt-24">
      <div className="mt-10 relative lg:mt-0" aria-hidden="true">
        <h3 className="text-2xl text-primary font-extrabold text-gray-200 tracking-tight sm:text-3xl mt-8 lg:mt-0">
          {props.title}
        </h3>
        <img
          className="relative rounded-lg py-4"
          width={490}
          src={props.url}
          alt=""
        />
      </div>
      <div className="relative">
        <p className="mt-3 text-lg text-gray-400">{props.text}</p>
      </div>
    </div>
  );
}
MobilePrivateCourse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MobilePrivateCourse;
