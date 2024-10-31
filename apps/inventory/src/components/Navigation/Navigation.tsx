import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { NavigationLinks } from "../../config/NavigationConfig";
import { Badge } from "../Badge/Badge";
import { useProducts } from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import { ToggleTheme } from '../ToggleTheme/ToggleTheme';


export const Navigation = () => {
  const { cartProductsItems } = useProducts();
  return (
    <Disclosure as="nav" className="dark:bg-gray-800/90 bg-gray-200/90 sticky top-0 left-0 z-50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {NavigationLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium aria-[current=page]:bg-gray-900 aria-[current=page]:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
            <Link
              to="/cart"
              className="relative w-fit h-fit text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              {cartProductsItems >= 1 && <Badge>{cartProductsItems}</Badge>}
              <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
            </Link>
            <ToggleTheme />
            {/* Profile dropdown */}
          </div>
        </div>
      </div>
    </Disclosure>
  )
}

export function ProfileDropdown() {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="h-8 w-8 rounded-full"
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MenuItem>
          <a href="/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
            Your Profile
          </a>
        </MenuItem>
        <MenuItem>
          <a href="/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a href="/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
            Sign out
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
