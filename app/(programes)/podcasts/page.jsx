// import { Button } from "@/components/ui/button";

// export default function Component() {
//     return (
//       <div className="bg-white">
        <section className="py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">The Podcast</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The best podcast in the world. Tune in for insightful conversations, amazing stories, and
                thought-provoking interviews with the most interesting people.
              </p>
            </div>
          </div>
        </section>
        
//         <section className="border-t">
//           <div className="container grid items-start gap-4 px-4 text-center md:px-6 lg:gap-6">
//             <div className="space-y-2">
//               <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Featured Episode</h2>
//               <p className="text-gray-500 dark:text-gray-400">Check out our latest episode</p>
//             </div>
//             <div className="grid max-w-sm mx-auto items-start gap-4 sm:max-w-2xl sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-3">
//               <div className="flex flex-col gap-2">
//                 <img
//                   alt="Episode cover"
//                   className="rounded-lg aspect-[2/1] overflow-hidden object-cover object-center"
//                   height="200"
//                   src="/next.svg"
//                   width="400"
//                 />
//                 <div className="grid gap-1">
//                   <h3 className="text-lg font-bold">The Art of Podcasting</h3>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">Learn how to create and grow your podcast</p>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <img
//                   alt="Episode cover"
//                   className="rounded-lg aspect-[2/1] overflow-hidden object-cover object-center"
//                   height="200"
//                   src="/next.svg"
//                   width="400"
//                 />
//                 <div className="grid gap-1">
//                   <h3 className="text-lg font-bold">The Art of Podcasting</h3>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">Learn how to create and grow your podcast</p>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <img
//                   alt="Episode cover"
//                   className="rounded-lg aspect-[2/1] overflow-hidden object-cover object-center"
//                   height="200"
//                   src="/next.svg"
//                   width="400"
//                 />
//                 <div className="grid gap-1">
//                   <h3 className="text-lg font-bold">The Art of Podcasting</h3>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">Learn how to create and grow your podcast</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section> 
//         <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
//                 It's not or. It's and.
//               </h1>
//               <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//                 Choosing a customer communication solution is hard — but with
//                 Front, it's not. Front is the only inbox built for collaboration,
//                 visibility, and efficiency at scale.
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-[#fde68a] to-[#fca5a5] p-8 rounded-xl">
//               <h2 className="text-3xl font-extrabold text-gray-900">
//                 Automation and attention
//               </h2>
//               <p className="mt-4 text-lg text-gray-500">
//                 Front automatically aggregates & routes customer conversations
//                 from your channels, ensuring every message gets to the right
//                 person.
//               </p>
//               <a
//                 className="mt-6 text-base font-semibold text-indigo-600 hover:text-indigo-500"
//                 href="#"
//               >
//                 Learn more →
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  



/**
 * v0 by Vercel.
 * @see https://v0.dev/t/G8KlqYVbzF1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="bg-white">
         <section className="py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">The Podcast</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The best podcast in the world. Tune in for insightful conversations, amazing stories, and
                thought-provoking interviews with the most interesting people.
              </p>
            </div>
          </div>
        </section>

    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 grid gap-6 md:gap-8 lg:gap-10">
        <div className="space-y-3">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Latest Episodes</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Listen to the latest episodes from our amazing hosts.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm font-medium">Filter by Category:</div>
            <Button size="sm" variant="outline">
              All
            </Button>
            <Button size="sm" variant="outline">
              News
            </Button>
            <Button size="sm" variant="outline">
              Comedy
            </Button>
            <Button size="sm" variant="outline">
              Sports
            </Button>
          </div>
        </div>
        <div className="grid gap-6 md:gap-8 lg:gap-10">
          <Card>
            <CardContent className="grid gap-2 md:grid-cols-3">
              <div className="flex items-center justify-center p-4 md:col-span-1">
                <img
                  alt="Episode cover"
                  className="aspect-[1/1] rounded-lg object-cover"
                  height="120"
                  src="/collabo.png"
                  width="120"
                />
              </div>
              <div className="grid gap-1 md:gap-2 md:col-span-2">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">The Art of Podcasting</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Episode 05 | 25th March 2023</p>
                </div>
                <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
                  In this episode, we delve into the world of podcasting and discuss the art of storytelling through
                  audio. Our special guests share their insights...
                </p>
                <Button className="min-w-[100px]" size="sm">
                  Play
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-2 md:grid-cols-3">
              <div className="flex items-center justify-center p-4 md:col-span-1">
                <img
                  alt="Episode cover"
                  className="aspect-[1/1] rounded-lg object-cover"
                  height="120"
                  src="/placeholder.svg"
                  width="120"
                />
              </div>
              <div className="grid gap-1 md:gap-2 md:col-span-2">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">The Future of AI</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Episode 12 | 10th April 2023</p>
                </div>
                <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
                  Join us as we explore the future of artificial intelligence and its impact on various industries. Our
                  expert panel...
                </p>
                <Button className="min-w-[100px]" size="sm">
                  Play
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-2 md:grid-cols-3">
              <div className="flex items-center justify-center p-4 md:col-span-1">
                <img
                  alt="Episode cover"
                  className="aspect-[1/1] rounded-lg object-cover"
                  height="120"
                  src="/placeholder.svg"
                  width="120"
                />
              </div>
              <div className="grid gap-1 md:gap-2 md:col-span-2">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">The Science of Space</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Episode 08 | 5th April 2023</p>
                </div>
                <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
                  Our team of astronomers and astrophysicists discuss the latest discoveries in space exploration, the
                  search for...
                </p>
                <Button className="min-w-[100px]" size="sm">
                  Play
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    </div>
  )
}

