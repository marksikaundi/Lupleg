"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Component() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navItems = [
    {
      name: "Programs",
      link: "/programs",
      items: [],
    },
    { name: "Challenges", link: "/challenges/frontend", items: [] },

    { name: "Contributing", link: "/contributing", items: [] },
    {
      name: "Resources",
      link: "resources",
      items: [],
    },
    { name: "Pricing", link: "/premium", items: [] },
  ];

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="flex items-center sticky top-0 justify-between  px-6 py-4 bg-white border-b border-gray-200">
      <Link href="/" className="flex items-center">
        <Image src="/lupleg.svg" alt="Lupleg Logo" width={150} height={100} />
      </Link>
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <DropdownMenu
            key={item.name}
            onOpenChange={(open) =>
              open ? setActiveDropdown(item.name) : setActiveDropdown(null)
            }
          >
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`text-gray-600 hover:text-gray-900 ${
                  activeDropdown === item.name ? "text-gray-900" : ""
                }`}
              >
                <Link href={item.link} className="flex items-center">
                  {item.name}
                  {item.items.length > 0 && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>
              </Button>
            </DropdownMenuTrigger>
            {item.items.length > 0 && (
              <DropdownMenuContent>
                {item.items.map((subItem) => (
                  <DropdownMenuItem key={subItem.name}>
                    <Link href={subItem.link} className="w-full">
                      {subItem.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        {/* <Link href="https://mentor.lupleg.org/" className="hidden md:block"> TODO */}
        <Link href="/programs" className="hidden md:block">
          <Button className="bg-[#2D1537] hover:bg-[#2D1537] text-white">
            Get Started
          </Button>
        </Link>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {navItems.map((item) => (
                  <AccordionItem value={item.name} key={item.name}>
                    {item.items.length > 0 ? (
                      <>
                        <AccordionTrigger>{item.name}</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2">
                            {item.items.map((subItem) => (
                              <Link
                                href={subItem.link}
                                key={subItem.name}
                                className="text-sm text-gray-600 hover:text-gray-900"
                                onClick={handleLinkClick}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </>
                    ) : (
                      <Link
                        href={item.link}
                        className="py-4 text-sm font-medium text-gray-600 hover:text-gray-900"
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </Link>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
              <Link href="/programs">
                <Button
                  className="w-full bg-[#2D1537] hover:bg-[#2D1537] text-white"
                  onClick={handleLinkClick}
                >
                  Get Started
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
