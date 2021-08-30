import React from 'react';

import { IoIosPeople } from 'react-icons/io';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { BiHappyBeaming } from 'react-icons/bi';

const features = [
  {
    description:
      'L’occasion de démarrer ou reprendre le sport à Lausanne, dans une ambiance de feu ',
    icon: BiHappyBeaming,
  },
  {
    description: 'Des cours de sport collectifs et abordables',
    icon: IoIosPeople,
  },
  {
    description:
      'Un accompagnement concret vers vos objectifs minceur/perte de poids',
    icon: GiWeightLiftingUp,
  },
];

export default function Features() {
  return (
    <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl ">
      <div className="relative" style={{ width: 550 }}>
        <h2
          className="text-left text-3xl text-primary leading-8 font-medium tracking-tight sm:text-6xl pb-4"
          initial="hidden"
        >
          Super Coach c&apos;est ...
        </h2>
      </div>
      <div className="mt-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Super Coach c&apos;est ...</h2>
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {features.map((feature) => (
              <div className="flex" key={feature.name}>
                <dt>
                  {/* <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"> */}
                  <feature.icon className="w-10 h-10 text-primary" />
                  {/* </div> */}
                </dt>
                <div className="ml-4">
                  {/* <p className="text-lg leading-6 font-medium text-gray-200">
                  {feature.name}
                </p> */}
                  <dd className="text-base text-gray-400">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
