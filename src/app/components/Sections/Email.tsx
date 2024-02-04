'use client';
import React, { useState } from 'react';
import GithubIcon from '../../../../public/github-icon.svg';
import LinkedinIcon from '../../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const Email: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Assuming your form fields are named 'email', 'subject', and 'message'
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    // Form the request for sending data to the server.
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);

      if (response.ok) {
        console.log('Message sent.');
        setEmailSubmitted(true);
      } else {
        // Handle non-200 responses
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Failed to send message', error);
    }
  };

  return (
    <section
      id='contact'
      className='relative my-12 grid gap-4 py-24 md:my-12 md:grid-cols-2'
    >
      <div className='from-primary-900 -translate-1/2 absolute -left-4 top-3/4 z-0 h-80 w-80 -translate-x-1/2 transform rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] to-transparent blur-lg'></div>
      <div className='z-10'>
        <h5 className='my-2 text-xl font-bold text-white'>
          Let&apos;s Connect
        </h5>
        <p className='mb-4 max-w-md text-[#ADB7BE]'>
          {' '}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link target='_blank' href='https://github.com/patryk-bejcer'>
            <Image src={GithubIcon} alt='Github Icon' />
          </Link>
          <Link
            target='_blank'
            href='https://www.linkedin.com/in/patryk-bejcer'
          >
            <Image src={LinkedinIcon} alt='Linkedin Icon' />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className='mt-2 text-sm text-green-500'>
            Email sent successfully!
          </p>
        ) : (
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='mb-2 block text-sm font-medium text-white'
              >
                Your email
              </label>
              <input
                name='email'
                type='email'
                id='email'
                required
                className='block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]'
                placeholder='jacob@google.com'
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='subject'
                className='mb-2 block text-sm font-medium text-white'
              >
                Subject
              </label>
              <input
                name='subject'
                type='text'
                id='subject'
                required
                className='block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]'
                placeholder='Just saying hi'
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='message'
                className='mb-2 block text-sm font-medium text-white'
              >
                Message
              </label>
              <textarea
                name='message'
                id='message'
                className='block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]'
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type='submit'
              className='bg-primary-500 hover:bg-primary-600 w-full rounded-lg px-5 py-2.5 font-medium text-white'
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Email;
