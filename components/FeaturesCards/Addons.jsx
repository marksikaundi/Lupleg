import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Component() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Personalize your plan with add-ons
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <Card className="bg-white rounded-lg shadow-md p-6">
          <MessageCircleIcon className="text-[#6e5bff] w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Dialpad SMS</h3>
          <p className="text-gray-700 mb-4">for $100/month</p>
          <p className="text-sm text-gray-600">
            Integrate Dialpad to text with customers right from your inbox.
          </p>
        </Card>
        <Card className="bg-white rounded-lg shadow-md p-6">
          <ChromeIcon className="text-[#4285f4] w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            Google Business Messages
          </h3>
          <p className="text-gray-700 mb-4">for $100/month</p>
          <p className="text-sm text-gray-600">
            Easily respond to customers who find your business profile on Google
            Search or Maps.
          </p>
        </Card>
        <Card className="bg-white rounded-lg shadow-md p-6">
          <SignalIcon className="text-[#26a5e4] w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Telegram</h3>
          <p className="text-gray-700 mb-4">for $100/month</p>
          <p className="text-sm text-gray-600">
            Connect a Telegram bot as a channel to manage conversations in
            Front.
          </p>
        </Card>
        <Card className="bg-white rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-1">
          <SmartphoneIcon className="text-[#25d366] w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
          <p className="text-gray-700 mb-4">Starting at $70/month</p>
          <p className="text-sm text-gray-600">
            Quickly respond to WhatsApp messages alongside other customer
            communication.
          </p>
        </Card>
      </div>
      <div className="text-center mt-8">
        <Link className="text-blue-600 hover:underline" href="#">
          Connect with our Technical team →
        </Link>
        <p className="text-xs text-gray-500 mt-2">
          Add-ons are currently only available on the Growth plan or higher
        </p>
      </div>
    </div>
  );
}

function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function MessageCircleIcon(props) {
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
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}

function SignalIcon(props) {
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
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  );
}

function SmartphoneIcon(props) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
