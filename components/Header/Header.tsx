"use client";

import * as React from "react";
import { Hamburger } from "./Hamburger";
import Link from "next/link";
import clsx from "clsx";
import { Dialog, Transition } from "@headlessui/react";

export function Header() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full flex">
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
                    <li>
                      <Link
                        href="/"
                        className="hover:text-primary transition-colors"
                      >
                        <span className="h6">Home</span>
                      </Link>
                    </li>
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
