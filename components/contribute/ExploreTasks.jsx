import * as React from "react"
import { ChevronDown, BookOpen, ArrowUpDown, Code, FileUp, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const filters = [
  { name: "ACTION", options: ["All"] },
  { name: "TYPE", options: ["All"] },
  { name: "SIZE", options: ["All"] },
  { name: "KNOWLEDGE", options: ["Any"] },
  { name: "MODULE", options: ["All"] },
]

const tasks = [
  { 
    icon: FileUp,
    title: "Upgrade to Xlupleg 2.7.0",
    tags: [{ name: "Xlupleg", color: "red" }, { name: "docker", color: "blue" }],
    badges: [{ icon: BookOpen, count: 3 }],
    actions: [{ icon: ArrowUpDown }]
  },
  { 
    icon: Pencil,
    title: 'Write the "Error Handling" Concept',
    tags: [{ name: "Xlupleg", color: "red" }, { name: "content", color: "blue" }],
    badges: [{ icon: BookOpen, count: 2 }],
    actions: [{ icon: Code }, { icon: "S" }]
  },
  { 
    icon: Pencil,
    title: 'Write the "Generic Data Types" Concept',
    tags: [{ name: "Xlupleg", color: "red" }, { name: "content", color: "blue" }],
    badges: [{ icon: BookOpen, count: 2 }],
    actions: [{ icon: Code }, { icon: "S" }]
  },
  { 
    icon: Pencil,
    title: 'Write the "Method Syntax" concept',
    tags: [{ name: "Xlupleg", color: "red" }, { name: "content", color: "blue" }],
    badges: [{ icon: BookOpen, count: 2 }],
    actions: [{ icon: Code }, { icon: "S" }]
  },
  { 
    icon: Pencil,
    title: 'Write the "Dictionaries" concept',
    tags: [{ name: "Xlupleg", color: "red" }, { name: "content", color: "blue" }],
    badges: [{ icon: BookOpen, count: 2 }],
    actions: [{ icon: Code }, { icon: "S" }]
  },
  { 
    icon: FileUp,
    title: "Update all concepts to refer to Xlupleg 2.7.0",
    tags: [{ name: "Xlupleg", color: "red" }],
    actions: [{ icon: Code }]
  },
  { 
    icon: FileUp,
    title: "Upgrade all exercises to Xlupleg 2.7.0",
    tags: [{ name: "Xlupleg", color: "red" }, { name: "content", color: "blue" }],
    actions: [{ icon: "L" }]
  },
]

export default function Component() {
  return (
    <div className=" p-4 space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="flex-grow md:flex-grow-0">
          <FileUp className="mr-2 h-4 w-4" /> All Tracks
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        {filters.map((filter) => (
          <DropdownMenu key={filter.name}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex-grow md:flex-grow-0">
                {filter.name}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {filter.options.map((option) => (
                <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h2 className="text-2xl font-bold">
          Showing 7 tasks <span className="text-muted-foreground font-normal">/ out of 30 possible tasks</span>
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="mt-2 sm:mt-0">
              Sort by most recent <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Most recent</DropdownMenuItem>
            <DropdownMenuItem>Oldest</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-2">
        {tasks.map((task, index) => (
          <Card key={index}>
            <CardContent className="flex items-center p-4">
              <task.icon className="mr-4 h-6 w-6 text-muted-foreground" />
              <div className="flex-grow">
                <h3 className="font-semibold">{task.title}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-muted-foreground mr-2">for</span>
                  {task.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className={`mr-1 bg-${tag.color}-100 text-${tag.color}-800 border-${tag.color}-200`}>
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {task.badges?.map((badge, badgeIndex) => (
                  <div key={badgeIndex} className="flex items-center">
                    <badge.icon className="h-4 w-4 text-primary mr-1" />
                    <span className="text-xs text-primary">{badge.count}</span>
                  </div>
                ))}
                {task.actions.map((action, actionIndex) => (
                  <Button key={actionIndex} variant="ghost" size="icon" className="h-8 w-8">
                    {typeof action.icon === 'string' ? (
                      <span className="text-xs">{action.icon}</span>
                    ) : (
                      <action.icon className="h-4 w-4" />
                    )}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}