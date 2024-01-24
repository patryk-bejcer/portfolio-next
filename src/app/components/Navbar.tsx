'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from '@/app/components/NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from '@/app/components/MenuOverlay';
import { NavLinks } from '@/types/navigation';

const navLinks: NavLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed left-0 right-0 top-0 z-10 mx-auto border border-[#33353F] bg-[#121212] bg-opacity-100'>
      <div className='container mx-auto flex flex-wrap items-center justify-between px-4 py-2 lg:py-4'>
        <Link
          href={'/'}
          className='text-lg font-semibold text-white md:text-4xl'
        >
          patrykbejcer.com.pl
        </Link>

        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white'
            >
              <Bars3Icon className='h-5 w-5'></Bars3Icon>
            </button>
          ) : (
            <button>
              <button
                onClick={() => setNavbarOpen(false)}
                className='flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white'
              >
                <XMarkIcon className='h-5 w-5'></XMarkIcon>
              </button>
            </button>
          )}
        </div>

        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 sm:flex-row md:space-x-8 md:p-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
