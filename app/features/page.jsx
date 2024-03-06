// import { Button } from "@/components/ui/button";
import Chart from "@/components/FeaturesCards/Chart";

export default function Features() {
  return (
    <div className="bg-white px-4 py-12 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="md:leading-14 mt-2 text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl">
          Delight customers with a reimagined way to work together
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Front helps teams work in sync to be more responsive to customers —
          leaving no message behind.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <PlaneIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-5 text-lg font-medium leading-6 text-gray-900">
            Coordinate with ease
          </h3>
          <p className="mt-2 text-base leading-6 text-gray-500">
            You’ll be surprised at how much faster you can align with your team
            without starting another thread.
          </p>
        </div>
        <div>
          <LinkIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-5 text-lg font-medium leading-6 text-gray-900">
            Resolve inquiries effectively
          </h3>
          <p className="mt-2 text-base leading-6 text-gray-500">
            Your customers will tell the difference when your teams
            automatically know when to play their part.
          </p>
        </div>
        <div>
          <SmileIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-5 text-lg font-medium leading-6 text-gray-900">
            Make customers feel seen
          </h3>
          <p className="mt-2 text-base leading-6 text-gray-500">
            No need to leave customers hanging when teams can get up to speed
            when someone’s OOO or between shifts.
          </p>
        </div>
      </div>
      <Chart />
    </div>
  );
}

function LinkIcon(props) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function PlaneIcon(props) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function SmileIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}
