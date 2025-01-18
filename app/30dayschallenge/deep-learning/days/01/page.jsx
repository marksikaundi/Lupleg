import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Component() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-[#2D1537] text-white">
            <CardContent className="p-6">
              <div className="aspect-video bg-zinc-800 rounded-lg mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white opacity-50" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {" "}
                Introduction to Deep Learning
              </h2>
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/mark.jpg"
                  alt="Mark Sikaundi"
                  width={40}
                  height={40}
                  className="rounded-full w-16 h-16 mr-3 sm:mr-6"
                />
                <div>
                  <p className="font-semibold">Mark Sikaundi</p>
                  <p className="text-sm text-zinc-400">
                    January 18th, 2025 | 21:1 | 0
                  </p>
                </div>
              </div>
              <p className="mb-4">
                Deep learning is a subset of machine learning where artificial
                neural networks, algorithms inspired by the human brain, learn
                from large amounts of data. Similarly to how we learn from
                experience, the deep learning algorithm would perform a task
                repeatedly, each time tweaking it a little to improve the
                outcome. We refer to 'deep learning' because the neural networks
                have various (deep) layers that enable learning.
              </p>
              <p className="mb-4">
                Deep learning is a key technology behind driverless cars,
                enabling them to recognize a stop sign, or to distinguish a
                pedestrian from a lamppost. It is the key to voice control in
                consumer devices like phones, tablets, TVs, and hands-free
                speakers. Deep learning is getting lots of attention lately and
                for good reason. It's achieving results that were not possible
                before.
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="bg-black">
                  <FaXTwitter className="w-4 h-4 mr-2" />
                  Tweet
                </Button>
                <Button variant="outline" size="sm" className="bg-black">
                  Share on <BsFillThreadsFill className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                A Comprehensive Introduction to Neural Networks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 mb-4">
                In this comprehensive guide, you'll learn the basics of deep
                learning, how neural networks work, and how to train them.
                You'll also learn about the different types of neural networks
                and how to use them in practice.
              </p>
              <Button size="sm" className="bg-[#2D1537]">
                <FaXTwitter className="w-4 h-4 mr-2" />
                Discuss on Twitter
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Basics of Python</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                <span className="font-semibold">Hello world</span> What's up,
                Wizards? We look at the basics of Python, how to install it, and
                how to get started with it.
              </p>

              <h4 className="font-semibold">Ways you can install python</h4>
              <p className="text-sm">
                <span className="font-semibold">0:00</span>
                First, you need to install Python on your computer. You can
                download the latest version of Python from the official website.
              </p>
              <p className="text-sm">
                <span className="font-semibold">0:05</span>
                Once you have downloaded the installer, run it and follow the
                instructions to install Python on your computer.
              </p>
              <p className="text-sm">
                <span className="font-semibold">0:10</span>
                After the installation is complete, you can verify that Python
                is installed by opening a terminal and running the following
                command:
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`python --version`}
              </pre>
              <p className="text-sm">
                <span className="font-semibold">0:15</span>
                If Python is installed correctly, you should see the version
                number of Python printed to the console.
              </p>
              <p className="text-sm">
                <span className="font-semibold">0:20</span>
                You can now start writing Python programs on your computer.
              </p>
              <h4 className="font-semibold">Getting Started</h4>
              <p className="text-sm">
                <span className="font-semibold">0:10</span>
                Once you have installed Python, you can start writing your first
                Python program. Here's an example of a simple "Hello, World!"
                program:
              </p>

              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`This is a simple Python program that prints "Hello, World!" to the console.

  
              print("Hello, World!")
              You get a "Hello, World!" message in the console when you run this program.
              `}
              </pre>
              <p className="text-sm">
                <span className="font-semibold">Data types in python</span>
                Python has several built-in data types that you can use to store
                different types of data. Some of the most common data types in
                Python include:
              </p>
              <ul className="list-disc pl-4">
                <li>Integers</li>
                <li>Floats</li>
                <li>Strings</li>
                <li>Lists</li>
                <li>Dictionaries</li>
                <li>Tuples</li>
                <li>Sets</li>
                <li>Booleans</li>
              </ul>

              <p className="text-sm">
                <span className="font-semibold">Integers</span>
              </p>
              <p className="text-sm">
                Integers are whole numbers, such as 1, 2, 3, 4, 5, and so on.
                You can perform arithmetic operations on integers, such as
                adding them together, subtracting them, multiplying them, and so
                on.
              </p>

              <p className="text-sm">How to run an integer in Python</p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                x = 5
                y = 10

                z = x + y

                print(z)
                15
                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">Floats</span>
              </p>
              <p className="text-sm">
                Floats are numbers with decimal points, such as 1.0, 2.5, 3.14,
                and so on. You can perform arithmetic operations on floats as
                well, just like you can with integers.
              </p>
              <p className="text-sm">How to run an float in Python</p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                x = 1.5
                y = 2.5

                z = x + y

                print(z)
                4.0

                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">Strings</span>
              </p>
              <p className="text-sm">
                Strings are sequences of characters, such as "hello", "world",
                "python", and so on. You can perform various operations on
                strings, such as concatenating them together, splitting them
                apart, and so on.
              </p>
              <p className="text-sm">How to run a string in Python</p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                x = "Hello"
                y = "World"

                z = x + " " + y

                print(z)
                Hello World
                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">Lists</span>
              </p>
              <p className="text-sm">
                Lists are ordered collections of items, such as [1, 2, 3, 4, 5].
                You can add items to a list, remove items from a list, and
                perform other operations on lists as well.
              </p>

              <p className="text-sm">How to run a list in Python</p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                x = [1, 2, 3, 4, 5]
                y = [6, 7, 8, 9, 10]

                z = x + y

                print(z)
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">Dictionaries</span>
              </p>
              <p className="text-sm">
                Dictionaries are collections of key-value pairs, such as
                {"{"} "name": "Alice", "age": 30, "city": "New York" {"}"}.
                Dictionaries are useful for storing structured data and
                retrieving it quickly.
              </p>
              <p className="text-sm">How to run a disctionary in Python</p>

              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                x = {"name": "Alice", "age": 30, "city": "New York"}
                y = {"name": "Bob", "age": 25, "city": "Los Angeles"}

                z = x["name"] + " is " + str(x["age"]) + " years old."

                print(z)
                Alice is 30 years old.
                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">Tuples</span>
              </p>
              <p className="text-sm">
                Tuples are ordered collections of items, similar to lists, but
                they are immutable, meaning you cannot change the items in a
                tuple once it has been created.
              </p>

              <p className="text-sm">How to run a Tuples in Python</p>

              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                x = (1, 2, 3, 4, 5)
                y = (6, 7, 8, 9, 10)

                z = x + y

                print(z)
                (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">Sets</span>
              </p>
              <p className="text-sm">
                Sets are unordered collections of unique items, such as
                {"{"}1, 2, 3, 4, 5{"}"}. Sets are useful for performing set
                operations, such as union, intersection, and difference.
              </p>
              <p className="text-sm">How to run Sets in Python</p>

              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                x = {1, 2, 3, 4, 5}
                y = {4, 5, 6, 7, 8}

                z = x.union(y)

                print(z)

                {1, 2, 3, 4, 5, 6, 7, 8}

                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">Booleans</span>
              </p>
              <p className="text-sm">
                Booleans are values that can be either True or False. Booleans
                are useful for representing the truth value of an expression,
                and for controlling the flow of a program with conditional
                statements.
              </p>

              <p className="text-sm">How to run Booleans in Python</p>

              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                x = True
                y = False

                if x:
                  print("x is True")
                else:
                  print("x is False")

                if y:
                  print("y is True")
                else:
                  print("y is False")
                `}
              </pre>

              <h4 className="font-semibold">Control Structures</h4>
              <p className="text-sm">
                <span className="font-semibold">If statements</span>
              </p>
              <p className="text-sm">
                If statements are used to make decisions in a program. You can
                use if statements to check if a condition is True or False, and
                execute different code based on the result.
              </p>

              <p className="text-sm">How to run a if statements in Python</p>

              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                x = 5

                if x > 0:
                  print("x is positive")

                if x < 0:

                  
                  print("x is negative")

                if x == 0:

                  print("x is zero")

                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">For loops</span>
              </p>
              <p className="text-sm">
                For loops are used to iterate over a sequence of items, such as
                a list or a string. You can use for loops to perform the same
                operation on each item in the sequence.
              </p>

              <p className="text-sm">How to run a for loop in Python</p>

              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                x = [1, 2, 3, 4, 5]

                for item in x:
                  print(item)

                1
                2
                3
                4
                5
                  
                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">While loops</span>
              </p>
              <p className="text-sm">
                While loops are used to repeat a block of code as long as a
                condition is True. You can use while loops to perform an
                operation repeatedly until a certain condition is met.
              </p>
              <p className="text-sm">How to run a while loop in Python</p>

              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                x = 0

                while x < 5:
                  print(x)
                  x += 1

                0
                1
                2
                3
                4
                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">Functions</span>
              </p>
              <p className="text-sm">
                Functions are blocks of code that perform a specific task. You
                can define a function once and then call it multiple times
                throughout your program. Functions are useful for organizing
                your code and making it more readable.
              </p>
              <p className="text-sm">How to run a function in Python</p>

              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                def greet(name):
                  print("Hello, " + name + "!")

                greet("Alice")
                greet("Bob")
                greet("Charlie")
                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">Classes</span>
              </p>
              <p className="text-sm">
                Classes are templates for creating objects in Python. You can
                define a class with attributes and methods, and then create
                objects from that class. Classes are useful for modeling real-
                world objects and their behavior.
              </p>
              <p className="text-sm">How to run a class in Python</p>

              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                class Person:
                  def __init__(self, name, age):
                    self.name = name
                    self.age = age

                  def greet(self):
                    print("Hello, am" + self.name + " and I am " + str(self.age) + " years old.")

                alice = Person("Alice", 30)
                bob = Person("Bob", 25)

                alice.greet()
                bob.greet()
                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">Modules</span>
              </p>
              <p className="text-sm">
                Modules are files that contain Python code. You can import
                modules into your program and use the functions and classes
                defined in them. Modules are useful for organizing your code
                into separate files and reusing code across multiple programs.
              </p>
              <p className="text-sm">How to run a module in Python</p>

              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                # mymodule.py

                def greet(name):
                  print("Hello, " + name + "!")
                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">Packages</span>
              </p>
              <p className="text-sm">
                Packages are collections of modules that are organized into
                directories. You can import packages into your program and use
                the modules and subpackages defined in them. Packages are useful
                for organizing your code into a hierarchical structure and
                reusing code across multiple programs.
              </p>
              <p className="text-sm">How to run a package in Python</p>

              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                # mypackage/__init__.py

                from .mymodule import greet
                `}

                {`
                # mypackage/mymodule.py

                def greet(name):
                  print("Hello, " + name + "!")
                `}

                {`
                # main.py

                from mypackage import greet

                greet("Alice")
                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">Error Handling</span>
              </p>
              <p className="text-sm">
                Error handling is the process of dealing with errors that occur
                in a program. You can use try-except blocks to catch and handle
                errors in your code. Error handling is useful for preventing
                your program from crashing when an error occurs.
              </p>
              <p className="text-sm">How to run a error handling in Python</p>

              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                try:
                  x = 1 / 0
                except ZeroDivisionError:
                  print("Cannot divide by zero!")
                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">File Handling</span>
              </p>
              <p className="text-sm">
                File handling is the process of reading from and writing to
                files on your computer. You can use the built-in open function
                to open a file, read from it, write to it, and close it when
                you're done. File handling is useful for working with data
                stored in files on your computer.
              </p>

              <p className="text-sm">How to run a file handling in Python</p>

              <pre className="bg-gray-100 p-4 rounded-md text-sm">
                {`
                # Write to a file
                with open("example.txt", "w") as file:
                  file.write("Hello, World!")

                # Read from a file
                with open("example.txt", "r") as file:
                  content = file.read()

                print(content)
                Hello, World!

                `}
              </pre>

              <p className="text-sm">
                <span className="font-semibold">Conclusion</span>
              </p>
              <p className="text-sm">
                Python is a powerful and versatile programming language that is
                widely used in the software development industry. In this guide,
                we covered the basics of Python, including how to install it,
                data types, control structures, functions, classes, modules,
                packages, error handling, and file handling. With this
                knowledge, you can start writing your own Python programs and
                take your programming skills to the next level.
              </p>

              <Button size="sm" className="bg-[#2D1537]">
                <FaGithub className="w-4 h-4 mr-2" />
                Discuss on Github
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Table of content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold"> </p>
                  <p className="text-sm text-zinc-600">1 min</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">How to Name your Types</p>
                  <p className="text-sm text-zinc-600">4 mins</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">
                    Don't use return types, unless...
                  </p>
                  <p className="text-sm text-zinc-600">5 mins</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">TypeScript 5.0 Beta Deep Dive</p>
                  <p className="text-sm text-zinc-600">6 mins</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">
                    Conform a Derived Type Without Losing Its Literal Values
                  </p>
                  <p className="text-sm text-zinc-600">1 min</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">
                    Conform a Derived Type Without Losing Its Literal Values
                  </p>
                  <p className="text-sm text-zinc-600">1 min</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">
                    Conform a Derived Type Without Losing Its Literal Values
                  </p>
                  <p className="text-sm text-zinc-600">1 min</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PlayCircle className="w-8 h-8 text-zinc-500" />
                <div>
                  <p className="font-semibold">
                    Conform a Derived Type Without Losing Its Literal Values
                  </p>
                  <p className="text-sm text-zinc-600">1 min</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">
                New TypeScript tips delivered to your inbox:
              </h3>
              <div className="flex space-x-2">
                <Input placeholder="Preferred name" className="flex-grow" />
                <Input placeholder="you@example.com" className="flex-grow" />
              </div>
              <Button className="w-full mt-2">
                Subscribe for TypeScript tips
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
