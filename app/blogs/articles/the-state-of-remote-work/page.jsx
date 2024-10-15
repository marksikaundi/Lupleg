import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnnounceCard from "@/components/FeaturesCards/AnnounceCard";

export default function StateWorkRemote() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link
        href="/blogs"
        className="inline-flex items-center text-sm text-green-900 hover:text-green-800 mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Blog
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        The State of Remote Work in 2024
      </h1>

      <div className="flex items-center mb-6">
        <Image
          src="/mark.jpg"
          alt="Mark Sikaundi"
          width={40}
          height={40}
          className="rounded-full w-10 h-10 mr-3"
        />
        <div>
          <p className="font-medium text-gray-900">Mark Sikaundi </p>
          <p className="text-sm text-gray-500">August 24, 2024</p>
        </div>
      </div>

      <p className="text-gray-700 mb-8">
        In the year 2024, the landscape of work has drastically changed, with
        remote work becoming the new norm for many organizations around the
        world. The COVID-19 pandemic served as a catalyst for this shift, as
        companies were forced to adapt to a remote work model in order to
        continue business operations. However,
        <Link href="#">
          <span className="text-[#F3A833]">as time progressed</span>
        </Link>
        , both employers and employees began to see the benefits of remote work,
        leading to its widespread adoption even after the pandemic subsided.
      </p>

      <p className="text-gray-700 mb-8">
        One of the key reasons for the popularity of remote work is its
        flexibility. Employees have the freedom to work from any location,
        whether it be from home, a co-working space, or even a coffee shop. This
        flexibility allows for a better work-life balance, as employees no
        longer have to commute long distances or adhere to strict office hours.
        Additionally, remote work opens up opportunities for individuals who may
        not have access to traditional office jobs, such as those with
        disabilities or caretaking responsibilities.
      </p>

      <div className="flex justify-center space-x-2 mb-8">
        <div className="w-2 h-2 bg-[#F3A833] rounded-full"></div>
        <div className="w-2 h-2 bg-[#F3A833] rounded-full"></div>
        <div className="w-2 h-2 bg-[#F3A833] rounded-full"></div>
      </div>

      <div className="bg-purple-100 p-8 rounded-lg mb-8">
        <div className="flex justify-center items-center space-x-8">
          <div className="bg-white p-4 rounded-full shadow-lg">
            <div className="w-16 h-16 bg-[#F3A833] rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-sm transform rotate-45"></div>
            </div>
          </div>
          <div className="text-4xl font-bold text-[#F3A833]">+</div>
          <div className="bg-white p-4 rounded-full shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-8 bg-[#F3A833] rounded-sm flex items-center justify-center">
                <div className="w-6 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-4">
        In terms of productivity, many companies have found that their employees
        are actually more productive when working remotely. Without the
        distractions of a busy office environment, employees are able to focus
        on their tasks and complete them in a more efficient manner. This has
        led to a shift in mindset for many employers, who are now more focused
        on results rather than where and how the work is being done.
      </p>

      <p className="text-gray-700 mb-8">
        That being said, remote work is not without its challenges.
        Communication and collaboration can be more difficult in a remote
        setting, as there is often a lack of face-to-face interaction. However,
        advancements in technology have made it easier than ever to stay
        connected, with virtual meetings, project management tools, and instant
        messaging platforms becoming the norm in remote work environments.
      </p>
      <p className="text-gray-700 mb-8">
        Overall, the state of remote work in 2024 is one of adaptation and
        evolution. Companies are embracing this new way of working and reaping
        the benefits of increased flexibility and productivity. As we look
        towards the future, it is clear that remote work is here to stay,
        reshaping the way we think about work and challenging traditional
        notions of the workplace.
      </p>

      <AnnounceCard />
    </div>
  );
}
