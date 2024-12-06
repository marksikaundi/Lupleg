import {  RocketIcon, SquareIcon } from "lucide-react"
import Image from "next/image"

export default function TopSection() {
  return (
    <div className="bg-white p-6 md:p-12 ">
      <div className="relative">
        <SquareIcon className="absolute top-0 left-0 text-cyan-400 w-8 h-8 md:w-12 md:h-12" />
        <RocketIcon className="absolute top-0 right-0 text-red-500 w-8 h-8 md:w-12 md:h-12" />
        <SquareIcon className="absolute top-12 right-12 text-yellow-400 w-4 h-4 md:w-6 md:h-6" />
      </div>
      
      <div className="mt-12 md:mt-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2D1537] mb-4">
          Become <span className="bg-yellow-300 px-2">rocket fuel</span> for our mission
        </h1>
        <p className="text-lg md:text-xl text-[#3f3145] mb-8 max-w-3xl mx-auto">
          Partner with us or donate to support our mission to bringing free
          code learning and practice to the world.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
        <Image src="/supports/devc.webp" alt="DevCircle Africa" width={150} height={50} className="h-8 md:h-12 w-auto" />
        <Image src="/supports/vercel.jpg" alt="Vercel" width={150} height={50} className="h-8 md:h-12 w-auto" />
        <Image src="/supports/hostinger.svg" alt="Hostinger" width={80} height={50} className="h-12 md:h-16 w-auto" />
        <Image src="/supports/github.png" alt="Github" width={200} height={50} className="h-8 md:h-12 w-auto" />
      </div>
      
      
    </div>
  )
}