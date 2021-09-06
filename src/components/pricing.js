import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

const pricingChoice = {
  public: [
    {
      name: 'FULL BODY WORKOUT',
      href: '/contact',
      priceMonthly: 25,
      description: 'Chaque lundi à 18h45',
      includedFeatures: [
        'Conçue pour raffermir la silhouette et brûler des calories',
        'Ouvert aux débutantes et à tous les niveaux',
        'Parfait pour tonifier le corps de la tête aux pieds',
      ],
    },
    {
      name: 'CARDIO STEP',
      href: '/contact',
      priceMonthly: 25,
      description: 'chaque mardi à 19 heures.',
      includedFeatures: [
        'Brûler un maximum de calories pendant notre cours CARDIO STEP',
        'Transpirer et se défouler avec le sourire et du bon son',
        'Ouvert aux débutantes et à tous les niveaux',
        'Fondre les kilos pendant 45 minutes EXPLOSIVES!',
      ],
    },
    {
      name: 'BOOTY SCULPT',
      href: '/contact',
      priceMonthly: 25,
      description: 'Chaque jeudi à 19h45',
      includedFeatures: [
        '60 minutes hebdomadaires,parfaites pour combattre la cellulite',
        'Un fessier ferme et bien dessiné',
        'Ouvert aux débutantes et à tous les niveaux',
      ],
    },
    {
      name: 'BUSINESS WORKOUT',
      href: '/contact',
      priceMonthly: 25,
      description: 'Faire de nouvelles connaissances',
      includedFeatures: [
        'Séance de sport matinale',
        'Chacun a 2 minutes chrono pour présenter son business ou ses services',
        'Connexions,réseautage et good vibes garanties',
      ],
    },
    {
      name: 'SPEED DATING WORKOUT',
      href: '/contact',
      priceMonthly: 25,
      description: 'Faire de nouvelles rencontres',
      includedFeatures: [
        'Le SPEED DATING WORKOUT réunit les célibataires autour d’une activité fun, dans une ambiance détendue.',
        'Faire des connaissances naturelles, loin des relations virtuelles, des conversations stériles et autres photos trompeuses.',
        'Une bonne alternative aux applications de rencontre.',
      ],
    },
    {
      name: 'AFTER WORKOUT',
      href: '/contact',
      priceMonthly: 25,
      description: 'Une journée originale',
      includedFeatures: [
        'Un workout endiablé dans une ambiance de feu',
        'Une fin de journée spéciale et originale avec une invitation à l’apéro detox.',
        'L’AFTER WORKOUT est un concept inédit en Suisse mais surtout, c’est définitivement une expérience à vivre entre amis ou collègues.',
      ],
    },
  ],
  private: [
    {
      name: 'Training unique',
      href: '/contact',
      priceMonthly: 65,
      description: 'Une séance de 60min',
      includedFeatures: [
        "Accès à une salle de sports complètement privatisé pour vos séances d'entrainement.",
        'Réalisations des tests pour identifier vos déséquilibres musculaires.',
        'Renforcement musculaire.',
        'Entrainement sur mesure destiné à améliorer vos performance globales.',
      ],
    },
    {
      name: 'Pack Bronze',
      href: '/contact',
      priceMonthly: 60,
      description: 'Un total de 10 séances',
      includedFeatures: [
        "Accès à une salle de sports complètement privatisé pour vos séances d'entrainement.",
        'Réalisations des tests pour identifier vos déséquilibres musculaires.',
        'Renforcement musculaire.',
        'Entrainement sur mesure destiné à améliorer vos performance globales.',
      ],
    },
    {
      name: 'Pack Argent',
      href: '/contact',
      priceMonthly: 55,
      description: 'Un total de 25 séances',
      includedFeatures: [
        "Accès à une salle de sports complètement privatisé pour vos séances d'entrainement.",
        'Réalisations des tests pour identifier vos déséquilibres musculaires.',
        'Renforcement musculaire.',
        'Entrainement sur mesure destiné à améliorer vos performance globales.',
      ],
    },
    {
      name: 'Pack Or',
      href: '/contact',
      priceMonthly: 50,
      description: 'Un total de 50 séances',
      includedFeatures: [
        "Accès à une salle de sports complètement privatisé pour vos séances d'entrainement.",
        'Réalisations des tests pour identifier vos déséquilibres musculaires.',
        'Renforcement musculaire.',
        'Entrainement sur mesure destiné à améliorer vos performance globales.',
      ],
    },
  ],
};

export default function Pricing() {
  const [pricesType, setPricesType] = useState('private');
  return (
    <div id="prix" className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-primary sm:text-center">
            Tarifs
          </h1>
          <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
            <button
              type="button"
              onClick={() => setPricesType('private')}
              className={clsx(
                'ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8',
                { 'text-white bg-primary': pricesType === 'private' },
              )}
            >
              Séances privées
            </button>
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
              Séances collectives
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
