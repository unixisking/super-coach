import React from 'react';
import PropTypes from 'prop-types';

import { Chrono } from 'react-chrono';
export default function Timeline(props) {
  // eslint-disable-next-line react/prop-types
  const { steps, icons } = props;
  return (
    <div className="py-16 bg-gray-100 overflow-hidden lg:py-24 cursor-default">
      <div className="relative w-full mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl mb-16">
            Comment ça marche?
          </h2>
          {/* 
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore */}
          <Chrono
            theme={{
              primary: '#D1D5DB',
            }}
            hideControls
            mode="VERTICAL_ALTERNATING"
            scrollable={false}
            disableNavOnKey
          >
            {steps.map((step, index) => (
              <div key={index} className="text-xs sm:text-sm text-gray-700">
                <div>
                  <h3 className="text-lg font-extrabold text-primary tracking-tight sm:text-2xl mb-2">
                    {step.title}
                  </h3>
                  {step.content}
                </div>
              </div>
            ))}
            <div className="chrono-icons">{icons.map((icon) => icon)}</div>
          </Chrono>
        </div>
      </div>
    </div>
  );
}

Timeline.propTypes = {
  icons: PropTypes.array,
  steps: PropTypes.array,
};
