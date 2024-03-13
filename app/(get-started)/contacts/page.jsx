import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="relative w-full max-w-4xl rounded-2xl bg-gradient-to-br from-[#fde68a] to-[#fca5a5] p-8">
        <h1 className="mb-6 text-center text-3xl font-bold">Get started</h1>
        <h2 className="mb-12 text-center text-xl font-semibold">
          Tell us a bit about you
        </h2>
        <form className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="first-name"
            >
              First name
            </label>
            <Input id="first-name" placeholder="Mark" />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="last-name"
            >
              Last name
            </label>
            <Input id="last-name" placeholder="Sikaundi" />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="work-email"
            >
              Work email
            </label>
            <Input id="work-email" placeholder="you@company.com" type="email" />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="job-title"
            >
              Job title
            </label>
            <Input id="job-title" placeholder="Director of Operations" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="company">
              Company
            </label>
            <Input id="company" placeholder="Your Company" />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="industry"
            >
              Industry
            </label>
            <Select>
              <SelectTrigger id="industry">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="tech">Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="company-size"
            >
              Company size
            </label>
            <Select>
              <SelectTrigger id="company-size">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="1-10">1-10</SelectItem>
                <SelectItem value="11-50">11-50</SelectItem>
                <SelectItem value="50-700">50-700</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="phone-number"
            >
              Phone number
            </label>
            <Input id="phone-number" placeholder="+1" type="tel" />
          </div>
          <div className="md:col-span-2 ">
            <Button className="text-md w-full rounded-full bg-black text-white hover:bg-orange-600 hover:text-black">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function PanelTopCloseIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m9 16 3-3 3 3" />
    </svg>
  );
}
