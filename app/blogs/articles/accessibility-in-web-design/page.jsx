import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnnounceCard from "@/components/FeaturesCards/AnnounceCard";

export default function AccessibilityWeb() {
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
        Accessibility in Web Design
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
        In today's digital age, having an accessible website is not just a good
        practice, it's a legal requirement. Accessibility in web design ensures
        that all individuals, regardless of their abilities, can access and use
        a website effectivel. , From those with visual or hearing impairments to
        those with motor disabilities, it's important to make sure your website
        is inclusive to all users.
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

      <div className="border-l-4 border-green-900 ">
        <ul className="text-gray-700 mb-8 list-none ml-2 my-6">
          <li>
            ✅ Use clear and simple language: Avoid using jargon or complex
            terms that may confuse users. Keep your content concise and easy to
            understand.
          </li>
          <li>
            ✅ Use alt text for images: Alt text provides a text alternative for
            images on a website. This is important for individuals who are
            visually impaired and use screen readers to navigate a website.
          </li>
          <li>
            ✅ Provide keyboard navigation: Make sure your website can be easily
            navigated using only a keyboard. This is especially important for
            users with motor disabilities who may have difficulty using a mouse.
          </li>
          <li>
            ✅ Use proper heading structures: Use headings to organize your
            content and make it easier for users to navigate. Headings also help
            users with screen readers understand the structure of the page.
          </li>
          <li>
            ✅ Ensure color contrast: Make sure there is enough contrast between
            text and background colors to ensure readability for all users,
            including those with visual impairments.
          </li>
          <li>
            ✅ Provide captions for videos: Captioning videos ensures that users
            who are deaf or hard of hearing can access the content. It also
            benefits users who may be watching videos in a loud environment or
            without sound.
          </li>

          <li>
            ✅ Test your website: Use accessibility tools and conduct user
            testing to ensure your website is accessible to all users. Get
            feedback from individuals with disabilities to identify any barriers
            to access.
          </li>
        </ul>
      </div>

      <p className="text-gray-700 mb-8">
        By following these tips and guidelines, you can create a website that is
        accessible to everyone. Accessibility in web design not only benefits
        individuals with disabilities but also improves usability for all users.
        Remember, creating an inclusive website is not only the right thing to
        do, but it's also good for business. Make accessibility a priority in
        your web design process and ensure that your website is welcoming to all
        users.
      </p>

      <AnnounceCard />
    </div>
  );
}
