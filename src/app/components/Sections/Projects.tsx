'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from '@/app/components/Shared/ProjectCard';
import ProjectTag from '@/app/components/Shared/ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Decor-Cake (Wordpress + React)',
    description: 'Confectionery accessories store',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'GoToParty.pl (Laravel + Vue.js)',
    description: 'Search portal for events',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/patryk-bejcer/goparty',
    previewUrl: 'https://decor-cake.pl/',
  },
  {
    id: 3,
    title: 'Cupra Layout (Nuxt.js)',
    description: 'Layout of Cupra created with Nuxt.js',
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/patryk-bejcer/cupra-layout-nuxt',
    previewUrl: 'https://cukierniakulpa.pl/',
  },

  {
    id: 4,
    title: 'Cukiernia Kulpa (Wordpress)',
    description: 'Backery shop with cakes',
    image: '/images/projects/4.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'Diodes loop (C++ + Arduino)',
    description: '',
    image: '/images/projects/5.png',
    tag: ['All', 'Web'],
    gitUrl:
      'https://github.com/patryk-bejcer/binary-octal-ignition-of-diodes-arduino',
    previewUrl: '/',
  },
];

const Projects = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='projects'>
      <h2 className='mb-8 mt-4 text-center text-4xl font-bold text-white md:mb-12'>
        My Projects
      </h2>
      <div className='flex flex-row items-center justify-center gap-2 py-6 text-white'>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Web'
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Mobile'
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className='grid gap-8 md:grid-cols-3 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;