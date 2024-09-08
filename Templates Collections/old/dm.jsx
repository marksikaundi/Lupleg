"use client"
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'

export default function Component() {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navItems = [
    { name: 'Products', items: ['Item 1', 'Item 2', 'Item 3'] },
    { name: 'Developers', items: ['Docs', 'API', 'SDKs'] },
    { name: 'Resources', items: ['Blog', 'Case Studies', 'Webinars'] },
    { name: 'Pricing', items: [] },
  ]

  return (
    <header className="flex items-center justify-between px-6 py-2 top-0 sticky bg-white border-b border-gray-200">
      <div className="flex items-center">
      <Image src="/lupleg.svg" alt="Lupleg" width={150} height={100} />

        {/* <span className="text-xl font-bold">Lupleg</span> */}
      </div>
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <DropdownMenu key={item.name} onOpenChange={(open) => open ? setActiveDropdown(item.name) : setActiveDropdown(null)}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={`text-gray-600 hover:text-gray-900 ${activeDropdown === item.name ? 'text-gray-900' : ''}`}>
                {item.name}
                {item.items.length > 0 && <ChevronDown className="ml-1 h-4 w-4" />}
              </Button>
            </DropdownMenuTrigger>
            {item.items.length > 0 && (
              <DropdownMenuContent>
                {item.items.map((subItem) => (
                  <DropdownMenuItem key={subItem}>{subItem}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        ))}
      </nav>
      <Button className="bg-purple-600 hover:bg-purple-700 text-white">Sign in</Button>
    </header>
  )
}