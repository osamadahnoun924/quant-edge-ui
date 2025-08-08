import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, UserGroupIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router';

interface MobileNavbarProps {
  links: Array<{ to: string; label: string }>;
}

export const MobileNavbar = ({ links }: MobileNavbarProps) => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div>
          <header>
            <div className="flex items-center justify-between p-6">
              <section>
                <Link to="/" className="flex cursor-pointer items-center">
                  <UserGroupIcon className="mr-4 size-12" />
                  <h1 className="text-xl font-bold">
                    Powered by Dahnoun Holdings
                  </h1>
                </Link>
              </section>

              <div className="flex items-center lg:hidden">
                <DisclosureButton>
                  {open ? (
                    <XMarkIcon className="size-6" />
                  ) : (
                    <Bars3Icon className="size-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </header>

          <DisclosurePanel className="px-6 lg:hidden">
            <ul className="flex flex-col space-y-1">
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
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
};
