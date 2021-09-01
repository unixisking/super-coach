import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

const pricingChoice = {
  public: [
    {
      name: 'FULL BODY WORKOUT',
      href: '/contact',
      priceMonthly: 25,
      description: 'Ce pack comporte un total de 50 séances',
      includedFeatures: [
        'l’athlète réalise destests: ses désquilibres musculaires sont identifiés.',
        'cibler les muscles ayant perdu leur capacité contractile.',
        'Programme sur mesure,destiné à améliorer sa performance et résoudre les faiblesses musculaires identifiées.',
        'Profond renforcement musculaire.',
      ],
    },
    {
      name: 'CARDIO STEP',
      href: '/contact',
      priceMonthly: 25,
      description: 'All the basics for starting a new business',
      includedFeatures: [
        'l’athlète réalise destests: ses désquilibres musculaires sont identifiés.',
        'cibler les muscles ayant perdu leur capacité contractile.',
        'Programme sur mesure,destiné à améliorer sa performance et résoudre les faiblesses musculaires identifiées.',
        'Profond renforcement musculaire.',
      ],
    },
    {
      name: 'BOOTY SCULPT',
      href: '/contact',
      priceMonthly: 25,
      description: 'Ce pack comporte un total de 10 séances',
      includedFeatures: [
        'l’athlète réalise destests: ses désquilibres musculaires sont identifiés.',
        'cibler les muscles ayant perdu leur capacité contractile.',
        'Programme sur mesure,destiné à améliorer sa performance et résoudre les faiblesses musculaires identifiées.',
        'Profond renforcement musculaire.',
      ],
    },
    {
      name: 'BUSINESS WORKOUT',
      href: '/contact',
      priceMonthly: 25,
      description: 'Ce pack comporte un total de 25 séances',
      includedFeatures: [
        'l’athlète réalise destests: ses désquilibres musculaires sont identifiés.',
        'cibler les muscles ayant perdu leur capacité contractile.',
        'Programme sur mesure,destiné à améliorer sa performance et résoudre les faiblesses musculaires identifiées.',
        'Profond renforcement musculaire.',
      ],
    },
  ],
  private: [
    {
      name: 'Training unique',
      href: '/contact',
      priceMonthly: 65,
      description: 'All the basics for starting a new business',
      includedFeatures: [
        'l’athlète réalise destests: ses désquilibres musculaires sont identifiés.',
        'cibler les muscles ayant perdu leur capacité contractile.',
        'Programme sur mesure,destiné à améliorer sa performance et résoudre les faiblesses musculaires identifiées.',
        'Profond renforcement musculaire.',
      ],
    },
    {
      name: 'Pack Bronze',
      href: '/contact',
      priceMonthly: 60,
      description: 'Ce pack comporte un total de 10 séances',
      includedFeatures: [
        'l’athlète réalise destests: ses désquilibres musculaires sont identifiés.',
        'cibler les muscles ayant perdu leur capacité contractile.',
        'Programme sur mesure,destiné à améliorer sa performance et résoudre les faiblesses musculaires identifiées.',
        'Profond renforcement musculaire.',
      ],
    },
    {
      name: 'Pack Argent',
      href: '/contact',
      priceMonthly: 55,
      description: 'Ce pack comporte un total de 25 séances',
      includedFeatures: [
        'l’athlète réalise destests: ses désquilibres musculaires sont identifiés.',
        'cibler les muscles ayant perdu leur capacité contractile.',
        'Programme sur mesure,destiné à améliorer sa performance et résoudre les faiblesses musculaires identifiées.',
        'Profond renforcement musculaire.',
      ],
    },
    {
      name: 'Pack Or',
      href: '/contact',
      priceMonthly: 50,
      description: 'Ce pack comporte un total de 50 séances',
      includedFeatures: [
        'l’athlète réalise destests: ses désquilibres musculaires sont identifiés.',
        'cibler les muscles ayant perdu leur capacité contractile.',
        'Programme sur mesure,destiné à améliorer sa performance et résoudre les faiblesses musculaires identifiées.',
        'Profond renforcement musculaire.',
      ],
    },
  ],
};

export default function Pricing() {
  const [pricesType, setPricesType] = useState('public');
  return (
    <div id="pricing" className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-primary sm:text-center">
            Tarifs
          </h1>
          <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
            <button
              type="button"
              onClick={() => setPricesType('public')}
              className={clsx(
                'relative w-1/2 rounded-md shadow-sm py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8',
                {
                  'bg-white': pricesType === 'public',
                  'text-white bg-primary': pricesType === 'public',
                  'border-gray-200': pricesType !== 'public',
                },
              )}
            >
              Sessions publiques
            </button>
            <button
              type="button"
              onClick={() => setPricesType('private')}
              className={clsx(
                'ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8',
                { 'text-white bg-primary': pricesType === 'private' },
              )}
            >
              Sessions privées
            </button>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {pricingChoice[pricesType].map((tier) => (
            <div
              key={tier.name}
              className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-primary">
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {tier.priceMonthly} CHF
                  </span>{' '}
                  <span className="text-base font-medium text-gray-500">
                    /séance
                  </span>
                </p>
                <a
                  href={tier.href}
                  className="mt-8 block w-full bg-primary border border-primary rounded-md py-2 text-sm font-semibold text-white text-center "
                >
                  Je réserve
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  Ce qui est inclus
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
