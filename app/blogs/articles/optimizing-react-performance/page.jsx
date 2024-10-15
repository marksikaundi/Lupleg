import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnnounceCard from "@/components/FeaturesCards/AnnounceCard";

export default function OptimizingReact() {
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
        Optimizing React Performance
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
        React is a powerful JavaScript library that allows developers to create
        dynamic and responsive user interfaces. However, as your application
        grows in complexity, you may notice a decrease in performance. In order
        to optimize the performance of your React application, there are several
        advanced techniques that you can implement.
      </p>
      <p className="text-gray-700 mb-4">
        One of the first techniques to consider is code splitting. This involves
        breaking up your code into smaller chunks so that only the necessary
        parts are loaded when needed. This can significantly improve the loading
        time of your application and reduce the overall bundle size.
      </p>
      <p className="text-gray-700 mb-4">
        Another technique to improve performance is memoization. Memoization is
        the process of storing the results of expensive function calls and
        returning the cached result when the same inputs occur again. This can
        help reduce unnecessary re-renders and improve the efficiency of your
        application.
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

      <p className="text-gray-700 mb-8">
        Furthermore, you can utilize pure components to help prevent unnecessary
        re-renders. By making sure that your components only re-render when
        their props or state change, you can optimize the performance of your
        application.
      </p>
      <p className="text-gray-700 mb-4">
        Additionally, it is important to utilize tools such as React profiler to
        identify performance bottlenecks in your application. By using these
        tools, you can pinpoint areas that need improvement and make the
        necessary optimizations.
      </p>
      <p className="text-gray-700 mb-4">
        Overall, optimizing the performance of your React application requires a
        combination of techniques such as code splitting, memoization, pure
        components, and utilizing performance tools. By implementing these
        advanced techniques, you can improve the speed and efficiency of your
        application, providing a better user experience for your users.
      </p>
      <AnnounceCard />
    </div>
  );
}
