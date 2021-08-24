import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { IoIosPeople } from 'react-icons/io';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { BiHappyBeaming } from 'react-icons/bi';
import { useInView } from 'react-intersection-observer';

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
  const controls = useAnimation();
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  });
  return (
    <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl ">
      <div className="relative" style={{ width: 550 }}>
        <motion.h2
          className="text-left text-3xl leading-8 font-medium tracking-tight sm:text-6xl border-b-4 pb-4 border-primary"
          initial="hidden"
          animate={controls}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            repeatType: 'reverse',
            duration: 1.5,
          }}
          variants={{
            visible: { x: 0 },
            hidden: { x: -1000 },
          }}
          style={{
            background: 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            borderColor: '#dcb6bd',
          }}
        >
          Super Coach c&apos;est ...
        </motion.h2>
      </div>
      <div className="mt-16">
        <div ref={ref} className="py-12">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Super Coach c&apos;est ...</h2>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  className="flex"
                  initial="hidden"
                  animate={controls}
                  transition={{
                    type: 'tween',
                    ease: 'easeInOut',
                    repeatType: 'reverse',
                    duration: 1,
                    delay: index + 1,
                  }}
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  key={feature.name}
                >
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
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
