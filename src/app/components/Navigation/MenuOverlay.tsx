import NavLink from './NavLink';
import { NavLinks } from '@/types/navigation';

type menuOverlayProps = {
  links: NavLinks;
};

const menuOverlay: React.FC<menuOverlayProps> = ({ links }) => {
  return (
    <ul className='flex flex-col items-center py-4 md:hidden'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title}></NavLink>
        </li>
      ))}
    </ul>
  );
};

export default menuOverlay;
