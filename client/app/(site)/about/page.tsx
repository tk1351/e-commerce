import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">About</h1>
      <div className="mx-auto max-w-6xl text-base leading-7 text-black dark:text-white">
        <p>
          This website is built with
          <Link href="https://next.js.org/commerce" title="Next.js Commerce">
            Next.js Commerce
          </Link>
          , which is a ecomerce template for creating a headless Shopify
          storefront.&nbsp;
        </p>
        <p className="my-5">
          Support for real-world commerce features including:&nbsp;
        </p>
        <ul className="mb-5 mt-8 pl-6 ps-6">
          <li className="my-2 list-disc ps-1">Out of stocks</li>
          <li className="my-2 list-disc ps-1">Order history</li>
          <li className="my-2 list-disc ps-1">Order status</li>
          <li className="my-2 list-disc ps-1">
            Cross variant / option availability (aka. Amazon style)
          </li>
          <li className="my-2 list-disc ps-1">
            <Link
              href="https://demo.vercel.store/product/acme-webcam-cover"
              title="Example of a hidden product in Next.js Commerce"
              className="underline"
            >
              Hidden products
            </Link>
          </li>
          <li className="my-2 list-disc ps-1">
            Dynamically driven content and features via Shopify (ie.
            collections,menus,pages,etc.)
          </li>
          <li className="my-2 list-disc ps-1">
            Seamless and secure checkout via{" "}
            <Link
              href="https://www.shopify.com/checkout"
              title="Shopify Checkout"
              className="underline"
            >
              Shopify Checkout
            </Link>
          </li>
          <li className="my-2 list-disc ps-1">And more!</li>
        </ul>
        <p className="mb-5">
          This template also allows us to highlight newer Next.js features
          including:&nbsp;
        </p>
        <ul className="mb-5 mt-8 pl-6 ps-6">
          <li className="my-2 list-disc ps-1">Next.js App Router</li>
          <li className="my-2 list-disc ps-1">
            Optimized for SEO using Next.js&apos;s Metadata
          </li>
          <li className="my-2 list-disc ps-1">
            React Server Components (RSCs) and Suspense
          </li>
          <li className="my-2 list-disc ps-1">
            Server Actions&nbsp;for mutations
          </li>
          <li className="my-2 list-disc ps-1">Edge runtime</li>
          <li className="my-2 list-disc ps-1">
            New Next.js 13 fetching and caching paradigms
          </li>
          <li className="my-2 list-disc ps-1">Dynamic OG images</li>
          <li className="my-2 list-disc ps-1">Styling with Tailwind CSS</li>
          <li className="my-2 list-disc ps-1">
            Automatic light/dark mode based on system settings
          </li>
          <li className="my-2 list-disc ps-1">And more!</li>
        </ul>
      </div>
      <p className="text-sm italic">
        This document was last updated on 2024-07-10.
      </p>
    </>
  );
}
