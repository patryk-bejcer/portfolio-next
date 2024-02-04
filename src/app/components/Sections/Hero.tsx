'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const Hero = () => {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <section id='about' className='lg:py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-12 '>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-xl-4 mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl'>
            <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent'>
              Hello, I&apos;m{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Patrick',
                1000,
                'Web Developer',
                1000,
                'Passionate',
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='mb-6 text-[#ADB7BE] sm:text-lg lg:text-xl'>
            Hello! I&apos;m Patryk Bejcer, a Front-end Developer deeply versed
            in modern technologies, focusing on crafting dynamic interfaces with
            Vue.js and Nuxt.js. My expertise spans a wide array of tools, from
            PHP and Laravel to HTML/CSS and TypeScript, all the way to
            Tailwind.css and Wordpress. With solid foundations in Angular and
            React, I design solutions that are not only intuitive but also
            efficient, utilizing tools such as Figma, Photoshop, Jira, and
            Clickup to ensure the highest quality. With over eight years in the
            industry, I am passionate about creating coherent, functional, and
            aesthetically pleasing user experiences. Let&apos;s connect and
            collaborate!
          </p>
          <div>
            <Link
              href='/#contact'
              className='mr-4 w-full rounded-full bg-white bg-gradient-to-br from-pink-500 via-red-500  to-yellow-500 px-6 py-3 pb-4 text-white hover:bg-slate-200 sm:w-fit md:pb-0'
            >
              Hire me
            </Link>
            <button
              role='link'
              onClick={() => openInNewTab('https://patrykbejcer.com.pl/CV.pdf')}
              className='mt-3 w-full rounded-full bg-transparent bg-gradient-to-br  from-pink-500 via-red-500 to-yellow-500  px-1 py-1 text-white hover:bg-slate-800 sm:w-fit'
            >
              <span className='block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800'>
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className='col-span-1'></div>
        <div className='col-span-4 mt-4 place-self-center lg:mt-0'>
          <div className='relative h-[250px] w-[250px] rounded-full bg-[#181818] lg:h-[400px] lg:w-[400px]'>
            <Image
              src='/images/hero.png'
              alt='hero image'
              className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
