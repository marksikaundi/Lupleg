import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Help from "@/components/FeaturesCards/Help";

export default function DarkModeSwitcher() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link
        href="/challenges/frontend"
        className="inline-flex items-center text-sm text-[#2D1537] hover:text-[#2D1537] mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Dark Mode Toggle Switcher
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
        Create a Dark Mode Toggle using React and Tailwind CSS. This dark mode
        toggle should allow users to switch between light and dark mode on a
        website. The dark mode toggle should include the following features:
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        This Dark Mode Toggle includes the following features:
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>A toggle switch to switch between light and dark mode</li>
        <li>Dark mode should be activated when the toggle is switched on</li>
        <li>Light mode should be activated when the toggle is switched off</li>
        <li>
          The toggle switch should have a smooth transition between light and
          dark mode when toggled on and off
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Dark Mode Toggle Example
      </h2>
      <div className="flex justify-center items-center space-x-8 mb-8">
        <div className="bg-white p-4 rounded-full shadow-lg">
          <div className="w-16 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
          </div>
        </div>
        <div className="text-4xl font-bold text-gray-800">+</div>
        <div className="bg-white p-4 rounded-full shadow-lg">
          <div className="w-16 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Light Mode Toggle Example
      </h2>
      <div className="flex justify-center items-center space-x-8 mb-8">
        <div className="bg-white p-4 rounded-full shadow-lg">
          <div className="w-16 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="text-4xl font-bold text-gray-800">+</div>
        <div className="bg-white p-4 rounded-full shadow-lg">
          <div className="w-16 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4">
        The Dark Mode Toggle component should do the following:
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>
          It uses the <b>`useTheme`</b> hook from <b>`next-themes`</b> to manage
          the theme state.
        </li>
        <li>
          The toggle is implemented as a dropdown menu with options for Light,
          Dark, and System themes.
        </li>
        <li>
          The button displays a sun icon in light mode and a moon icon in dark
          mode, with a smooth transition between them.
        </li>
        <li>
          It uses the <b>`Button`</b> and <b>`DropdownMenu`</b> components from
          shadcn/ui for consistent styling.
        </li>
        <li>
          The component is accessible, with appropriate aria labels and keyboard
          navigation support
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Fell free to useTheme hook from next-themes
      </h2>

      <p className="text-gray-700 mb-8">
        You can use the <b>useTheme</b> hook from <b>next-themes</b> to manage
        the theme state. The <b>useTheme</b> hook provides a <b>theme</b> object
        with the following properties:
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Note:</h2>
      <p className="text-gray-700 mb-8">
        The component should use Tailwind CSS for styling, making it easy to
        customize colors, spacing, and other design aspects. You can use the
        Tailwind CSS CDN to include Tailwind CSS in your project. You can also
        use the Tailwind CSS CLI to generate a Tailwind CSS configuration file
        and customize the default theme.
      </p>

      <Help />
    </div>
  );
}
