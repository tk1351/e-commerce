"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FOOTER_LINKS } from "@/app/constants";
import clsx from "clsx";

export const Footer: FC = () => {
  const pathname = usePathname();
  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 dark:border-neutral-700">
        <nav>
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.text}>
                <Link
                  href={link.href}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300",
                    { "text-neutral-200": pathname === link.href },
                  )}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>2024 Lorem,&nbsp;Inc. All rights reserved.</p>
          <hr className="mx-4 hidden h-4 w-px border-l border-neutral-400 md:inline-block" />
          <p>Designed in Foobar</p>
          <p className="md:ml-auto">
            <Link
              href="https://vercel.com"
              className="text-black dark:text-white"
            >
              Crafted by Vercel
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
