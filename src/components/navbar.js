import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Button from './Button';
import LogoImage from '../images/logo.svg';
import clsx from 'clsx';

const navigation = [
  { name: 'Coach Lausanne', to: '/' },
  { name: 'Histoires de Succès', to: '/#témoignages' },
  { name: 'Cours collectifs', to: '/#cours-collectifs' },
  { name: 'Cours privés', to: '/#cours-privés' },
  { name: 'Tarifs', to: '/#prix' },
];

const isBrowser = typeof window !== 'undefined';

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const handleScroll = (value) => setIsFixed(value);

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener('scroll', handleScroll);
      if (window.scrollY === 0) {
        handleScroll(false);
      }
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);
  return (
    <Popover>
      <div
        className={clsx('z-50 mx-auto px-4 sm:px-6', {
          'fixed w-full bg-gradient-to-r from-primary to-red-500 top-0 lg:py-6 shadow-lg py-2':
            isFixed,
          'py-6': !isFixed,
        })}
      >
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/">
                <img className="w-auto h-12" src={LogoImage} alt="" />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={clsx('font-medium text-gray-200  hover:underline', {
                  'hover:text-primary': !isFixed,
                })}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex">
              <Link
                className="inline-flex items-center px-8 py-2 border border-transparent text-base font-medium rounded-lg text-primary bg-white rounded-3xl"
                to="/contact"
              >
                Contact
              </Link>
            </span>
          </div>
        </nav>
      </div>

      <Transition
        as={React.Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="fixed top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
        >
          <div className="rounded-lg shadow-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden p-4">
            <div className="pt-4 flex items-center justify-between">
              <div>
                <img className="h-12 w-auto ml-2" src={LogoImage} alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-6 pb-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-primary hover:bg-opacity-25"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Button internal to="/contact" text="Contact" />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
