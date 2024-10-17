"use client";

import { useState } from "react";
import { ChevronRight, Github, Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const tutorials = [
  {
    id: 1,
    title: 'Fixing "X Is Not Assignable To Y"',
    content:
      "This error occurs when you try to assign a value to a variable or parameter of an incompatible type. To fix this, ensure that the types match or use type assertions when necessary.",
    code: `let x: number = 5;
let y: string = x; // Error: Type 'number' is not assignable to type 'string'

// Fix:
let z: string = x.toString(); // Convert number to string`,
  },
  {
    id: 2,
    title: 'Fixing "Property Does Not Exist On Type"',
    content:
      "This error happens when you try to access a property that doesn't exist on the given type. To resolve this, make sure you're using the correct property names or extend the type to include the missing property.",
    code: `interface Person {
  name: string;
}

let person: Person = { name: "Alice" };
console.log(person.age); // Error: Property 'age' does not exist on type 'Person'

// Fix:
interface PersonWithAge extends Person {
  age?: number;
}

let personWithAge: PersonWithAge = { name: "Alice", age: 30 };
console.log(personWithAge.age); // OK`,
  },
  {
    id: 3,
    title: 'Fixing "X is Possibly Null Or Undefined"',
    content:
      "This error occurs when you try to use a value that might be null or undefined. To fix this, you can use optional chaining, nullish coalescing, or type guards.",
    code: `function getLength(str: string | null): number {
  return str.length; // Error: 'str' is possibly 'null'
}

// Fix using optional chaining:
function getLengthSafe(str: string | null): number | undefined {
  return str?.length;
}

// Fix using nullish coalescing:
function getLengthWithDefault(str: string | null): number {
  return str?.length ?? 0;
}

// Fix using type guard:
function getLengthChecked(str: string | null): number {
  if (str === null) {
    return 0;
  }
  return str.length;
}`,
  },
  {
    id: 4,
    title: 'Fixing "Types Of Property Are Incompatible"',
    content:
      "This error happens when you try to assign an object to a variable of a type with incompatible property types. To fix this, ensure that all properties have compatible types.",
    code: `interface Animal {
  name: string;
  age: number;
}

const cat = {
  name: "Whiskers",
  age: "5" // Error: Type 'string' is not assignable to type 'number'
};

let animal: Animal = cat; // Error: Types of property 'age' are incompatible

// Fix:
const fixedCat = {
  name: "Whiskers",
  age: 5 // Changed to number
};

let fixedAnimal: Animal = fixedCat; // OK`,
  },
  {
    id: 5,
    title: 'Fixing "X Is Of Type Unknown"',
    content:
      'The "unknown" type is a type-safe counterpart of "any". You can\'t use a value of type "unknown" without first asserting or narrowing to a more specific type. To fix this, you need to perform type checking or type assertion.',
    code: `function processValue(val: unknown): string {
  return val.toLowerCase(); // Error: 'val' is of type 'unknown'
}

// Fix using type guard:
function processValueSafe(val: unknown): string {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return "Not a string";
}

// Fix using type assertion:
function processValueAssert(val: unknown): string {
  return (val as string).toLowerCase();
  // Note: Be careful with type assertions, as they can lead to runtime errors
}`,
  },
  {
    id: 6,
    title: 'Fixing "X Is Of Type Unknown"',
    content:
      'The "unknown" type is a type-safe counterpart of "any". You can\'t use a value of type "unknown" without first asserting or narrowing to a more specific type. To fix this, you need to perform type checking or type assertion.',
    code: `function processValue(val: unknown): string {
  return val.toLowerCase(); // Error: 'val' is of type 'unknown'
}

// Fix using type guard:
function processValueSafe(val: unknown): string {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return "Not a string";
}

// Fix using type assertion:
function processValueAssert(val: unknown): string {
  return (val as string).toLowerCase();
  // Note: Be careful with type assertions, as they can lead to runtime errors
}`,
  },
  {
    id: 7,
    title: 'Fixing "X Is Of Type Unknown"',
    content:
      'The "unknown" type is a type-safe counterpart of "any". You can\'t use a value of type "unknown" without first asserting or narrowing to a more specific type. To fix this, you need to perform type checking or type assertion.',
    code: `function processValue(val: unknown): string {
  return val.toLowerCase(); // Error: 'val' is of type 'unknown'
}

// Fix using type guard:
function processValueSafe(val: unknown): string {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return "Not a string";
}

// Fix using type assertion:
function processValueAssert(val: unknown): string {
  return (val as string).toLowerCase();
  // Note: Be careful with type assertions, as they can lead to runtime errors
}`,
  },
];

export default function Component() {
  const [selectedTutorial, setSelectedTutorial] = useState(tutorials[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#0c0e16] text-white">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#0f1117]">
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-bold">TypeScript Tutorials</h1>
        </div>
        <button onClick={toggleSidebar} className="text-white">
          {isSidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Left Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-80 bg-[#0f1117] p-6 overflow-y-auto`}
      >
        <div className="hidden md:flex items-center space-x-2 mb-8">
          <div>
            <h2 className="text-lg font-semibold">TUTORIALS /</h2>
            <h1 className="text-2xl font-bold">HTML Complete Notes</h1>
          </div>
        </div>
        <nav>
          {tutorials.map((tutorial, index) => (
            <button
              key={tutorial.id}
              onClick={() => {
                setSelectedTutorial(tutorial);
                setIsSidebarOpen(false);
              }}
              className={`w-full text-left p-3 rounded mb-2 flex items-center ${
                selectedTutorial.id === tutorial.id
                  ? "bg-[#1c1f2e]"
                  : "hover:bg-[#1c1f2e]"
              }`}
            >
              <span className="mr-3 text-[#00ffff]">{index + 1}</span>
              {tutorial.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="mb-8">
          <span className="text-[#00ffff] text-sm">SOLUTION</span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">
            {selectedTutorial.title}
          </h2>
        </div>
        <div className="bg-[#1c1f2e] rounded-lg p-4 md:p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-semibold text-sm md:text-base">
              error-messages-tutorial
            </span>
          </div>
          <p className="text-[#8b8b8b] text-xs md:text-sm">
            /src/{selectedTutorial.id.toString().padStart(3, "0")}-
            {selectedTutorial.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            .solution.1.ts
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-sm md:text-base">{selectedTutorial.content}</p>
          <pre className="bg-[#1c1f2e] p-4 rounded-lg overflow-x-auto text-xs md:text-sm">
            <code>{selectedTutorial.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
