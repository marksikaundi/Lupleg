"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Books() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-[#2D1537] to-[#3D1F47] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] pointer-events-none animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D1537] to-transparent" />
        <div className="container relative px-4 md:px-6 text-center z-10">
          <div className="space-y-6">
            <div className="inline-block animate-bounce-slow">
              <span className="inline-block text-6xl filter drop-shadow-lg">
                📚
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-gray-300 animate-gradient">
              Welcome to Bookshelf
            </h1>
            <p className="max-w-[800px] mx-auto text-lg text-gray-200 md:text-xl leading-relaxed backdrop-blur-sm">
              Discover the best software development books to take your coding
              to the next level. Whether you're a beginner or an experienced pro
              developer, you'll find something here to help you grow.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="#books"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-md font-medium text-[#2D1537] shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                prefetch={false}
              >
                Browse Books
              </Link>
              <Button
                variant="outline"
                className="h-12 rounded-full border-white text-white hover:bg-white/10"
              >
                View Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="books" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Books Collection
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Explore our carefully curated collection of programming and
                software development books.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Book cards with improved styling */}
            <div
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl bg-white"
              onClick={() =>
                setSelectedBook({
                  title: "The Pragmatic Programmer",
                  author: "Andrew Hunt, David Thomas",
                  description:
                    "A classic book that provides practical advice for becoming a better programmer.",
                  cover:
                    "https://utfs.io/f/32b680fb-938c-4691-a7fa-e86cce77bed3-ond1v6.webp",
                  link: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/91bac156-2d77-492e-a8d2-4e4d3037bbf2-fhteex.epub",
                })
              }
            >
              <div className="relative">
                <img
                  src="https://utfs.io/f/32b680fb-938c-4691-a7fa-e86cce77bed3-ond1v6.webp"
                  alt="The Pragmatic Programmer"
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" className="text-white">
                    Preview Book
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-[#2D1537] transition-colors">
                  The Pragmatic Programmer
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Andrew Hunt, David Thomas
                </p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  A classic book that provides practical advice for becoming a
                  better programmer.
                </p>
              </div>
            </div>

            <div
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl bg-white"
              onClick={() =>
                setSelectedBook({
                  title: "Clean Code",
                  author: "Robert C. Martin",
                  description:
                    "A comprehensive guide to writing clean, maintainable code.",
                  cover:
                    "https://utfs.io/f/a5a51940-bf1e-4f96-8708-61ef007a241c-ezevmk.webp",
                  link: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/77db03e4-f720-483d-939d-b8875ab7dcf0-iq0r9.epub",
                })
              }
            >
              <div className="relative">
                <img
                  src="https://utfs.io/f/a5a51940-bf1e-4f96-8708-61ef007a241c-ezevmk.webp"
                  alt="Clean Code"
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" className="text-white">
                    Preview Book
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-[#2D1537] transition-colors">
                  Clean Code
                </h3>
                <p className="text-sm text-gray-600 mt-1">Robert C. Martin</p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  A comprehensive guide to writing clean, maintainable code.
                </p>
              </div>
            </div>
            <div
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl bg-white"
              onClick={() =>
                setSelectedBook({
                  title: "The Mythical Man-Month",
                  author: "Frederick P. Brooks Jr.",
                  description:
                    "A classic book on software engineering and project management.",
                  cover:
                    "https://utfs.io/f/0cdae5d7-c0e5-47d0-965b-9553b9b957db-23i38l.webp",
                  link: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/376ebc15-7a71-45a1-9dd8-16d15ddf7092-qxhmmm.pdf",
                })
              }
            >
              <div className="relative">
                <img
                  src="https://utfs.io/f/0cdae5d7-c0e5-47d0-965b-9553b9b957db-23i38l.webp"
                  alt="The Mythical Man-Month"
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" className="text-white">
                    Preview Book
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-[#2D1537] transition-colors">
                  The Mythical Man-Month
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Frederick P. Brooks Jr.
                </p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  A classic book on software engineering and project management.
                </p>
              </div>
            </div>
            <div
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl bg-white"
              onClick={() =>
                setSelectedBook({
                  title: "The Lean Startup",
                  author: "Eric Ries",
                  description:
                    "A guide to building and launching successful startups using a lean methodology.",
                  cover:
                    "https://utfs.io/f/3c9c5be1-76c6-47cb-aab1-ff7e7b5be4d3-xnutaq.webp",
                  link: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/062df017-beee-421b-9641-5469cff939ab-uu822i.epub",
                })
              }
            >
              <div className="relative">
                <img
                  src="https://utfs.io/f/3c9c5be1-76c6-47cb-aab1-ff7e7b5be4d3-xnutaq.webp"
                  alt="The Lean Startup"
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" className="text-white">
                    Preview Book
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-[#2D1537] transition-colors">
                  The Lean Startup
                </h3>
                <p className="text-sm text-gray-600 mt-1">Eric Ries</p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  A guide to building and launching successful startups using a
                  lean methodology.
                </p>
              </div>
            </div>
            <div
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl bg-white"
              onClick={() =>
                setSelectedBook({
                  title: "Design Patterns",
                  author:
                    "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
                  description:
                    "A comprehensive guide to object-oriented design patterns.",
                  cover:
                    "https://utfs.io/f/0155c1ca-e93b-474b-99fb-1e93aa85f555-oq6guq.webp",
                  link: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/d1c82b91-cd5f-4df2-b9d4-2c59847b1e4c-pmat2m.epub",
                })
              }
            >
              <div className="relative">
                <img
                  src="https://utfs.io/f/0155c1ca-e93b-474b-99fb-1e93aa85f555-oq6guq.webp"
                  alt="Design Patterns"
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" className="text-white">
                    Preview Book
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-[#2D1537] transition-colors">
                  Design Patterns
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides
                </p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  A comprehensive guide to object-oriented design patterns.
                </p>
              </div>
            </div>
            <div
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl bg-white"
              onClick={() =>
                setSelectedBook({
                  title: "Soft Skills: The Software Developer’s Life Manual",
                  author: "Sonmez, John",
                  description:
                    "The Software Developer’s Life Manual is a guide to a well-rounded, fulfilling life as a technology professional.",
                  cover:
                    "https://utfs.io/f/f5670f55-5bfa-4860-8a37-fac50c26d3f8-p8rrp4.webp",
                  link: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/d2784363-087b-493b-bc41-f1a43817c164-1o8n63.epub",
                })
              }
            >
              <div className="relative">
                <img
                  src="https://utfs.io/f/f5670f55-5bfa-4860-8a37-fac50c26d3f8-p8rrp4.webp"
                  alt="Soft Skills: The Software Developer’s Life Manual"
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" className="text-white">
                    Preview Book
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-[#2D1537] transition-colors">
                  Soft Skills: The Software Developer’s Life Manual
                </h3>
                <p className="text-sm text-gray-600 mt-1">Sonmez, John</p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  The Software Developer’s Life Manual is a guide to a
                  well-rounded, fulfilling life as a technology professional.
                </p>
              </div>
            </div>
            <div
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl bg-white"
              onClick={() =>
                setSelectedBook({
                  title: "Data Structures and Algorithms",
                  author: "Dr. Basant Agarwal",
                  description:
                    "Python teaches you the essential data structures and algorithms you need to solve complex problems in software development.",
                  cover:
                    "https://utfs.io/f/279cfeb3-af75-4d2a-af8d-cde382d3eb3d-24z6.webp",
                  link: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/4f15476d-ca1d-416f-b533-c82d951684e8-lqickg.epub",
                })
              }
            >
              <div className="relative">
                <img
                  src="https://utfs.io/f/279cfeb3-af75-4d2a-af8d-cde382d3eb3d-24z6.webp"
                  alt="Data Structures and Algorithms"
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" className="text-white">
                    Preview Book
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-[#2D1537] transition-colors">
                  Data Structures and Algorithms
                </h3>
                <p className="text-sm text-gray-600 mt-1">Dr. Basant Agarwal</p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  Python teaches you the essential data structures and
                  algorithms you need to solve complex problems in software
                  development.
                </p>
              </div>
            </div>
            <div
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl bg-white"
              onClick={() =>
                setSelectedBook({
                  title: "Modern Full Stack Development",
                  author: "Frank Zammetti",
                  description:
                    "Modern Full-Stack Development is a guide to building web applications using modern tools and technologies.",
                  cover:
                    "https://utfs.io/f/745e5253-5d61-40be-9783-e92fa855c66a-2bcb.webp",
                  link: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/09f3db58-ae01-40c7-b1c9-372d800ce2f1-2ir75x.pdf",
                })
              }
            >
              <div className="relative">
                <img
                  src="https://utfs.io/f/745e5253-5d61-40be-9783-e92fa855c66a-2bcb.webp"
                  alt="Modern Full Stack Development"
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" className="text-white">
                    Preview Book
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-[#2D1537] transition-colors">
                  Modern Full Stack Development
                </h3>
                <p className="text-sm text-gray-600 mt-1">Frank Zammetti</p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  Modern Full-Stack Development is a guide to building web
                  applications using modern tools and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {selectedBook && (
        <Dialog
          open={!!selectedBook}
          onOpenChange={() => setSelectedBook(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {selectedBook.title}
              </DialogTitle>
              <DialogDescription className="text-lg text-gray-600">
                {selectedBook.author}
              </DialogDescription>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-8 py-6">
              <div className="space-y-4">
                <div className="relative group">
                  <img
                    src={selectedBook.cover}
                    alt={selectedBook.title}
                    className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setSelectedBook(null)}
                  >
                    Close Preview
                  </Button>
                  <Link
                    href={selectedBook.link}
                    className="flex-1 inline-flex items-center justify-center rounded-md bg-[#2D1537] px-6 py-3 text-white transition-colors hover:bg-[#3D1F47] hover:scale-[1.02]"
                    target="_blank"
                    download
                    prefetch={false}
                  >
                    Download
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    About this Book
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedBook.description}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">
                    Reading Format
                  </h4>
                  <p className="text-sm">
                    {selectedBook.link.endsWith(".epub") ? "EPUB" : "PDF"}
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
