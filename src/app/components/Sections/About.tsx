'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from '@/app/components/Shared/TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc space-y-2 pl-2'>
        <li>Vue.js / Nuxt.js</li>
        <li>Javascript</li>
        <li>HTML/CSS</li>
        <li>Typescript</li>
        <li>Tailwind.css</li>
        <li>Base of Angular/React</li>
        <li>Wordpress</li>
        <li>PHP</li>
        <li>Laravel</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <div className='experience-section'>
        <ul className='list-disc space-y-4 pl-2'>
          <li>
            <span>
              2020 - present <br />
            </span>
            <span className='font-bold'>Zendo | Front-end Developer</span>

            <div>
              Focus on Vue, Nuxt, JavaScript, TypeScript, Tailwind.css, CSS,
              SCSS, Storybook, JEST and Webpack. Development of front-end layer
              and key functionalities.
            </div>
          </li>
          <li>
            2018 - 2020
            <br />
            <span className='font-bold'>
              Massive Pixel Creation | Full-stack Developer
            </span>
            <span></span>
            <div>
              Worked with PHP, JS, MySQL, SCSS, Angular, WordPress, Vue, and
              custom web development for various clients.
            </div>
          </li>
          <li>
            <span>
              2015 - 2018
              <br />
            </span>
            <span className='font-bold'>
              Lumi Technology | Full-stack Developer
            </span>

            <div>
              Developed web applications with Laravel, created WordPress themes,
              and worked with Drupal, October CMS.
            </div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc space-y-4 pl-2'>
        <li>
          <span>
            2015 - 2019 <br />
          </span>
          <span className='font-bold'>
            Państwowa Akademia Nauk Stosowanych w Nysie
          </span>
          <div>Engineer&apos;s degree, Information Technology</div>
        </li>
        <li>
          <span>
            2010 - 2014 <br />
          </span>
          <span className='font-bold'>
            <div>Zespół Szkół w Głuchołazach IT specialist, Technical</div>
          </span>
        </li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState('skills');
  const [_, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
      <div className=' gap-8 py-8 sm:py-16 md:grid md:grid-cols-12 xl:gap-16'>
        <Image
          className='col-span-6'
          alt='About me image'
          src='/images/about-image.png'
          width={800}
          height={800}
        />
        <div className='col-span-5'>
          <h2 className='mb-4 mt-4  text-left text-4xl font-bold text-white md:mt-0'>
            About me
          </h2>
          <p className='text-base'>
            My journey in programming began in high school, cultivating a
            passion that guided me to pursue an IT degree at Państwowa Akademia
            Nauk Stosowanych w Nysie. Post-graduation, I joined Lumi Technology,
            where I sharpened my skills in Laravel and WordPress. Progressing to
            Massive Pixel Creation, I expanded my expertise across PHP, JS,
            MySQL, SCSS, and Angular, contributing to significant projects in
            the real estate domain. Most recently, at Zendo, I&apos;ve honed my
            proficiency in Vue.js, Nuxt, TypeScript, and Tailwind.css, focusing
            on developing intuitive and efficient front-end solutions. Each step
            in this journey has been a testament to my commitment to embracing
            and mastering the latest technologies in the evolving landscape of
            web development.
          </p>
          <div className='mt-8 flex flex-row justify-start'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
