"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex flex-wrap sticky top-0  items-center justify-between bg-white p-6 dark:bg-gray-800">
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image src="/lupleg.svg" alt="Lupleg" width={150} height={100} />
        </Link>
      </div>
      <div className="hidden md:block">
        <nav className="flex space-x-6 text-lg ">
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="about-us"
          >
            About
          </Link>
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <button className="text-black hover:text-black dark:text-gray-300 dark:hover:text-gray-200 flex items-center outline-none">
                Trainings <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={closeDropdown}>
                <Link href="mentorships" className="w-full text-lg">
                  Mentorships
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={closeDropdown}>
                <Link href="academy" className="w-full text-lg">
                  Academy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={closeDropdown}>
                <Link href="challenge" className="w-full text-lg">
                  Challenges
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-black hover:text-black dark:text-gray-300 dark:hover:text-gray-200 flex items-center outline-none">
                Machine Learning <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="#" className="w-full text-lg">
                  TensorFlow Basics
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="w-full text-lg">
                  Pytorch for Beginner
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="w-full text-lg">
                  ML Challenges
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="premium"
          >
            Premium
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="books"
          >
            Books
          </Link>
        </nav>
      </div>
      <div className="hidden rounded p-3  md:block">
        <Button className="text-md font-semibold text-white py-6 bg-green-950 hover:bg-green-950">
          <Link href="https://app.lupleg.website">Register</Link>
        </Button>
      </div>

      {/* mobile view */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="about-us"
            >
              About
            </Link>
            {/* <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="challenge"
            >
              Challenges
            </Link> */}
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="mentorships"
            >
              Mentorships
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="academy"
            >
              Academy
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="premium"
            >
              Premium
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="books"
            >
              Books
            </Link>
            <div className="w-30 flex   items-center rounded-full">
              <Button className="text-md  text-white  bg-green-950 hover:bg-green-950">
                <Link href="https://app.lupleg.website">Register</Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
