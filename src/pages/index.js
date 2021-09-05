import React, { Fragment, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

import Button from '../components/Button';
import Layout from '../components/layout';
import SEO from '../components/seo';

import HeroVideo from '../videos/hero-video-2.mp4';
import Features from '../components/Features';
import Pricing from '../components/pricing';
import Navbar from '../components/navbar';

import StepsImage from '../images/steps.png';
import StepsImageMobile from '../images/steps-mobile.png';
import CoachVideo from '../videos/coach-video.mp4';
import { Dialog, Transition } from '@headlessui/react';
import MobilePrivateCourse from '../components/MobilePrivateCourses';

const courses = [
  {
    title: 'FULL BODY WORKOUT',

    text: 'Le FULL BODY WORKOUT est une session de 60 minutes, conçue pour raffermir la silhouette et brûler des calories. Chaque lundi à 18h45, le/la coach vous accompagne à chaque seconde, pour booster vos efforts ! Ouvert aux débutant·e·s et à tous les niveaux, le FULL BODY WORKOUT c’est un rendez-vous hebdomadaire, parfait pour tonifier le corps de la tête aux pieds.',
    url: 'https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629895892/super-coach/full_body_workout_pfv60c.png',
  },
  {
    title: 'CARDIO STEP',

    text: "Venez brûler un maximum de calories pendant notre cours CARDIO STEP. Accrochez-vous car chaque mardi à 19 heures, on fait fondre les kilos pendant 45minutes EXPLOSIVES! L'objectif ? Transpirer et se défouler... avec le sourire et du bon son.",
    url: 'https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629896085/super-coach/cardio_bdjr50.png',
  },
  {
    title: 'BOOTY SCULPT',

    text: 'Qui n’a pas envie d’un fessier ferme et bien dessiné? Chaque jeudi à 19h45, venez sculpter le muscle le plus important du corps humain le grand fessier ! Le cours BOOTY SCULPT c’est 60 minutes hebdomadaires, parfaites pour combattre la cellulite et se sculpter une silhouette so bootylicious !',
    url: 'https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629901163/super-coach/sculpt_lgubni.png',
  },
  {
    title: 'BUSINESS WORKOUT',

    text: 'Quelle est la plus grande qualité d’un entrepreneur? Une motivation en béton, au quotidien.Et pour bien démarrer sa journée d’entrepreneur, le BUSINESS WORKOUT vous invite à une séance de sport matinal. Après l’effort, un petit-déjeuner healty est servi chacun a 2 minutes chrono pour présenter son business ou ses services. De bon matin, connexions, réseautage et good vibes guaranties l’avenir appartient à ceux qui se lèvent avant tout lemonde !',
    url: 'https://res.cloudinary.com/dxm0sdgpv/image/upload/v1630207646/super-coach/business_kk41ab.png',
  },
  {
    title: 'SPEED DATING WORKOUT',

    text: 'Envie d’une l’alternative aux applications de renco- ntres, truffées d’énergumènes ? N’en dites pas plus Nous avons ce qu’il vous faut: Le SPEED DATING WORKOUT, c’est une occasion unique de faire de nouvelles rencontres, dans une ambiance propice aux connexions naturelles. Loin des relations virtuelles, des conversations stériles et autres photos trompeuses, le SPEED DATING WORKOUT réunit les célibataires autour d’une activité fun, dans une ambiance détendue. Et qui sait ? Peut- être que la magie opérera.',
    url: 'https://res.cloudinary.com/dxm0sdgpv/image/upload/v1630466184/super-coach/speed_dating_c7g0um.png',
  },
  {
    title: 'AFTER WORKOUT',

    text: 'Fini les soirées impersonnelles à siroter des mojitos fadasses sur la terrasse ! Pour terminer sa journée sur une note originale et SUPER fun, l’AFTER WORKOUT vous invite à l’apéro detox, suivi d’un workout endiablé dans une ambiance de feu ! L’AFTER WORKOUT est un concept inédit en Suisse mais surtout, c’est définitivement une expérience à vivre entre amis ou collègues.',
    url: 'https://res.cloudinary.com/dxm0sdgpv/image/upload/v1630466180/super-coach/after_workout_xelhap.png',
  },
];

const header = 'Coach Sportif ';
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
  const [isVideoShown, setIsVideoShown] = useState(false);

  useEffect(() => {
    async function animate() {
      if (inView) {
        await controls.start('visible');
      }
    }
    animate();
  }, [controls, inView]);
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="z-30 lg:absolute w-full">
        <Navbar />
      </div>

      <div
        className="bg-black bg-opacity-70 absolute w-full h-screen top-0 z-20 hidden lg:block"
        style={{ height: '900px' }}
      />
      <video autoPlay muted loop className=" top-0 w-screen hidden lg:block">
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <CtaSection
        className="static lg:absolute"
        transition={{ delay: 1, from: { y: -10000 }, to: { y: 0 } }}
      >
        <motion.h1
          className="text-4xl md:text-5xl mt-24 lg:mt-0 lg:text-7xl text-white font-extrabold"
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
          Satisfait, 100% des participants à la séance d’essai ont réservé
          plusieurs séances de coaching par la suite. Super Coach vous aide à
          prendre votre corps en main, à transpirer dans la bonne humeur et de
          conserver la santé à vie.
        </p>
        <p className="text-xl lg:text-2xl text-white">
          N’attendez plus, réservez votre séance d’essai{' '}
          <span className="text-primary">gratuite</span> maintenant.
        </p>
        <Button
          internal
          to="/contact"
          style={{ marginTop: '1.5rem' }}
          text="Je réserve une séance d'essai"
        />
      </CtaSection>

      <div className="pt-16 bg-black lg:pt-24">
        <Features />
      </div>

      <Transition appear show={isVideoShown} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsVideoShown(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Une vidéo qui résume bien notre vibe
                </Dialog.Title>
                <div className="mt-2">
                  <video
                    width="490"
                    className="mx-auto"
                    preload="none"
                    controls
                  >
                    <source src={CoachVideo} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                </div>

                <button />
                {/* <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={() => setIsVideoShown(false)}
                  >
                    Fermer
                  </button>
                </div> */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <div id="coaches" className="pt-16 bg-black lg:pt-24 z-20">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl ">
          <div className="relative">
            <h2 className="text-left text-3xl text-primary leading-8 font-medium tracking-tight sm:text-6xl pb-4">
              Nos Coachs
            </h2>
          </div>
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <img
                className="relative mx-auto rounded-lg"
                width={490}
                src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1630508058/super-coach/DSC01308_vxm2al.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <h3 className="text-2xl text-primary font-extrabold text-gray-200 tracking-tight sm:text-3xl mt-8 lg:mt-0">
                Steeve Louissaint
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
              <button
                className="mt-4 inline-flex items-center px-8 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-primary rounded-3xl"
                onClick={() => setIsVideoShown(true)}
              >
                Regardez la vidéo de Steeve
              </button>
            </div>
          </div>

          <div
            ref={ref}
            className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          >
            <div className="relative">
              <h3 className="text-2xl text-primary font-extrabold text-gray-200 tracking-tight sm:text-3xl ">
                Rebecca Louissaint
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
      <div id="testimonials" className="pt-16 bg-black lg:pt-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl ">
          <div className="relative">
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
      <div id="courses" className="pt-16 lg:pt-24 bg-black">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl ">
          <div className="relative">
            <h2 className="text-left text-3xl text-primary leading-8 font-medium tracking-tight sm:text-6xl pb-4">
              Cours collectifs
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center">
              <div
                className="mt-10 -mx-4 relative lg:mt-0 col-start-2 sm:col-start-1"
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
                  Le FULL BODY WORKOUT est une session de 60 minutes, conçue
                  pour raffermir la silhouette et brûler des calories. Chaque
                  lundi à 18h45, le/la coach vous accompagne à chaque seconde,
                  pour booster vos efforts ! Ouvert aux débutant·e·s et à tous
                  les niveaux, le FULL BODY WORKOUT c’est un rendez-vous
                  hebdomadaire, parfait pour tonifier le corps de la tête aux
                  pieds.
                </p>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h3 className="text-2xl text-primary font-extrabold text-gray-200 tracking-tight sm:text-3xl">
                  CARDIO STEP
                </h3>
                <p className="mt-3 text-lg text-gray-400">
                  Venez brûler un maximum de calories pendant notre cours CARDIO
                  STEP. Accrochez-vous car chaque mardi à 19 heures, on fait
                  fondre les kilos pendant 45minutes EXPLOSIVES! L&apos;objectif
                  ? Transpirer et se défouler... avec le sourire et du bon son.
                </p>
              </div>
              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <img
                  className="relative mx-auto rounded-lg"
                  width={490}
                  src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629896085/super-coach/cardio_bdjr50.png"
                  alt=""
                />
              </div>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
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
                  minutes hebdomadaires, parfaites pour combattre la cellulite
                  et se sculpter une silhouette so bootylicious !
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
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <img
                  className="relative mx-auto rounded-lg"
                  width={490}
                  src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1630466184/super-coach/speed_dating_c7g0um.png"
                  alt=""
                />
              </div>
              <div className="relative">
                <h3 className="text-2xl text-primary font-extrabold text-gray-200 tracking-tight sm:text-3xl">
                  SPEED DATING WORKOUT
                </h3>
                <p className="mt-3 text-lg text-gray-400">
                  Envie d’une l’alternative aux applications de renco- ntres,
                  truffées d’énergumènes ? N’en dites pas plus Nous avons ce
                  qu’il vous faut: Le SPEED DATING WORKOUT, c’est une occasion
                  unique de faire de nouvelles rencontres, dans une ambiance
                  propice aux connexions naturelles. Loin des relations
                  virtuelles, des conversations stériles et autres photos
                  trompeuses, le SPEED DATING WORKOUT réunit les célibataires
                  autour d’une activité fun, dans une ambiance détendue. Et qui
                  sait ? Peut- être que la magie opérera
                </p>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center pb-16">
              <div className="relative">
                <h3 className="text-2xl text-primary font-extrabold text-gray-200 tracking-tight sm:text-3xl">
                  AFTER WORKOUT
                </h3>
                <p className="mt-3 text-lg text-gray-400">
                  Fini les soirées impersonnelles à siroter des mojitos fadasses
                  sur la terrasse ! Pour terminer sa journée sur une note
                  originale et SUPER fun, l’AFTER WORKOUT vous invite à l’apéro
                  detox, suivi d’un workout endiablé dans une ambiance de feu !
                  L’AFTER WORKOUT est un concept inédit en Suisse mais surtout,
                  c’est définitivement une expérience à vivre entre amis ou
                  collègues.
                </p>
              </div>
              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <img
                  className="relative mx-auto rounded-lg"
                  width={490}
                  src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1630466180/super-coach/after_workout_xelhap.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            {courses.map((course) => (
              <MobilePrivateCourse
                key={course.title}
                title={course.title}
                text={course.text}
                url={course.url}
              />
            ))}
          </div>
        </div>
      </div>
      <div id="courses" className="pt-16 lg:pt-24 bg-black">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl ">
          <div className="relative">
            <h2 className="text-left text-3xl text-primary leading-8 font-medium tracking-tight sm:text-6xl pb-4">
              Cours privés
            </h2>
          </div>
          <h2 className="text-2xl mx-4 lg:text-4xl text-center text-gray-300 py-16 lg:py-24">
            Suivez un entraînement sur mesure qui s’adapte à votre condition
            physique, votre emploi du temps et vos objectifs.
          </h2>
          <img className="mx-auto hidden lg:block" src={StepsImage} alt="" />
          <img
            className="mx-auto block lg:hidden"
            src={StepsImageMobile}
            alt=""
          />
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
    z-index: 20;
    top: 50%;
    left: 50%;
    height: 300px;
    width: 1024px;
    margin-left: -512px;
    margin-top: -150px;
  }
`;

export default IndexPage;
