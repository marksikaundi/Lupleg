"use client";

import { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const tutorials = [
  {
    id: 1,
    title: 'Understanding "HTML Skeleton"',
    content:
      "The HTML skeleton is the basic structure of an HTML document. It includes the DOCTYPE declaration, html, head, and body elements. This structure provides the foundation for building web pages.",
    code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LuplegX 101</title>
</head>
<body>
    
</body>
</html>`,
  },
  {
    id: 2,
    title: 'HTML tags',
    content:
      "HTML tags are used to define the structure and content of a web page. They are enclosed in angle brackets and come in pairs: opening and closing tags. The opening tag contains the tag name, and the closing tag has a forward slash before the tag name.",
    code: `<!DOCTYPE html> DOCTYPE tag
<html lang="en"> HTML tag
  <head> Head tag
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title> Title tag
  </head> Head tag
  <body> Body tag
    HTML TAGS HERE
    <h1>Sample</h1> Heading tag which ranges from h1 to h6
    <p>Sample</p> Paragraph tag
    <span>Here am</span> Span tag
    <div> Div tag
      <p>Sample</p>
    </div>
    <canvas></canvas> Canvas tag
    <script> console.log("Hello World"); </script> Script tag
    <button>Click me</button> Button tag
    <style> body { background-color: #f1f1f1; } </style> Style tag
    <link rel="stylesheet" href="style.css" /> Link tag
    <img src="image.jpg" alt="Image" /> Image tag
    <a href="https://www.lupleg.org">Go to Lupleg Website</a> Anchor tag
    <ul> Unordered list
      <li>Item 1</li> List item
      <li>Item 2</li>
    </ul>
    <ol> Ordered list
      <li>Item 1</li> List item
      <li>Item 2</li>
    </ol>
    <table> Table tag
      <tr> Table row
        <td>Table data</td> Table data
        <td>Table data</td>
      </tr>
    </table>
    </body> Body tag
You can explore more tags on the W3Schools website.`,
  },
  {
    id: 3,
    title: 'HTML attributes',
    content:
      "HTML attributes provide additional information about an element. They are always included in the opening tag and are written as name-value pairs. The attribute name is followed by an equal sign and the attribute value in double or single quotes.",
    code: `
    HTML Attributes
    
    <body>
          <h1 style="color: red;">Hello World</h1> Style attribute
          <img src="image.jpg" alt="Image" width="200" height="200" /> Width and height attributes
          <a href="https://www.lupleg.org" target="_blank">Go to Lupleg Website</a> Target attribute
          <input type="text" placeholder="Enter your name" /> Placeholder attribute
          <button onclick="alert('Hello')">Click me</button> Onclick attribute
          <a href="mailto:[email protected]?subject=Feedback">Send email</a> Mailto attribute
          <a href="tel:+1234567890">Call us</a> Tel attribute
          <a href="#section">Go to section</a> ID attribute
          <a href="https://www.lupleg.org" title="Visit Lupleg">Go to Lupleg Website</a> Title attribute
    </body>
   `,
  },
  {
    id: 4,
    title: 'What are HTML elements',
    content:
      "HTML elements are the building blocks of a web page. They are defined by tags and can contain text, images, links, and other elements. Elements can be nested inside other elements to create a hierarchical structure.",
    code: `  <body>
    <h1>Hello World</h1> Heading element
    <p>This is a paragraph.</p>
    Paragraph element
    <a href="https://www.lupleg.org">Go to Lupleg Website</a> Anchor element
    <img src="image.jpg" alt="Image" /> Image element
        <div>
        <p>This is a div element.</p>
        </div> Division element
    <span>This is a span element.</span> Span element
            <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            </ul> Unordered list element

            <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            </ol> Ordered list element

    <table>
            <tr>
                <td>Row 1, Cell 1</td>
                <td>Row 1, Cell 2</td>
            </tr>
            <tr>
                <td>Row 2, Cell 1</td>
                <td>Row 2, Cell 2</td>
            </tr>
    </table> Table element
    
  </body>

You can explore more elements on the W3Schools website. 
      `,
  },
  {
    id: 5,
    title: 'HTML forms',
    content:
      'HTML forms are used to collect user input. They contain various form elements such as input fields, checkboxes, radio buttons, and buttons. When a user submits a form, the data is sent to a server for processing.',
    code: `
    <body>
            <form action="/submit" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name">
                <br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">
                <br>
                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea>
                <br>
                <input type="submit" value="Submit">
            </form>
    </body>
                
    You can explore more form elements on the W3Schools website.`,

  },
  {
    id: 6,
    title: 'HTML tables',
    content:
      'HTML tables are used to display data in rows and columns. They consist of table rows (tr), table headers (th), and table data cells (td). Tables can be styled using CSS to improve their appearance.',
    code: `HTML Tables
<body>
    <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>Mark Sikaundi</td>
            <td>30</td>
            <td>USA</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>25</td>
            <td>UK</td>
        </tr>
    </table>
</body>


You can explore more table elements on the W3Schools website.
    `,
  },
  {
    id: 7,
    title: 'HTML links, Images',
    content:
      'HTML links are used to navigate between web pages. They are created using the anchor (a) element and can link to other pages, files, or websites. Images are inserted using the image (img) element and can be styled using CSS.',
    code: `
    <body>
        <a href="https://www.lupleg.org">Go to Lupleg Website</a>
        <br>
        <img src="image.jpg" alt="Image">
    </body>
    
    You can explore more link and image elements on the W3Schools website.`,
  },
  {
    id: 8,
    title: 'Practical HTML Projects',
    content:
      'In this module, we will build several practical HTML projects to apply the concepts we have learned. These projects will include a personal portfolio, a blog, and a landing page. By working on these projects, you will gain hands-on experience and improve your HTML skills.',
    code: `
    <body>
        <h1>Personal Portfolio</h1>
        <p>Welcome to my personal portfolio. Here you can learn more about me and my work.</p>
        <h2>About Me</h2>
        <p>I am a web developer with a passion for creating beautiful and functional websites.</p>
        <h2>My Work</h2>
        <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
        </ul>
        <h2>Contact Me</h2>
        <p>If you have any questions or would like to work together, feel free to contact me.</p>   
    </body>
    
    `,
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
          <h1 className="text-lg font-bold">HTML Tutorials</h1>
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
          <span className="text-[#00ffff] text-sm">MODULE</span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">
            {selectedTutorial.title}
          </h2>
        </div>
        <div className="bg-[#1c1f2e] rounded-lg p-4 md:p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-semibold text-sm md:text-base">
              Web technologies / HTML
            </span>
          </div>
          <p className="text-[#8b8b8b] text-xs md:text-sm">
            /src/{selectedTutorial.id.toString().padStart(3, "0")}-
            {selectedTutorial.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            solution.html
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
