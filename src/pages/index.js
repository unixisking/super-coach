import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

import Button from '../components/Button';
import Layout from '../components/layout';
import SEO from '../components/seo';

import HeroVideo from '../videos/hero-video.mp4';
import Features from '../components/Features';
import Pricing from '../components/pricing';
import Navbar from '../components/navbar';

const header = 'Super Coach ';
const highlighted = 'Lausanne';
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.25,
    },
  },
};
const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const features = [
  {
    text: 'Bravo à @_unelunatique qui a perdu 15 kilos avec LOUISSAINT TRAINING ! Magnifique avant et magnifique après. On adore !',
    image:
      'https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629895733/super-coach/pic1_szue7b.png',
  },
  {
    text: '"Pour The Voice, le coach Louissaint nous a concocté une programme de remise en forme sur mesure. C\'était OUF !!!"',
    image:
      'https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629895757/super-coach/pic02_cbwcwd.png',
  },
  {
    text: 'Perte de poids et transformation remarqu-able pour Arnaud, félicitations pour ta forte détermination à chaque cours!',
    image:
      'https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629895784/super-coach/03_suab0f.png',
  },
  {
    text: '"Chez LOUISSAINT TRAINING y\'a une ambiance de feu !"',
    image:
      'https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629895797/super-coach/05_ypia5z.png',
  },
  {
    text: 'Elle a atteint son objectif avec LOUISSAINT TRAINING ! Un immense bravo à elle pour ses efforts qui ont porté leurs fruits !',
    image:
      'https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629895816/super-coach/05_b3lp3s.png',
  },
];

function IndexPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    async function animate() {
      if (inView) {
        await controls.start('visible');
      }
    }
    animate();
  }, [controls, inView]);
  console.log(inView);
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="z-30 lg:absolute w-full">
        <Navbar />
      </div>

      <div className="bg-black bg-opacity-70 absolute w-full h-screen top-0 z-20 hidden lg:block" />
      <video autoPlay muted loop className=" top-0 w-screen hidden lg:block">
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <CtaSection
        className="static lg:absolute"
        transition={{ delay: 1, from: { y: -10000 }, to: { y: 0 } }}
      >
        <motion.h1
          className="text-4xl md:text-5xl mt-24 lg:mt-0 lg:text-7xl text-white"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {header.split('').map((char, index) => (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          ))}
          {highlighted.split('').map((char, index) => (
            <motion.span
              className="text-primary"
              key={char + '-' + index}
              variants={letter}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <p className="text-xl lg:text-2xl text-white mt-8">
          Nos séances sont tellement cool que 100% des personnes qui ont
          participé à une séance d’essai ont suivi des cours par la suite avec
          nos coachs.
        </p>
        <p className="text-xl lg:text-2xl text-white">
          N’attendez plus, réservez votre séance d’essai{' '}
          <span className="text-primary">gratuite</span> maintenant.
        </p>
        <Button
          to="/contact"
          style={{ marginTop: '1.5rem' }}
          text="Je réserve"
        />
      </CtaSection>

      <div id="coaches" className="py-16 bg-black lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl ">
          <div className="relative" style={{ width: 305 }}>
            <h2
              ref={ref}
              className="text-left text-3xl text-primary leading-8 font-medium tracking-tight sm:text-6xl pb-4"
            >
              Nos Coachs
            </h2>
          </div>
          <div
            ref={ref}
            className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          >
            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <img
                className="relative mx-auto rounded-lg"
                width={490}
                src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629894409/super-coach/WhatsApp_Image_2021-08-23_at_16.30.25_g6djuz.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <h3 className="text-2xl text-primary font-extrabold text-gray-200 tracking-tight sm:text-3xl mt-8 lg:mt-0">
                Steeve Luissaint
              </h3>
              <p className="mt-3 text-lg text-gray-400">
                C’est le coach préféré des Romand·e·s ! Au terme de sa carrière
                de basketteur (élite suisse, lions de Genève) Steeve Louissaint
                a décidé de mettre son expérience et ses diplômes (anatomie) à
                profit, en tant que coach de sport. Ses programmes de coaching
                personnalisés ont notamment bénéficié à Thabo Sefolosha (NBA),
                Sarah Atcho (sprinteuse, record suisse) ou encore Johan Djourou
                (élite football suisse). La devise du coach? “Motivation,
                détermination et sourire” !Voilà pourquoi les cours Louissaint
                Training font brûler des calories, dans une ambiance
                bienveillante et foncièrement positive.
              </p>
            </div>
          </div>

          <div
            ref={ref}
            className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          >
            <div className="relative">
              <h3 className="text-2xl text-primary font-extrabold text-gray-200 tracking-tight sm:text-3xl ">
                Rebecca Luissaint
              </h3>
              <p className="mt-3 text-lg text-gray-400">
                Derrière chaque coach accompli, il y a...une femme qui l’est
                tout autant! Rebecca Louissaint est une passionnée de sport et
                de nutrition. Portée sur les mesures concrètes qui favorisent le
                bien-être, cette mère et femme de feu trouve son équilibre grâce
                au sport. Avec son style à la fois doux et super tonique, Coach
                Rebecca Louissaint a donné naissance au concept Gym Poussette
                après la venue de son premier enfant. À la salle comme à la
                ville, sa devise reste la même: “un esprit sain dans un corps
                sain”.
              </p>
            </div>
            <div
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              animate={controls}
              initial="hidden"
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                repeatType: 'reverse',
                duration: 1,
                delay: 2,
              }}
              className="mt-10 -mx-4 relative lg:mt-0"
              aria-hidden="true"
            >
              <img
                className="relative mx-auto rounded-lg"
                width={490}
                src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629894528/super-coach/WhatsApp_Image_2021-08-23_at_13.29.47_nkbudo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-black lg:py-24">
        <Features />
      </div>
      <div id="testimonials" className="py-16 bg-black">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl ">
          <div className="relative" style={{ width: 500 }}>
            <h2
              className="text-left text-3xl text-primary leading-8 font-medium tracking-tight sm:text-6xl pb-4"
              initial="hidden"
            >
              Histoires de Succès
            </h2>
          </div>

          <div className="py-12 ">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt>
                      <img src={feature.image} alt="" />
                      <p className="mt-5 text-lg leading-6 font-medium text-gray-400">
                        {feature.text}
                      </p>
                    </dt>
                    {/* <dd className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </dd> */}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div id="courses" className="py-16 lg:py-24 bg-black">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl ">
          <div className="relative" style={{ width: 275 }}>
            <h2 className="text-left text-3xl text-primary leading-8 font-medium tracking-tight sm:text-6xl pb-4">
              Nos Cours
            </h2>
          </div>
          <div
            ref={ref}
            className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center"
          >
            <div
              className="mt-10 -mx-4 relative lg:mt-0 col-start-2 sm:col-start-1 hidden sm:block"
              aria-hidden="true"
            >
              <img
                className="relative mx-auto rounded-lg"
                width={490}
                src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629895892/super-coach/full_body_workout_pfv60c.png"
                alt=""
              />
            </div>
            <div className="relative col-start-1 lg:col-start-2">
              <h3 className="text-2xl text-primary font-extrabold text-gray-200 tracking-tight sm:text-3xl mt-8 lg:mt-0">
                FULL BODY WORKOUT
              </h3>
              <p className="mt-3 text-lg text-gray-400">
                Le FULL BODY WORKOUT est une session de 60 minutes, conçue pour
                raffermir la silhouette et brûler des calories. Chaque lundi à
                18h45, le/la coach vous accompagne à chaque seconde, pour
                booster vos efforts ! Ouvert aux débutant·e·s et à tous les
                niveaux, le FULL BODY WORKOUT c’est un rendez-vous hebdomadaire,
                parfait pour tonifier le corps de la tête aux pieds.
              </p>
            </div>
          </div>

          <div
            ref={ref}
            className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          >
            <div className="relative">
              <h3 className="text-2xl text-primary font-extrabold text-gray-200 tracking-tight sm:text-3xl">
                CARDIO STEP
              </h3>
              <p className="mt-3 text-lg text-gray-400">
                Venez brûler un maximum de calories pendant notre cours CARDIO
                STEP. Accrochez-vous car chaque mardi à 19 heures, on fait
                fondre les kilos pendant 45minutes EXPLOSIVES! L&apos;objectif ?
                Transpirer et se défouler... avec le sourire et du bon son.
              </p>
            </div>
            <div
              className="mt-10 -mx-4 relative lg:mt-0 hidden sm:block"
              aria-hidden="true"
            >
              <img
                className="relative mx-auto rounded-lg"
                width={490}
                src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629896085/super-coach/cardio_bdjr50.png"
                alt=""
              />
            </div>
          </div>

          <div
            ref={ref}
            className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          >
            <div
              className="mt-10 -mx-4 relative lg:mt-0 hidden sm:block"
              aria-hidden="true"
            >
              <img
                className="relative mx-auto rounded-lg"
                width={490}
                src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629901163/super-coach/sculpt_lgubni.png"
                alt=""
              />
            </div>
            <div className="relative">
              <h3 className="text-2xl text-primary font-extrabold text-gray-200 tracking-tight sm:text-3xl">
                BOOTY SCULPT
              </h3>
              <p className="mt-3 text-lg text-gray-400">
                Qui n’a pas envie d’un fessier ferme et bien dessiné? Chaque
                jeudi à 19h45, venez sculpter le muscle le plus important du
                corps humain le grand fessier ! Le cours BOOTY SCULPT c’est 60
                minutes hebdomadaires, parfaites pour combattre la cellulite et
                se sculpter une silhouette so bootylicious !
              </p>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl text-primary font-extrabold text-gray-200 tracking-tight sm:text-3xl">
                BUSINESS WORKOUT
              </h3>
              <p className="mt-3 text-lg text-gray-400">
                Quelle est la plus grande qualité d’un entrepreneur? Une
                motivation en béton, au quotidien.Et pour bien démarrer sa
                journée d’entrepreneur, le BUSINESS WORKOUT vous invite à une
                séance de sport matinal. Après l’effort, un petit-déjeuner
                healty est servi chacun a 2 minutes chrono pour présenter son
                business ou ses services. De bon matin, connexions, réseautage
                et good vibes guaranties l’avenir appartient à ceux qui se
                lèvent avant tout lemonde !
              </p>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <img
                className="relative mx-auto rounded-lg"
                width={490}
                src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1630207646/super-coach/business_kk41ab.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Pricing />
    </Layout>
  );
}
// absolute z-30 text-center top-1/2 left-1/2 w-4/5
const CtaSection = styled(motion.div)`
  text-align: center;

  @media (min-width: 1024px) {
    z-index: 30;
    top: 50%;
    left: 50%;
    height: 300px;
    width: 1024px;
    margin-left: -512px;
    margin-top: -150px;
  }
`;

export default IndexPage;
