"use client"
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { ResponsiveLine } from "@nivo/line";

export default function Chart() {
  return (
    <div className="bg-white rounded-lg shadow-lg mt-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 p-6 text-center lg:text-left space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Monitor your Contribution
          </h2>
          <p className="text-gray-600">
            Front keeps your teams focused on driving revenue and retention.
            Each customer conversation is surrounded by both collaboration
            capabilities (so teams work together on complex problems in real
            time) and customer information (so every teammate is an expert on
            the customer they're communicating with). This keeps your team's
            attention on doing what technology can’t: ensuring every interaction
            strengthens the customer relationship.
          </p>
        </div>
        <div className="flex-1 p-6">
          <div className="bg-[#67CBA0] p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="space-x-2">
                <BarChartIcon className="text-white" />
              </div>
              <div className="flex items-center space-x-2">
            
                <CogIcon className="text-white" />
                <Avatar>
                  <AvatarImage
                    alt="User"
                    src="/placeholder.svg?height=32&width=32"
                  />
                </Avatar>
              </div>
            </div>
            <div className="text-white">
              <h3 className="text-lg font-semibold">
                Service Level Agreements
              </h3>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-sm">SLA achievement percentage</p>
                  <p className="text-xl font-bold">65.4%</p>
                </div>
                <div>
                  <p className="text-sm">Messages with SLAs</p>
                  <p className="text-xl font-bold">2,349</p>
                </div>
                <div>
                  <p className="text-sm">SLA breaches</p>
                  <p className="text-xl font-bold">239</p>
                </div>
                <div>
                  <p className="text-sm">Avg. SLA breach time</p>
                  <p className="text-xl font-bold">3h 31m</p>
                </div>
              </div>
              <div className="mt-6">
                <CurvedlineChart className="w-full h-[200px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function CircleEllipsisIcon(props) {
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
      <path d="M17 12h.01" />
      <path d="M12 12h.01" />
      <path d="M7 12h.01" />
    </svg>
  );
}

function CogIcon(props) {
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
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  );
}

function CurvedlineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
