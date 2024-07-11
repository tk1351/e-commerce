"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { NAVBAR_LINKS } from "@/app/constants";

export const Navbar: FC = () => {
  const { data: session } = useSession();
  return (
    <header>
      <nav className="p-4 lg:p-6">
        <div className="flex w-full items-center">
          <div className="flex w-full">
            <Link
              href="/"
              className="flex items-center justify-center md:w-auto lg:mr-6"
            >
              <div className="flex size-[40px] flex-none items-center justify-center rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black">
                <Image
                  src="/assets/icon-144x144.png"
                  alt="e-commerce-logo"
                  width={32}
                  height={32}
                />
              </div>
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                E-Commerce
              </div>
            </Link>
            <ul className="gap-6 text-sm md:flex md:items-center">
              {NAVBAR_LINKS.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <form className="relative w-full lg:w-80 xl:w-full">
              <input
                type="text"
                placeholder="Search for products..."
                autoComplete="off"
                className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
                name="search"
              />
              <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
                <FaSearch size="1rem" />
              </div>
            </form>
          </div>
          <div className="flex items-center justify-end gap-6 md:w-1/3">
            {session === null ? (
              <Link href="/login">Login</Link>
            ) : (
              <button type="button" onClick={() => signOut()}>
                Logout
              </button>
            )}
            <button
              type="button"
              aria-label="Open cart"
              className="relative flex size-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
            >
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
