import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Help from "@/components/FeaturesCards/Help";
import DragDrop from "@/components/UIPreviews/DragDrop";

export default function DragAndDrop() {
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
        Drag & Drop Area 
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
        Create a Drag & Drop Area using React and Tailwind CSS. This drag & drop
        area should allow users to drag and drop files on a website. The drag &
        drop area should include the following features:
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        This Drag & Drop Area includes the following features:
      </h2>

      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>A visually distinct area for dragging and dropping files.</li>
        <li>Visual feedback when files are being dragged over the area.</li>
        <li>Ability to handle multiple file drops.</li>
        <li>Display of dropped file names.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Here's a breakdown of the component:
      </h2>

      <p className="text-gray-700 mb-8">
        You will use the <b>`useState`</b> hook to manage the dragging state and
        the list of dropped files. The <b>`useCallback`</b> hook is used to
        memoize the event handler functions, optimizing performance. The
        component handles <b>`onDragOver`</b>, <b>`onDragLeave`</b>, and{" "}
        <b>`onDrop`</b> events to provide visual feedback and process dropped
        files. When files are dropped, they are added to the `files` state
        array. The component displays an upload icon and instructional text in
        the drop area. Below the drop area, it lists the names of all dropped
        files.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Here's a preview of the DragDrop:
      </h2>

      <DragDrop />

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Note:</h2>
      <p className="text-gray-700 mb-8">
        This component is styled using Tailwind CSS classes for a clean,
        responsive design. The drop area changes its appearance when files are
        being dragged over it, providing clear visual feedback to the user. The
        component is fully functional and ready to be integrated into your
        project. Feel free to customize the design and functionality to suit
        your needs. Happy coding!
      </p>

      <Help />
    </div>
  );
}
