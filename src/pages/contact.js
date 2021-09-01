import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RadioGroup } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import setMinutes from 'date-fns/setMinutes';
// import addDays from 'date-fns/addDays';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
// import { RiTimerFlashLine } from 'react-icons/ri';
// import { BsCalendar } from 'react-icons/bs';
// import clsx from 'clsx';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../components/navbar';

import WORK_HOURS from '../constants/work_hours';

const choices = [
  {
    name: 'Public access',
    description: 'This project would be available to anyone who has the link',
    value: 'public',
  },
  {
    name: 'Private to Project Members',
    description: 'Only members of this project would be able to access',
    value: 'private',
  },
];

const publicWorkouts = [
  {
    name: 'Full Body',
    url: '',
  },
  {
    name: 'Cardio Step',
    url: '',
  },
  {
    name: 'Booty Scuplt',
    url: '',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const schema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phone: Yup.string().required(),
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [workoutType, setWorkoutType] = useState('public');
  const [workout, setWorkout] = useState('Full Body');
  const [startDate, setStartDate] = useState(setMinutes(new Date(), 0));
  const [endDate, setEndDate] = useState(setMinutes(new Date(), 30));
  const offices = [
    {
      id: 1,
      city: 'Lausanne',
      address: ['Chemin Du Viaduc 12', '1008 Malley'],
    },
  ];
  const onSubmit = (data) => {
    if (workoutType === 'private') {
      console.log({ ...data, workoutType, startDate, endDate, hello: 'hello' });
    } else {
      console.log({ ...data, workoutType, workout, hey: 'hey' });
    }
  };
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <Navbar />
      <div className="min-h-screen">
        <main className="overflow-hidden">
          {/* Header */}
          <div className="mt-32">
            <div className="py-24">
              <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                <h1
                  style={{
                    background: 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    borderColor: '#dcb6bd',
                  }}
                  className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl w-full"
                >
                  MOTIVATION
                  <br />
                  <span className="text-right">DETERMINATION</span>
                  <br /> SOURIRE
                </h1>
                <p className="mt-6 text-xl text-gray-400 max-w-3xl">
                  Vel nunc non ut montes, viverra tempor. Proin lectus nibh
                  phasellus morbi non morbi. In elementum urna ut volutpat.
                  Sagittis et vel et fermentum amet consequat.
                </p>
              </div>
            </div>
          </div>

          {/* Contact section */}
          <section className="relative" aria-labelledby="contact-heading">
            <div className="absolute w-full h-1/2 " aria-hidden="true" />
            {/* Decorative dot pattern */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative bg-white shadow-xl">
                <h2 id="contact-heading" className="sr-only">
                  Contact us
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Contact information */}
                  <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-r from-primary to-red-500 sm:px-10 xl:p-12">
                    {/* Decorative angle backgrounds */}
                    <div
                      className="absolute inset-0 pointer-events-none sm:hidden"
                      aria-hidden="true"
                    >
                      <svg
                        className="absolute inset-0 w-full h-full"
                        width={343}
                        height={388}
                        viewBox="0 0 343 388"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                          fill="url(#linear1)"
                          fillOpacity=".1"
                        />
                        <defs>
                          <linearGradient
                            id="linear1"
                            x1="254.553"
                            y1="107.554"
                            x2="961.66"
                            y2="814.66"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fff" />
                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                      aria-hidden="true"
                    >
                      <svg
                        className="absolute inset-0 w-full h-full"
                        width={359}
                        height={339}
                        viewBox="0 0 359 339"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                          fill="url(#linear2)"
                          fillOpacity=".1"
                        />
                        <defs>
                          <linearGradient
                            id="linear2"
                            x1="192.553"
                            y1="28.553"
                            x2="899.66"
                            y2="735.66"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fff" />
                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                      aria-hidden="true"
                    >
                      <svg
                        className="absolute inset-0 w-full h-full"
                        width={160}
                        height={678}
                        viewBox="0 0 160 678"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                          fill="url(#linear3)"
                          fillOpacity=".1"
                        />
                        <defs>
                          <linearGradient
                            id="linear3"
                            x1="192.553"
                            y1="325.553"
                            x2="899.66"
                            y2="1032.66"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fff" />
                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      Contactez-nous
                    </h3>
                    <p className="mt-6 text-base text-teal-50 max-w-3xl">
                      Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                      volutpat massa dictumst amet. Sapien tortor lacus arcu.
                    </p>
                    <dl className="mt-8 space-y-6">
                      <a href="tel:+41796307553">
                        <dt>
                          <span className="sr-only">Phone number</span>
                        </dt>
                        <dd className="flex text-base text-teal-50">
                          <PhoneIcon
                            className="flex-shrink-0 w-6 h-6 text-teal-200"
                            aria-hidden="true"
                          />
                          <span className="ml-3">+41796307553</span>
                        </dd>
                      </a>
                      <a href="mailto:contact@super-coach.ch">
                        <dt>
                          <span className="sr-only">Email</span>
                        </dt>
                        <dd className="flex text-base text-teal-50">
                          <MailIcon
                            className="flex-shrink-0 w-6 h-6 text-teal-200"
                            aria-hidden="true"
                          />
                          <span className="ml-3">contact@super-coach.ch</span>
                        </dd>
                      </a>
                    </dl>
                    <ul role="list" className="mt-8 flex space-x-12">
                      <li>
                        <a
                          className="text-teal-200 hover:text-teal-100"
                          href="https://www.facebook.com/louissainttraining"
                        >
                          <span className="sr-only">Facebook</span>
                          <svg
                            className="w-7 h-7"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/louissainttraining/">
                          <svg
                            className="text-white w-7 h-7"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Contact form */}
                  <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      Inscrivez-vous et bénéficiez d&apos;une session gratuite
                    </h3>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                    >
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-warm-gray-900"
                        >
                          Prénom
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="firstName"
                            {...register('firstName', { required: true })}
                            id="first-name"
                            autoComplete="given-name"
                            className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-warm-gray-900"
                        >
                          Nom
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            {...register('lastName', { required: true })}
                            autoComplete="family-name"
                            className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-warm-gray-900"
                        >
                          Adresse e-mail
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            {...register('email', { required: true })}
                            type="email"
                            autoComplete="email"
                            className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-warm-gray-900"
                          >
                            Numéro de téléphone
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            {...register('phone', { required: true })}
                            autoComplete="tel"
                            className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                            aria-describedby="phone-optional"
                          />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <label htmlFor="first-name" className=""></label>
                        <RadioGroup
                          onChange={(value) => setWorkoutType(value)}
                          value={workoutType}
                        >
                          <RadioGroup.Label
                            htmlFor="workoutType"
                            className="block text-sm font-medium text-warm-gray-900 mb-4"
                          >
                            Voulez-vous une session de groupe ou une session
                            privée ?
                          </RadioGroup.Label>
                          <div className="bg-white rounded-md -space-y-px">
                            {choices.map((setting, settingIdx) => (
                              <RadioGroup.Option
                                key={setting.name}
                                value={setting.value}
                                className={({ checked }) =>
                                  classNames(
                                    settingIdx === 0
                                      ? 'rounded-tl-md rounded-tr-md'
                                      : '',
                                    settingIdx === choices.length - 1
                                      ? 'rounded-bl-md rounded-br-md'
                                      : '',
                                    checked
                                      ? 'bg-primary bg-opacity-10 border-primary z-10'
                                      : 'border-gray-200',
                                    'relative border p-4 flex cursor-pointer focus:outline-none',
                                  )
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        checked
                                          ? 'bg-primary border-transparent'
                                          : 'bg-white border-gray-300',
                                        active
                                          ? 'ring-2 ring-offset-2 ring-primary'
                                          : '',
                                        'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center',
                                      )}
                                      aria-hidden="true"
                                    >
                                      <span className="rounded-full bg-white w-1.5 h-1.5" />
                                    </span>
                                    <div className="ml-3 flex flex-col">
                                      <RadioGroup.Label
                                        as="span"
                                        className={classNames(
                                          checked
                                            ? 'text-primary'
                                            : 'text-gray-900',
                                          'block text-sm font-medium',
                                        )}
                                      >
                                        {setting.name}
                                      </RadioGroup.Label>
                                      <RadioGroup.Description
                                        as="span"
                                        className={classNames(
                                          checked
                                            ? 'text-primary'
                                            : 'text-gray-500',
                                          'block text-sm',
                                        )}
                                      >
                                        {setting.value}
                                      </RadioGroup.Description>
                                    </div>
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                      {workoutType === 'public' ? (
                        <div className="col-span-2">
                          <RadioGroup
                            value={workout}
                            onChange={(value) => setWorkout(value)}
                          >
                            <RadioGroup.Label>
                              À quel type d&apos;entraînement voulez-vous vous
                              inscrire ?
                            </RadioGroup.Label>
                            <div className="bg-white rounded-md -space-y-px mt-4">
                              {publicWorkouts.map((workout, idx) => (
                                <RadioGroup.Option
                                  key={workout.name}
                                  value={workout.name}
                                  className={({ checked }) =>
                                    classNames(
                                      idx === 0
                                        ? 'rounded-tl-md rounded-tr-md'
                                        : '',
                                      idx === publicWorkouts.length - 1
                                        ? 'rounded-bl-md rounded-br-md'
                                        : '',
                                      checked
                                        ? 'bg-primary bg-opacity-10 border-primary z-10'
                                        : 'border-gray-200',
                                      'relative border p-4 flex cursor-pointer focus:outline-none',
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          checked
                                            ? 'bg-primary border-transparent'
                                            : 'bg-white border-gray-300',
                                          active
                                            ? 'ring-2 ring-offset-2 ring-primary'
                                            : '',
                                          'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center',
                                        )}
                                        aria-hidden="true"
                                      >
                                        <span className="rounded-full bg-white w-1.5 h-1.5" />
                                      </span>
                                      <div className="ml-3 flex flex-col">
                                        <RadioGroup.Label
                                          as="span"
                                          className={classNames(
                                            checked
                                              ? 'text-primary'
                                              : 'text-gray-900',
                                            'block text-sm font-medium',
                                          )}
                                        >
                                          {workout.name}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                          as="span"
                                          className={classNames(
                                            checked
                                              ? 'text-primary'
                                              : 'text-gray-500',
                                            'block text-sm',
                                          )}
                                        >
                                          {workout.description}
                                        </RadioGroup.Description>
                                      </div>
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      ) : (
                        <>
                          <div className="relative z-20">
                            <div className="flex justify-between">
                              <label
                                htmlFor="date"
                                className="block text-sm font-medium text-warm-gray-900"
                              >
                                Start Date
                              </label>
                            </div>
                            <DatePicker
                              showTimeSelect
                              dateFormat="MMMM d, yyyy h:mm aa"
                              className="mt-4 border-primary z-30 w-full"
                              id="date"
                              value={startDate}
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              includeTimes={WORK_HOURS.slice(0, -1)}
                              // minDate={new Date()}
                              // minTime={new Date().getTime()}
                              // maxTime={addDays(new Date(), 1)}
                              // maxDate={addDays(new Date(), 90)}
                            />
                          </div>
                          <div className="relative z-20">
                            <div className="flex justify-between">
                              <label
                                htmlFor="date"
                                className="block text-sm font-medium text-warm-gray-900"
                              >
                                end Date
                              </label>
                            </div>
                            <DatePicker
                              showTimeSelect
                              dateFormat="MMMM d, yyyy h:mm aa"
                              className="mt-4 border-primary z-30 w-full"
                              id="date"
                              value={endDate}
                              selected={endDate}
                              onChange={(date) => setEndDate(date)}
                              // minDate={new Date()}
                              // maxDate={addDays(new Date(), 90)}
                              includeTimes={WORK_HOURS}
                            />
                          </div>
                        </>
                      )}

                      {/* <div className="sm:col-span-2">
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-warm-gray-900"
                        >
                          Subject
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div> */}
                      {/* <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-warm-gray-900"
                          >
                            Message
                          </label>
                          <span
                            id="message-max"
                            className="text-sm text-warm-gray-500"
                          >
                            Max. 500 characters
                          </span>
                        </div>
                        <div className="mt-1">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md"
                            aria-describedby="message-max"
                            defaultValue={''}
                          />
                        </div>
                      </div> */}
                      <div className="sm:col-span-2 sm:flex sm:justify-end">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          type="submit"
                          className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary rounded-3xl focus:outline-none sm:w-auto"
                        >
                          Envoyer
                        </motion.button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact grid */}
          <section aria-labelledby="offices-heading">
            <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
              <h2
                id="offices-heading"
                className="text-3xl font-extrabold text-gray-300"
              >
                Our offices
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {offices.map((office) => (
                  <div key={office.id}>
                    <h3 className="text-lg font-medium text-gray-300">
                      {office.city}
                    </h3>
                    <p className="mt-2 text-base text-gray-400">
                      {office.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          'warm-gray': colors.warmGray,
          teal: colors.teal,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
