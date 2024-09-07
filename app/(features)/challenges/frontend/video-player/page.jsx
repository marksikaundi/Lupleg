import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Help from "@/components/FeaturesCards/Help";
import VideoPreview from "@/components/UIPreviews/VideoPreview";

export default function VideoPlayer() {
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
        Custom Video Player
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
        Create a custom video player using React and Tailwind CSS. The video
        player should have all the components of a standard video player,
        including play and pause functionality, volume control, progress bar
        with scrubbing functionality, and fullscreen mode. The video player
        should be fully responsive and work on all screen sizes. The video
        player should have a custom design using Tailwind CSS classes. The video
        player should be fully functional and ready to be integrated into your
        project. Feel free to customize the design and functionality to suit
        your needs. Happy coding!
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        This Video Player includes the following features:
      </h2>

      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>Play and pause functionality.</li>
        <li>Volume control.</li>
        <li>Progress bar with scrubbing functionality.</li>
        <li>Fullscreen mode.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Here's a breakdown of the component:
      </h2>

      <p className="text-gray-700 mb-8">
        You will use the <b>`useState`</b> hook to manage the video player state
        and the <b>`useRef`</b> hook to reference the video element. The
        component will handle the <b>`play`</b>, <b>`pause`</b>, <b>`volume`</b>
        , <b>`progress`</b>, and <b>`fullscreen`</b> functionality. The video
        player will include a custom design using Tailwind CSS. The video player
        should be responsive and work on all screen sizes.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Here's a preview of the video player:
      </h2>
      <VideoPreview />

      <h2 className="text-2xl font-bold text-gray-900 my-6">Note:</h2>
      <p className="text-gray-700 mb-8">
        This component is styled using Tailwind CSS classes for a clean,
        responsive design. The video player includes custom controls and
        functionality for a seamless user experience. The video player is fully
        functional and ready to be integrated into your project. Feel free to
        customize the design and functionality to suit your needs. Happy coding!
      </p>

      <Help />
    </div>
  );
}
