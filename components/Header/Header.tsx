"use client";

import * as React from "react";
import { Hamburger } from "./Hamburger";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Social } from "@/components/Social";

interface MenuItem {
  name: string;
  href?: string | null | undefined;
  children?: MenuItem[];
}

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
    children: [
      {
        name: "2023 Forum",
        href: "/forum/2023",
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

function MenuItemDropdown({
  item,
  onClick,
}: {
  item: MenuItem;
  onClick: () => void;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);

  const isOpen = open;

  let focusTimeout: ReturnType<typeof setTimeout> | null = null;

  const handleFocus = () => {
    focusTimeout = setTimeout(() => {
      setOpen(true);
    }, 150);
  };

  const handleMouseDown = () => {
    if (focusTimeout) {
      clearTimeout(focusTimeout);
    }
  };

  const handleMouseUp = () => {
    if (focusTimeout) {
      clearTimeout(focusTimeout);
    }
    setOpen((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      if (focusTimeout) {
        clearTimeout(focusTimeout);
      }
      setOpen((prev) => !prev);
    }
  };

  React.useEffect(() => {
    () => {
      if (focusTimeout) {
        clearTimeout(focusTimeout);
      }
    };
  }, [focusTimeout]);

  return (
    <div ref={ref} className="flex flex-col items-start">
      <button
        className="group inline-flex items-center hover:text-primary transition-colors"
        type="button"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={(e) => {
          if (!ref.current?.contains(e.relatedTarget)) {
            setOpen(false);
          }
        }}
        data-open={isOpen}
      >
        <span className="h6">{item.name}</span>
        <ChevronDownIcon className="w-5 h-5 shrink-0 ml-2 transition-transform group-data-[open=true]:rotate-180" />
      </button>
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
        }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        className="overflow-hidden"
      >
        <ul className="inline-flex flex-col pl-6 py-2 pr-2 mt-4">
          {item.children?.map((child) => (
            <li
              key={child.name}
              className="group mb-6 last:mb-0"
              // as="div"
            >
              <Link
                className="hover:text-primary transition-colors"
                href={child.href || "/"}
                onClick={onClick}
                onFocus={() => setOpen(true)}
                onBlur={(e) => {
                  if (!ref.current?.contains(e.relatedTarget)) {
                    setOpen(false);
                  }
                }}
                tabIndex={isOpen ? 0 : -1}
              >
                {child.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

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
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="bg-bg-5/10 fixed inset-0 z-10 backdrop-blur-md will-change-auto transition-opacity" />
          </Transition.Child>
          <Dialog.Panel className="absolute top-0 left-0 w-56 md:w-80 max-w-full h-full z-20">
            <div className="absolute top-0 left-0 w-full flex z-10">
              <div className="px-3 pt-2 md:px-8 md:pt-8 flex w-full">
                <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
            <Transition.Child
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
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="hover:text-primary transition-colors"
                            onClick={onClick}
                          >
                            <span className="h6">{item.name}</span>
                          </Link>
                        ) : (
                          <MenuItemDropdown item={item} onClick={onClick} />
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Social />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
}
