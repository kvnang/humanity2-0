"use client";

import * as React from "react";
import { Hamburger } from "./Hamburger";
import Link from "next/link";
import { Dialog, Transition, Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const MENU_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    children: [
      {
        name: "About Us",
        href: "/about",
      },
      {
        name: "Advisory Board",
        href: "/about/advisory-board",
      },
    ],
  },
  {
    name: "Divisions",
    children: [
      {
        name: "Institute",
        href: "/divisions/institute",
      },
      {
        name: "Academy",
        href: "/divisions/academy",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex z-10">
        <div className="px-3 pt-1 md:px-8 md:pt-8 flex w-full">
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
      <Transition show={isOpen} as={React.Fragment}>
        <Dialog onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="bg-bg-8/10 fixed inset-0 z-10 backdrop-blur-md will-change-auto transition-opacity" />
          </Transition.Child>
          <Dialog.Panel className="absolute top-0 left-0 w-full z-20">
            <div className="absolute top-0 left-0 w-full flex z-10">
              <div className="px-3 pt-1 md:px-8 md:pt-8 flex w-full">
                <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 -translate-y-8"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-8"
            >
              <div className="absolute top-0 left-0 w-full z-0 bg-gray-900 pt-16">
                <div className="py-8 px-7 md:px-12 text-white">
                  <ul>
                    {MENU_ITEMS.map((item) => (
                      <li key={item.name} className="mb-4 last:mb-0">
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="hover:text-primary transition-colors"
                            onClick={onClick}
                          >
                            <span className="h6">{item.name}</span>
                          </Link>
                        ) : (
                          <Menu>
                            <Menu.Button className="group inline-flex items-center">
                              <span className="h6">{item.name}</span>
                              <ChevronDownIcon className="w-5 h-5 shrink-0 ml-2 transition-transform group-data-[headlessui-state=open]:rotate-180" />
                            </Menu.Button>
                            {item.children && (
                              <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                              >
                                <Menu.Items className="inline-flex flex-col pl-6 mt-4">
                                  {item.children.map((child) => (
                                    <Menu.Item
                                      key={child.name}
                                      className="group mb-4 last:mb-0"
                                      as="div"
                                    >
                                      <Link
                                        className="hover:text-primary transition-colors"
                                        href={child.href}
                                        onClick={onClick}
                                      >
                                        {child.name}
                                      </Link>
                                    </Menu.Item>
                                  ))}
                                </Menu.Items>
                              </Transition>
                            )}
                          </Menu>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Transition.Child>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
}
