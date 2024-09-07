import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Help from "@/components/FeaturesCards/Help";
import NavbarPreview from "@/components/UIPreviews/NavbarPreview";

export default function Navbar() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link
        href="/challenges/frontend"
        className="inline-flex items-center text-sm text-green-900 hover:text-green-800 mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">Navbar UI 001</h1>

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
        Create a responsive navigation bar using React and Tailwind CSS. This
        navigation bar should be mobile-friendly with a hamburger menu for
        smaller screens and a full menu for larger screens.
      </p>
      <p>
        This responsive navigation bar component should includes the following
        features:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>A logo placeholder on the left side.</li>
        <li>
          Navigation links that are visible on larger screens (md breakpoint and
          above).
        </li>
        <li>
          A hamburger menu button that appears on smaller screens (below md
          breakpoint).
        </li>
        <li>
          A dropdown menu for mobile views that toggles when the hamburger menu
          is clicked.
        </li>
        <li>Smooth transitions for the mobile menu using React state.</li>
        <li>Accessible design with proper aria labels and semantic HTML.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Here's a preview of Navbar:
      </h2>
      <NavbarPreview />

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Note:</h2>
      <p className="text-gray-700 mb-8">
        The component should use Tailwind CSS for styling, making it easy to
        customize colors, spacing, and other design aspects. The navigation bar
        must be responsive and adapts to different screen sizes: the full menu
        should be able to be displayed on larger screens, while a hamburger menu
        is shown on smaller screens. The dropdown menu should be implemented
        using React state to toggle visibility when the hamburger menu is
        clicked. The design is accessible and uses semantic HTML for proper
        screen reader support.
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

      <Help />
    </div>
  );
}
