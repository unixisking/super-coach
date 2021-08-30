import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Navbar from '../components/navbar';

import FootballIcon from '../images/icons/football.png';
import BasketballIcon from '../images/icons/basketball.png';
import SprintIcon from '../images/icons/sprint.png';
import CheckmarkIcon from '../images/icons/check.png';

const transferFeatures = [
  {
    id: 1,
    name: 'Diplôme en anatomie (UNIL)',
  },
  {
    id: 2,
    name: 'Diplôme PRO-FTS ',
  },
  {
    id: 3,
    name: 'Diplôme de masseur (ASCA)',
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: 'Sarah Atcho (sprinteuse,record suisse) ',
    icon: SprintIcon,
  },
  {
    id: 2,
    name: 'Thabo Sefolosha (NBA) ',
    icon: BasketballIcon,
  },
  {
    id: 3,
    name: 'Johan Djourou (élite football suisse).',
    icon: FootballIcon,
  },
];

export default function TrainingElitesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Navbar />

      <div className="w-screen h-screen">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-white text-center mt-32">
          Super Coach Training Elites
        </h1>
        <StaticImage
          className="mt-"
          src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1630272225/super-coach/AdobeStock_68575323_oo3eov.png"
        />
        <h2 className="text-xl md:text-3xl lg:text-4xl text-white text-center mt-16">
          Steeve Louissaint, coach & préparateur physique diplômé.
        </h2>
      </div>
      <div className="py-16 overflow-hidden lg:py-24 mx-auto">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-primary tracking-tight sm:text-3xl text-primary">
                THE COMPETITION STARTS AT TRAINING.
              </h3>
              <p className="mt-3 text-lg text-gray-400">
                Après 13 ans de carrière au coeur de l’élite du basketball
                suisse ainsi que deux Coupes de Suisse inscrites à son palmarès,
                Steeve Louissaint est aujourd’hui dédié à la preparation
                physique. Fort de son expérience, de ses diplômes et d’une
                comprehension parfaite des enjeux du sport élite, il accompagne
                les athlètes qui désirent emmener leur performance au NEXT
                LEVEL.
              </p>

              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt className="flex items-center">
                      <img
                        src={CheckmarkIcon}
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                      <p className="ml-4 text-lg leading-6 font-medium text-gray-300">
                        {item.name}
                      </p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <StaticImage
                className="relative mx-auto"
                width={490}
                src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1630272213/super-coach/Nos_Cours_d1f4be.png"
                alt=""
              />
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-primary tracking-tight sm:text-3xl text-primary">
                  Always in the loop
                </h3>
                <p className="mt-3 text-lg text-gray-400">
                  Avec Motivation,Détermination et Sourire! ses programmes de
                  coaching personnalisé ont déjà bénéficié à
                </p>

                <dl className="mt-10 space-y-10">
                  {communicationFeatures.map((item) => (
                    <div key={item.id} className="relative">
                      <dt className="flex items-center">
                        <img
                          src={item.icon}
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                        <p className="ml-4 text-lg leading-6 font-medium text-gray-300">
                          {item.name}
                        </p>
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <svg
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width={784}
                  height={404}
                  fill="none"
                  viewBox="0 0 784 404"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={784}
                    height={404}
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  />
                </svg>
                <img
                  className="relative mx-auto"
                  width={490}
                  src="http://localhost:8000/static/10b26ddfd55b194f7de5087caade42c8/a5fb7/Nos_Cours_d1f4be.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
