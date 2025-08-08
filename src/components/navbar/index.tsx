import { DesktopNavbar } from './Desktop';
import { MobileNavbar } from './Mobile';

const links = [
  { to: '/contact-us', label: 'Contact us' },
  { to: '/about', label: 'About' },
  { to: '/tutorial', label: 'Tutorial' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/login', label: 'Log in' },
];

export const Navbar = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileNavbar links={links} />
      </div>
      <div className="hidden md:block">
        <DesktopNavbar links={links} />
      </div>
    </>
  );
};
