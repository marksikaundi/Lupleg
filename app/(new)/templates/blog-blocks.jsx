import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const blocks = [
  {
    title: "Popular And Recent Posts",
    component: (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Popular Posts */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Popular Posts
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Tips on how to travel safely in foreign countries",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.58.30%20PM-z7n3lttaswQhDutLFo95jWqGaCkPHX.png",
                    author: {
                      name: "Charlotte Delos",
                      role: "Travel Advocate",
                      avatar:
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.58.30%20PM-z7n3lttaswQhDutLFo95jWqGaCkPHX.png",
                    },
                  },
                  {
                    title: "Enjoying the beach life while on a vacation",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.58.30%20PM-z7n3lttaswQhDutLFo95jWqGaCkPHX.png",
                    author: {
                      name: "Adam Cuppy",
                      role: "Vlogger",
                      avatar:
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.58.30%20PM-z7n3lttaswQhDutLFo95jWqGaCkPHX.png",
                    },
                  },
                ].map((post, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-[#2D1537] transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={post.author.avatar}
                          alt={post.author.name}
                        />
                        <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{post.author.name}</p>
                        <p className="text-sm text-gray-600">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
              <div className="space-y-6">
                {[
                  "Getting the most out of your vacation",
                  "Choosing the perfect Safari in Africa",
                  "Hiking during the monsoon in Asia",
                  "Must carry items while traveling to Thailand",
                  "An extremely funny trip to the Swiss Alps",
                ].map((title, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.58.30%20PM-z7n3lttaswQhDutLFo95jWqGaCkPHX.png"
                      alt={title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <h3 className="font-medium group-hover:text-[#2D1537] transition-colors">
                      {title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Simple Three Column With Image",
    component: (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Popular Blog Posts
            </h2>
            <p className="text-gray-600">
              Some amazing blog posts that are written by even more amazing
              people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Finding Amazing Events Near You - Fast, Cheap & Free",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.58.46%20PM-ijlXUTLzPwkTTmmnlxKFGq1XuEtcAJ.png",
                category: "Music",
              },
              {
                title: "The Top Rated Musical Concerts Worldwide in 2019",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.58.46%20PM-ijlXUTLzPwkTTmmnlxKFGq1XuEtcAJ.png",
                category: "Concert",
              },
              {
                title: "This female band is making buzz all over the world",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.58.46%20PM-ijlXUTLzPwkTTmmnlxKFGq1XuEtcAJ.png",
                category: "Band",
              },
            ].map((post, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-[#2D1537] mb-2">{post.category}</p>
                <h3 className="font-semibold mb-4 group-hover:text-[#2D1537] transition-colors">
                  {post.title}
                </h3>
                <Button variant="link" className="text-[#2D1537] p-0">
                  Read Post
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Simple Three Column With Dashed Border",
    component: (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <p className="text-[#2D1537] font-medium">Blog</p>
            <h2 className="text-3xl font-bold text-gray-900">
              We Love <span className="text-[#2D1537]">Writing.</span>
            </h2>
            <p className="text-gray-600">
              Some amazing blog posts that are written by even more amazing
              people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Optimizing your website for your main keyword",
                category: "Search Engine",
                type: "SEO Marketing",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.59.04%20PM-YgLCSr1PLLXBpWpoLLU4JybIuUATwL.png",
              },
              {
                title: "Creating the perfect advertisement campaign",
                category: "Search Engine",
                type: "Advertising",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.59.04%20PM-YgLCSr1PLLXBpWpoLLU4JybIuUATwL.png",
              },
              {
                title: "Efficient management of your social media assets",
                category: "Social Media",
                type: "Marketing",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.59.04%20PM-YgLCSr1PLLXBpWpoLLU4JybIuUATwL.png",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="border-2 border-dashed border-[#2D1537] rounded-lg p-6 space-y-4"
              >
                <div className="relative h-48 -mx-6 -mt-6 mb-6">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#2D1537]">{post.category}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-600">{post.type}</span>
                </div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button className="bg-[#2D1537] hover:bg-[#2D1537] w-full">
                  Read Post
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Grid With Featured Post",
    component: (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              We love writing.
            </h2>
          </div>

          <div className="grid gap-8">
            {/* Featured Post */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.58.05%20PM-KwaFLgx1M7Bt62KnbdJnWjViuhSJhF.png"
                  alt="Featured post"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Enjoying the beach life while on a vacation
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.58.05%20PM-KwaFLgx1M7Bt62KnbdJnWjViuhSJhF.png"
                      alt="Adam Cuppy"
                    />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Adam Cuppy</p>
                    <p className="text-sm text-gray-600">Travel Writer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Posts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Choosing the perfect Safari in Africa",
                "Hiking during the monsoon in Asia",
                "Must carry items while traveling to Thailand",
              ].map((title, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%207.58.05%20PM-KwaFLgx1M7Bt62KnbdJnWjViuhSJhF.png"
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-[#2D1537] transition-colors">
                    {title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function BlogBlocks() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-[#2D1537] inline-block border-b-4 border-[#2D1537]">
              Blog Section
            </h2>
          </div>

          <div className="grid gap-8">
            {blocks.map((block, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border shadow-lg"
              >
                <div className="flex items-center justify-between p-4 border-b bg-white">
                  <span className="text-gray-600">{block.title}</span>
                  <Button variant="link" className="text-[#2D1537] font-medium">
                    View Live Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="relative">{block.component}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
