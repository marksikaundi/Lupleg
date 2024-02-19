import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-white">
      <section className="py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              The Podcast
            </h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The best podcast in the world. Tune in for insightful
              conversations, amazing stories, and thought-provoking interviews
              with the most interesting people.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 grid gap-6 md:gap-8 lg:gap-10">
          <div className="space-y-3">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Latest Episodes
              </h2>
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
                Technology
              </Button>
              <Button size="sm" variant="outline">
                Skills
              </Button>
              <Button size="sm" variant="outline">
                Coding
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
                    src="/Lupleg podcast.png"
                    width="120"
                  />
                </div>
                <div className="grid gap-1 md:gap-2 md:col-span-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">
                      01 Tech Hacks in Africa
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Episode 01 | 15th February 2024
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
                    Welcome to "Tech Hack Africa," the podcast where we dive
                    deep into the world of tech hacks, uncovering the secrets
                    behind the digital curtain. Join us as we explore the
                    ingenious tricks, innovative techniques, and cutting-edge
                    strategies that shape the technology landscape. You can read
                    more through our website.
                  </p>

                  <iframe
                    src="https://podcasters.spotify.com/pod/show/mark-sikaundi/embed/episodes/Tech-Career---With-Mark--Hillary-e2fpla6"
                    height="102px"
                    width="400px"
                    frameborder="0"
                    scrolling="no"
                  ></iframe>
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
                    src="/Lupleg podcast.png"
                    width="120"
                  />
                </div>
                <div className="grid gap-1 md:gap-2 md:col-span-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">
                      The Benefits of Collaboration
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Episode 02 | 18th February 2024
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
                    In today's episode, Mark will discuss the The Benefits of
                    Collaboration and how it can help you improve your skills.
                    We also talk about the importance of networking and how it
                    can help you learn new things from others. With a single
                    technique.
                  </p>
                  {/* <iframe
                    src="https://podcasters.spotify.com/pod/show/mark-sikaundi/embed/episodes/The-Benefits-of-Collaboration-e2fv1lu"
                    height="102px"
                    width="400px"
                    frameborder="0"
                    scrolling="no"
                  ></iframe> */}
                  <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    frameborder="0"
                    height="175"
                    style={{
                      width: "100%",
                      maxWidth: "660px",
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.podcasts.apple.com/us/podcast/the-benefits-of-collaboration/id1731008771?i=1000645794643&theme=light"
                  ></iframe>
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
                    src="/Lupleg podcast.png"
                    width="120"
                  />
                </div>
                <div className="grid gap-1 md:gap-2 md:col-span-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">
                      The Science of Space
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Comming soon (Episode 08 | 5th April 2023)
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
                    Our team of astronomers and astrophysicists discuss the
                    latest discoveries in space exploration, the search for...
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
