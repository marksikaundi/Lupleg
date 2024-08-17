import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Books() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-950 ">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white md:text-4xl lg:text-6xl">
              🚀 Welcome to Bookshelf 📚
            </h1>
            <p className="max-w-[700px] mx-auto text-lg text-white md:text-xl pb-8">
              Discover the best software development books to take your coding
              to the next level. Whether you're a beginner or an experienced pro
              developer, you'll find something here to help you grow.
            </p>
            <Link
              href="#books"
              className="inline-flex h-10 items-center justify-center rounded-md border px-8 py-6 text-md font-medium text-white shadow transition-colors hover:bg-green-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Browse Books
            </Link>
          </div>
        </div>
      </section>

      <section id="books" className="w-full py-12 md:py-24 lg:py-32">
        <hr className="pb-2" />

        <h2 className="pl-10 pb-6 font-bold text-2xl" id="books">
          Books Collaction
        </h2>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
          <Link
            href="https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/91bac156-2d77-492e-a8d2-4e4d3037bbf2-fhteex.epub"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="https://utfs.io/f/32b680fb-938c-4691-a7fa-e86cce77bed3-ond1v6.webp"
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
            href="https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/77db03e4-f720-483d-939d-b8875ab7dcf0-iq0r9.epub"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="https://utfs.io/f/a5a51940-bf1e-4f96-8708-61ef007a241c-ezevmk.webp"
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
            href="https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/376ebc15-7a71-45a1-9dd8-16d15ddf7092-qxhmmm.pdf"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="https://utfs.io/f/0cdae5d7-c0e5-47d0-965b-9553b9b957db-23i38l.webp"
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
            href="https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/062df017-beee-421b-9641-5469cff939ab-uu822i.epub"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="https://utfs.io/f/3c9c5be1-76c6-47cb-aab1-ff7e7b5be4d3-xnutaq.webp"
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
            href="https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/d1c82b91-cd5f-4df2-b9d4-2c59847b1e4c-pmat2m.epub"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="https://utfs.io/f/0155c1ca-e93b-474b-99fb-1e93aa85f555-oq6guq.webp"
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
            href="https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/d2784363-087b-493b-bc41-f1a43817c164-1o8n63.epub"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="https://utfs.io/f/f5670f55-5bfa-4860-8a37-fac50c26d3f8-p8rrp4.webp"
              width="200"
              height="300"
              alt="Book Cover"
              className="w-full h-[300px] object-cover"
              style={{ aspectRatio: "200/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-card text-card-foreground">
              <h3 className="text-lg font-semibold group-hover:underline">
                Soft Skills: The Software Developer’s Life Manual
              </h3>
              <p className="text-sm text-muted-foreground"> Sonmez, John </p>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                The Software Developer’s Life Manual is a guide to a
                well-rounded, fulfilling life as a technology professional.
              </p>
              <Button variant="link" className="mt-2">
                Learn More
              </Button>
            </div>
          </Link>
          <Link
            href="https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/4f15476d-ca1d-416f-b533-c82d951684e8-lqickg.epub"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="https://utfs.io/f/279cfeb3-af75-4d2a-af8d-cde382d3eb3d-24z6.webp"
              width="200"
              height="300"
              alt="Book Cover"
              className="w-full h-[300px] object-cover"
              style={{ aspectRatio: "200/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-card text-card-foreground">
              <h3 className="text-lg font-semibold group-hover:underline">
                Data Structures and Algorithms
              </h3>
              <p className="text-sm text-muted-foreground">
                Dr. Basant Agarwal
              </p>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                Python teaches you the essential data structures and algorithms
                you need to solve complex problems in software development.
              </p>
              <Button variant="link" className="mt-2">
                Learn More
              </Button>
            </div>
          </Link>
          <Link
            href="https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/09f3db58-ae01-40c7-b1c9-372d800ce2f1-2ir75x.pdf"
            className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            prefetch={false}
          >
            <img
              src="https://utfs.io/f/745e5253-5d61-40be-9783-e92fa855c66a-2bcb.webp"
              width="200"
              height="300"
              alt="Book Cover"
              className="w-full h-[300px] object-cover"
              style={{ aspectRatio: "200/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-card text-card-foreground">
              <h3 className="text-lg font-semibold group-hover:underline">
                Modern Full Stack Development
              </h3>
              <p className="text-sm text-muted-foreground">Frank Zammetti</p>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                Modern Full-Stack Development is a guide to building web
                applications using modern tools and technologies.
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
