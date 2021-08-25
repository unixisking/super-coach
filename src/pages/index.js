import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import Button from '../components/Button';
import Layout from '../components/layout';
import SEO from '../components/seo';

import HeroVideo from '../videos/hero-video.mp4';
import Features from '../components/Features';

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

function IndexPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  console.log(controls);

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

      <div className="bg-black bg-opacity-70 absolute w-full h-screen top-0 z-20" />
      <video autoPlay muted loop className=" w-full top-0 ">
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <motion.div
        transition={{ delay: 1, from: { y: -10000 }, to: { y: 0 } }}
        className="absolute z-30 text-center"
        style={{
          top: '50%',
          left: '50%',
          height: '300px',
          width: '1100px',
          marginLeft: '-550px',
          marginTop: '-150px',
        }}
      >
        <motion.h1
          className="text-6xl text-white"
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
        <p className="text-white mt-8">
          Nos séances sont tellement cool que 100% des personnes qui ont
          participé à une séance d’essai ont suivi des cours par la suite avec
          nos coachs.
        </p>
        <p className="text-white">
          N’attendez plus, réservez votre séance d’essai{' '}
          <span className="text-primary">gratuite</span> maintenant.
        </p>
        <Button
          to="/contact"
          style={{ marginTop: '1.5rem' }}
          text="Je réserve"
        />
      </motion.div>

      <div className="py-16 bg-black lg:py-24 border-b-2 border-gray-900">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl ">
          <div className="relative" style={{ width: 305 }}>
            <motion.h2
              ref={ref}
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
              Nos Coachs
            </motion.h2>
          </div>

          <div
            ref={ref}
            className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          >
            <motion.div
              className="relative"
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
                delay: 1.5,
              }}
            >
              <h3
                style={{
                  background: 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                className="text-2xl font-extrabold text-gray-200 tracking-tight sm:text-3xl"
              >
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
              <h3
                style={{
                  background: 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                className="text-2xl font-extrabold text-gray-200 tracking-tight sm:text-3xl mt-8"
              >
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
            </motion.div>
            <motion.div
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
                src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1629663986/super-coach/coaches_yu4pyl.jpg"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-black lg:py-24">
        <Features />
      </div>
    </Layout>
  );
}

export default IndexPage;
