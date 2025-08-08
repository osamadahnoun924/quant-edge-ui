import { UserGroupIcon } from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router';

interface DesktopNavbarProps {
  links: Array<{ to: string; label: string }>;
}

export const DesktopNavbar = ({ links }: DesktopNavbarProps) => {
  return (
    <header className="flex items-center justify-between p-10">
      <section>
        <Link to="/" className="flex cursor-pointer items-center">
          <UserGroupIcon className="mr-4 size-10 xl:size-12" />
          <h1 className="text-lg font-bold xl:text-xl">
            Powered by Dahnoun Holdings
          </h1>
        </Link>
      </section>
      <nav>
        <ul className="flex space-x-10 text-xl xl:text-2xl">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `cursor-pointer hover:font-bold ${isActive ? 'font-bold' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
