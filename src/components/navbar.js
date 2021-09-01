import React from 'react';
import { Link } from 'gatsby';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Button from './Button';

const navigation = [
  { name: 'Coach Lausanne', to: '/' },
  { name: 'Histoires de Succès', to: '#testimonials' },
  { name: 'Nos Cours', to: '#courses' },
  { name: 'Training Elites', to: '/elites' },
  { name: 'Tarifs', to: '#pricing' },
];

export default function Navbar() {
  return (
    <Popover>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <img
                  className="w-auto h-24"
                  src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1630507519/super-coach/logo-mobile_rq0gxy.png"
                  alt=""
                />
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
                className="font-medium text-gray-200 hover:text-primary hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex">
              <Button to="/contact" text="Contact" />
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
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden p-4">
            <div className="pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-20 w-20"
                  src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1630507519/super-coach/logo-mobile_rq0gxy.png"
                  alt=""
                />
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
              <Button to="/contact" text="Contact" />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
