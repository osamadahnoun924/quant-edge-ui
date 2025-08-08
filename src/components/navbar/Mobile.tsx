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
            <div className="flex flex-col items-center justify-between p-4 sm:flex-row sm:p-6">
              <section>
                <Link
                  to="/"
                  className="flex cursor-pointer flex-col items-center sm:flex-row"
                >
                  <UserGroupIcon className="mb-2 size-8 sm:mr-4 sm:mb-0 sm:size-12" />
                  <h1 className="text-center text-lg font-bold sm:text-xl">
                    Powered by Dahnoun Holdings
                  </h1>
                </Link>
              </section>

              <div className="mt-2 flex items-center sm:mt-0 lg:hidden">
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
