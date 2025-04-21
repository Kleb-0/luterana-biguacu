"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Início", icon: "/house.svg" },
  { href: "/quemsomos", label: "Quem somos?", icon: "/info.svg" },
  { href: "/avisos", label: "Avisos", icon: "/megaphone.svg" },
  { href: "/contatos", label: "Contatos", icon: "/users.svg" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <div className="flex justify-between">
        <nav className="flex flex-col gap-1 text-neutral-100 pl-6 pt-2 sm:text-base text-xl max-w-fit">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href} className="hover:underline pb-2">
                <Link
                  onClick={() => setIsOpen(false)}
                  className="flex"
                  href={item.href}
                >
                  <Image
                    className="pr-2"
                    src={item.icon}
                    alt={item.label}
                    width={33}
                    height={33}
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-start">
          <button onClick={() => setIsOpen(false)}>
            <Image
              src="/x.svg"
              alt="Close"
              width={40}
              height={40}
              className="pr-0.5 pt-2"
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-14 bg-neutral-950 text-neutral-100 flex items-center justify-between sm:text-base text-sm pl-4 pr-4 w-screen">
      <div className="flex-shrink-0">
        <Image
          src="/logo-luterana.png"
          alt="logo luterana"
          width={50}
          height={50}
        />
      </div>

      <nav className="hidden sm:flex justify-center flex-1">
        <ul className="flex gap-3 sm:gap-6 items-center">
          {navItems.map((item) => (
            <li key={item.href} className="hover:underline hover:scale-105">
              <Link className="flex" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className="sm:hidden" onClick={() => setIsOpen(true)}>
        <Image src="/align-right.svg" alt="menu" width={35} height={35} />
      </button>
    </div>
  );
}
