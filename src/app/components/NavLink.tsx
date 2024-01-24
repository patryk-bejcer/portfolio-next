import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      className='block rounded py-2 pl-3 pr-4 text-[#ADB7BE] hover:text-white sm:text-xl md:p-0'
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavLink;
