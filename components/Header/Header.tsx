"use client";

import * as React from "react";
import { Hamburger } from "./Hamburger";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Social } from "@/components/Social";
import { MenuItem } from "./MenuItem";

const MENU_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
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
    href: "/divisions",
    children: [
      {
        name: "Impact",
        href: "/divisions/impact",
      },
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
    name: "Forum",
    href: "/forum",
    children: [
      {
        name: "2024 Forum",
        href: "/forum/2024",
      },
      {
        name: "2022 Forum",
        href: "/forum/2022",
      },
      {
        name: "2019 Forum",
        href: "/forum/2019",
      },
      {
        name: "2018 Forum",
        href: "/forum/2018",
      },
    ],
  },
  {
    name: "Media",
    href: "/media",
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
        <div className="px-3 pt-2 md:px-8 md:pt-8 flex w-full">
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
      <Transition show={isOpen} as={React.Fragment}>
        <Dialog onClose={() => setIsOpen(false)}>
          <TransitionChild
            as={React.Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-bg-5/10 fixed inset-0 z-10 backdrop-blur-md will-change-auto transition-opacity" />
          </TransitionChild>
          <DialogPanel className="fixed top-0 left-0 w-56 md:w-80 max-w-full h-full z-20">
            <div className="absolute top-0 left-0 w-full flex z-10">
              <div className="px-3 pt-2 md:px-8 md:pt-8 flex w-full">
                <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
            <TransitionChild
              as={React.Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 -translate-x-8"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-x-8"
            >
              <div className="absolute top-0 left-0 w-full h-full z-0 pt-16 bg-gray-900">
                <div className="pt-2 pb-8 px-7 md:px-12 md:pt-8 text-white max-h-full overflow-y-auto">
                  <ul>
                    {MENU_ITEMS.map((item) => (
                      <li key={item.name} className="mb-6 last:mb-0">
                        <React.Suspense fallback={null}>
                          <MenuItem item={item} onClick={onClick} />
                        </React.Suspense>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TransitionChild>
          </DialogPanel>
        </Dialog>
      </Transition>
    </>
  );
}
