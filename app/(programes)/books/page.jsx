import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-green-950 md:text-4xl lg:text-6xl">
              🚀 Welcome to Bookshelf 📚
            </h1>
            <p className="max-w-[700px] mx-auto text-lg text-black md:text-xl">
              Discover the best software development books to take your coding
              to the next level. Whether you're a beginner or an experienced pro
              developer, you'll find something here to help you grow.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-950 px-8 py-6 text-sm font-medium text-white shadow transition-colors hover:bg-green-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Browse Books
            </Link>
          </div>
        </div>
      </section>
      <section id="books" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
          <Link
            href="#"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              width="200"
              height="300"
              alt="Book Cover"
              className="w-full h-[300px] object-cover"
              style={{ aspectRatio: "200/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-card text-card-foreground">
              <h3 className="text-lg font-semibold group-hover:underline">
                The Pragmatic Programmer
              </h3>
              <p className="text-sm text-muted-foreground">
                Andrew Hunt, David Thomas
              </p>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                A classic book that provides practical advice for becoming a
                better programmer.
              </p>
              <Button variant="link" className="mt-2">
                Learn More
              </Button>
            </div>
          </Link>
          <Link
            href="#"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              width="200"
              height="300"
              alt="Book Cover"
              className="w-full h-[300px] object-cover"
              style={{ aspectRatio: "200/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-card text-card-foreground">
              <h3 className="text-lg font-semibold group-hover:underline">
                Clean Code
              </h3>
              <p className="text-sm text-muted-foreground">Robert C. Martin</p>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                A comprehensive guide to writing clean, maintainable code.
              </p>
              <Button variant="link" className="mt-2">
                Learn More
              </Button>
            </div>
          </Link>
          <Link
            href="#"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              width="200"
              height="300"
              alt="Book Cover"
              className="w-full h-[300px] object-cover"
              style={{ aspectRatio: "200/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-card text-card-foreground">
              <h3 className="text-lg font-semibold group-hover:underline">
                The Mythical Man-Month
              </h3>
              <p className="text-sm text-muted-foreground">
                Frederick P. Brooks Jr.
              </p>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                A classic book on software engineering and project management.
              </p>
              <Button variant="link" className="mt-2">
                Learn More
              </Button>
            </div>
          </Link>
          <Link
            href="#"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              width="200"
              height="300"
              alt="Book Cover"
              className="w-full h-[300px] object-cover"
              style={{ aspectRatio: "200/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-card text-card-foreground">
              <h3 className="text-lg font-semibold group-hover:underline">
                The Lean Startup
              </h3>
              <p className="text-sm text-muted-foreground">Eric Ries</p>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                A guide to building and launching successful startups using a
                lean methodology.
              </p>
              <Button variant="link" className="mt-2">
                Learn More
              </Button>
            </div>
          </Link>
          <Link
            href="#"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              width="200"
              height="300"
              alt="Book Cover"
              className="w-full h-[300px] object-cover"
              style={{ aspectRatio: "200/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-card text-card-foreground">
              <h3 className="text-lg font-semibold group-hover:underline">
                Design Patterns
              </h3>
              <p className="text-sm text-muted-foreground">
                Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides
              </p>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                A comprehensive guide to object-oriented design patterns.
              </p>
              <Button variant="link" className="mt-2">
                Learn More
              </Button>
            </div>
          </Link>
          <Link
            href="#"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              width="200"
              height="300"
              alt="Book Cover"
              className="w-full h-[300px] object-cover"
              style={{ aspectRatio: "200/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-card text-card-foreground">
              <h3 className="text-lg font-semibold group-hover:underline">
                The Lean Startup
              </h3>
              <p className="text-sm text-muted-foreground">Eric Ries</p>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                A guide to building and launching successful startups using a
                lean methodology.
              </p>
              <Button variant="link" className="mt-2">
                Learn More
              </Button>
            </div>
          </Link>
          <Link
            href="#"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              width="200"
              height="300"
              alt="Book Cover"
              className="w-full h-[300px] object-cover"
              style={{ aspectRatio: "200/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-card text-card-foreground">
              <h3 className="text-lg font-semibold group-hover:underline">
                The Pragmatic Programmer
              </h3>
              <p className="text-sm text-muted-foreground">
                Andrew Hunt, David Thomas
              </p>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                A classic book that provides practical advice for becoming a
                better programmer.
              </p>
              <Button variant="link" className="mt-2">
                Learn More
              </Button>
            </div>
          </Link>
          <Link
            href="#"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              width="200"
              height="300"
              alt="Book Cover"
              className="w-full h-[300px] object-cover"
              style={{ aspectRatio: "200/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-card text-card-foreground">
              <h3 className="text-lg font-semibold group-hover:underline">
                Clean Code
              </h3>
              <p className="text-sm text-muted-foreground">Robert C. Martin</p>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                A comprehensive guide to writing clean, maintainable code.
              </p>
              <Button variant="link" className="mt-2">
                Learn More
              </Button>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
