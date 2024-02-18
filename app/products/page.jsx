import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="bg-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Collaboration and context
            </h1>
            <div className="space-y-6">
              <div className="p-6 border-l-4 border-black">
                <h2 className="text-2xl font-semibold mb-4">Draft responses together in Front</h2>
                <p className="text-lg">
                  Gone are the days of "Can someone start a new doc?" With shared drafts directly in Front, teams can
                  collaborate on customer responses without using a separate tool.
                </p>
              </div>
              <div className="p-6 border-l-4 border-black">
                <h2 className="text-2xl font-semibold mb-4">Loop in teammates without endless threads</h2>
              </div>
              <div className="p-6 border-l-4 border-black">
                <h2 className="text-2xl font-semibold mb-4">
                  See customer history and data alongside the conversation
                </h2>
              </div>
            </div>
          </div>
          <div className="bg-[#f1f8e9] p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Avatar>
                <AvatarImage alt="Mark Sikaundi" src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="font-semibold">Mark Sikaundi</p>
                <div className="flex items-center space-x-2">
                  <ReplyIcon className="text-gray-500" />
                  <MoreVerticalIcon className="text-gray-500" />
                </div>
              </div>
            </div>
            <p className="text-lg">Hi there, I was supposed to get my shipment yesterday. When will it arrive?</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Collaboration and context
            </h1>
            <div className="space-y-6">
              <div className="p-6 border-l-4 border-black">
                <h2 className="text-2xl font-semibold mb-4">Draft responses together in Front</h2>
                <p className="text-lg">
                  Gone are the days of "Can someone start a new doc?" With shared drafts directly in Front, teams can
                  collaborate on customer responses without using a separate tool.
                </p>
              </div>
              <div className="p-6 border-l-4 border-black">
                <h2 className="text-2xl font-semibold mb-4">Loop in teammates without endless threads</h2>
              </div>
              <div className="p-6 border-l-4 border-black">
                <h2 className="text-2xl font-semibold mb-4">
                  See customer history and data alongside the conversation
                </h2>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="bg-[#f1f8e9] p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Avatar>
                <AvatarImage alt="Mark Sikaundi" src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="font-semibold">Mark Sikaundi</p>
                <div className="flex items-center space-x-2">
                  <ReplyIcon className="text-gray-500" />
                  <MoreVerticalIcon className="text-gray-500" />
                </div>
              </div>
            </div>
            <p className="text-lg">Hi there, I was supposed to get my shipment yesterday. When will it arrive?</p>
          </div>
        </div>
      </div>
      {/* Third */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Collaboration and context
            </h1>
            <div className="space-y-6">
              <div className="p-6 border-l-4 border-black">
                <h2 className="text-2xl font-semibold mb-4">Draft responses together in Front</h2>
                <p className="text-lg">
                  Gone are the days of "Can someone start a new doc?" With shared drafts directly in Front, teams can
                  collaborate on customer responses without using a separate tool.
                </p>
              </div>
              <div className="p-6 border-l-4 border-black">
                <h2 className="text-2xl font-semibold mb-4">Loop in teammates without endless threads</h2>
              </div>
              <div className="p-6 border-l-4 border-black">
                <h2 className="text-2xl font-semibold mb-4">
                  See customer history and data alongside the conversation
                </h2>
              </div>
            </div>
          </div>
          <div className="bg-[#f1f8e9] p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Avatar>
                <AvatarImage alt="Mark Sikaundi" src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="font-semibold">Mark Sikaundi</p>
                <div className="flex items-center space-x-2">
                  <ReplyIcon className="text-gray-500" />
                  <MoreVerticalIcon className="text-gray-500" />
                </div>
              </div>
            </div>
            <p className="text-lg">Hi there, I was supposed to get my shipment yesterday. When will it arrive?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function MoreVerticalIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  )
}


function ReplyIcon(props) {
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
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  )
}
