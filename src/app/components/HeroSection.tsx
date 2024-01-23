'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
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
                'Passionate of coding',
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='mb-6 text-[#ADB7BE] sm:text-lg lg:text-xl'>
            I am an experienced Frontend Developer with a focus on crafting
            dynamic interfaces using Vue.js. My expertise extends to PHP and
            Laravel, complemented by a wealth of knowledge in internet systems
            gained during my computer science studies. With a passion for
            creating intuitive and efficient solutions, I have been actively
            involved in the industry for eight years.
          </p>
          <div>
            <button className='mr-4 w-full rounded-full bg-white bg-gradient-to-br  from-pink-500 via-red-500 to-yellow-500 px-6 py-3 text-white hover:bg-slate-200 sm:w-fit'>
              Hire me
            </button>
            <button className='mt-3 w-full rounded-full bg-transparent bg-gradient-to-br  from-pink-500 via-red-500 to-yellow-500  px-1 py-1 text-white hover:bg-slate-800 sm:w-fit'>
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

export default HeroSection;
