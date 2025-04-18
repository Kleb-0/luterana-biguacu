"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <div className="flex justify-between">
        <nav className="flex flex-col gap-1 text-neutral-100 pl-6 pt-2 sm:text-base text-xl max-w-fit">
          <ul className="flex flex-col">
            <li className="hover:underline">
              <Link className="flex" href="/">
                <Image
                  className="pr-2"
                  src="/house.svg"
                  alt="Início"
                  width={33}
                  height={33}
                />
                Início
              </Link>
            </li>
            <li className="hover:underline">
              <Link className="flex" href="/quemsomos">
                <Image
                  className="pr-2"
                  src="/info.svg"
                  alt="Quem somos?"
                  width={33}
                  height={33}
                />
                Quem somos?
              </Link>
            </li>
            <li className="hover:underline">
              <Link className="flex" href="/avisos">
                <Image
                  className="pr-2"
                  src="/megaphone.svg"
                  alt="Avisos"
                  width={33}
                  height={33}
                />
                Avisos
              </Link>
            </li>
            <li className="hover:underline">
              <Link className="flex" href="/contatos">
                <Image
                  className="pr-2"
                  src="/users.svg"
                  alt="Contatos"
                  width={33}
                  height={33}
                />
                Contatos
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-start">
          <button onClick={() => setIsOpen(false)}>
            <Image
              src="/x.svg"
              alt="Close"
              width={60}
              height={60}
              className="pr-4 pt-2"
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-14 bg-neutral-950 text-neutral-100 flex justify-between items-center sm:text-base text-sm pl-1 pr-4 w-screen">
      <Image
        src="/logo-luterana.png"
        alt="logo luterana"
        width={50}
        height={50}
      />
      <nav className="hidden sm:flex justify-around w-full">
        <ul className="flex gap-3 sm:gap-6 items-center">
          <li className="hover:underline">
            <Link className="flex" href="/">
              Início
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/quemsomos">Quem somos?</Link>
          </li>
          <li className="hover:underline">
            <Link href="/avisos">Avisos</Link>
          </li>
          <li className="hover:underline">
            <Link href="/contatos">Contatos</Link>
          </li>
        </ul>
      </nav>
      <button className="sm:hidden" onClick={() => setIsOpen(true)}>
        <Image src="/align-right.svg" alt="menu" width={35} height={35} />
      </button>
    </div>
  );
}
