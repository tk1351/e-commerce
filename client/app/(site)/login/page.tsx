"use client";

import { SessionProvider, signIn, useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();
  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">Login</h1>
      <div className="mx-auto max-w-6xl text-base leading-7 text-black dark:text-white">
        <button type="button" onClick={() => signIn()}>
          Login
        </button>
      </div>
    </>
  );
}
