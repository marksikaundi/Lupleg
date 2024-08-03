import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <header className="w-full bg-[#122E17] p-8 text-white text-center">
        <h1 className="text-5xl font-bold">REGISTRATION OPEN</h1>
        <div className="flex justify-center items-center mt-4">
          <span className="text-xl font-semibold">
            OCTOBER 30, 2024 | WORLD WIDE
          </span>
        </div>
      </header>
      <main className="w-full max-w-2xl bg-white p-8 my-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Personal Information</h2>
        <p className="text-center text-muted-foreground mb-8">
          Please fill out the form below to register for the mentorship program
          and get started. We look forward to see you in the program.
        </p>
        <hr className="my-8" />
        <form className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="first-name"
              className="text-sm font-medium text-red-500"
            >
              * First Name
            </Label>
            <Input id="first-name" placeholder="Enter your first name" />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="last-name"
              className="text-sm font-medium text-red-500"
            >
              * Last Name
            </Label>
            <Input id="last-name" placeholder="Enter your last name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-red-500">
              * Email
            </Label>
            <Input id="email" placeholder="Enter your email" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-red-500">
              * Phone Number
            </Label>
            <Input id="phone-number" placeholder="Enter your phone number" />
          </div>

          <div className="space-y-2">
            <p>
              Before, submition agree to{" "}
              <Link href="/terms" className="text-orange-600">
                terms and conditions
              </Link>{" "}
            </p>
          </div>

          <Button className="w-full mt-4 bg-green-950 hover:bg-green-950">
            Submit
          </Button>
        </form>
      </main>
    </div>
  );
}
