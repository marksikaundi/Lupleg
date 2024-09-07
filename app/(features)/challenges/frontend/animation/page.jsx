import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Help from "@/components/FeaturesCards/Help";
import AnimatedPreview from "@/components/UIPreviews/AnimatedPreview";

export default function AnimatedTransitions() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link
        href="/challenges/frontend"
        className="inline-flex items-center text-sm text-green-900 hover:text-green-800 mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Animated Page Transitions
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
        Create animated transitions using React and Framer Motion. Framer Motion
        is a popular library for creating smooth animations in React
        applications. The animated transitions should include the following
        features:
      </p>
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        This component demonstrates three types of animated transitions:
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>
          Fade Transition: The first element fades in and out using opacity.
        </li>
        <li>Scale Transition: The second element scales in and out.</li>
        <li>
          Slide Transition: The third element slides in and out from the right.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Here's a breakdown of the key features:
      </h2>

      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>
          {" "}
          We use the <b>`useState`</b> hook to manage the visibility state of
          the elements.
        </li>
        <li>
          {" "}
          The <b>`AnimatePresence`</b> component from Framer Motion is used to
          handle exit animations.
        </li>
        <li>
          {" "}
          Each <b>`motion.div`</b> has <b>`initial`</b>, <b>`animate`</b>, and{" "}
          <b>`exit`</b> props that define the animation states.
        </li>
        <li>
          {" "}
          The slide transition uses a spring animation for a more dynamic
          effect.
        </li>
        <li>
          {" "}
          The layout is responsive, using a grid that adjusts from 1 column on
          mobile to 3 columns on larger screens.
        </li>
        <li>
          {" "}
          We're using the <b>`Button`</b> component from the shadcn/ui library
          for consistency with the Vercel design system.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Here's a preview of the Animated page:
      </h2>

      <AnimatedPreview />

      <h2 className="text-2xl font-bold text-gray-900 my-6">Note:</h2>
      <p className="text-gray-700 mb-8">
        This example provides a good starting point for creating animated
        transitions in your React application. You can further customize the
        animations by adjusting the properties in the <b>`initial`</b>,{" "}
        <b>`animate`</b>, and
        <b>`exit`</b> objects, or by using different animation types provided by
        Framer Motion. Feel free to experiment with different animations and
        styles to create unique transitions for your project. Happy coding!
      </p>

      <Help />
    </div>
  );
}
