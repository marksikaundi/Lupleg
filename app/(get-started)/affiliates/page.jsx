import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1">
        <div className="container py-6 space-y-6 text-gray-900 dark:text-gray-50">
          <div className="grid gap-4 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col gap-2 md:col-span-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Hostinger Hosting Platform
              </h1>
              <p className="text-base tracking-wide md:text-xl">
                Buy your domain through our Hostinger Affiliates link and get discount.
              </p>
            </div>
            <div className="flex items-start space-x-4 text-2xl font-bold md:justify-end md:space-x-2">
              <Link
                className="flex items-center space-x-2 rounded-lg bg-gray-900 px-3 py-2 text-sm text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                href="#"
              >
                Shop Now
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="space-y-2">
                <img
                  alt="Product 1"
                  className="aspect-[4/3] object-cover rounded-lg overflow-hidden"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <h3 className="font-semibold text-lg md:text-xl">
                  Stylish Sunglasses
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  UV protection
                </p>
                <h4 className="font-semibold text-base md:text-lg">$29.99</h4>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="space-y-2">
                <img
                  alt="Product 2"
                  className="aspect-[4/3] object-cover rounded-lg overflow-hidden"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <h3 className="font-semibold text-lg md:text-xl">
                  Leather Crossbody Bag
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Stylish and practical
                </p>
                <h4 className="font-semibold text-base md:text-lg">$49.99</h4>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="space-y-2">
                <img
                  alt="Product 3"
                  className="aspect-[4/3] object-cover rounded-lg overflow-hidden"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <h3 className="font-semibold text-lg md:text-xl">
                  Wireless Headphones
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  High-quality sound
                </p>
                <h4 className="font-semibold text-base md:text-lg">$79.99</h4>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="space-y-2">
                <img
                  alt="Product 4"
                  className="aspect-[4/3] object-cover rounded-lg overflow-hidden"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <h3 className="font-semibold text-lg md:text-xl">
                  Classic Wristwatch
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Timeless design
                </p>
                <h4 className="font-semibold text-base md:text-lg">$59.99</h4>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
