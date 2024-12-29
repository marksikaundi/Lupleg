import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnnounceCard from "@/components/FeaturesCards/AnnounceCard";

export default function Announcements() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link
        href="/blogs"
        className="inline-flex items-center text-sm text-[#2D1537] hover:text-[#2D1537] mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Blog
      </Link>

      <h1 className="text-4xl font-bold text-green-950 mb-6">
        Scholarships at Lupleg
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
          <p className="text-sm text-gray-500">September 03, 2024</p>
        </div>
      </div>

      <p className="text-gray-700 mb-8">
        We are pleased to announce, that we are rolling out some scholarship to
        20 Students. The scholarship will let the student gain and aquire in
        demand skills in the ecosystem of technology. So if you someone who can
        revelage this opportunity, you can reachout or email us once the program
        is rolled out. To apply simply follow this link here:{" "}
        <Link href="mailto:writer@lupleg.org">
          <span className="text-[#F3A833]">
            Apply now to join our Mentorships25
          </span>
        </Link>
        , and gain skills that are on demand. During the program, we shall also
        offer a wide range of workshops and events to help you develop your
        skills and build your network. Our goal is to help you succeed in your
        studies and achieve your goals. We look forward to welcoming you to our
        Mentorship24!
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
        It's a huge opportunity not for one but to all. Do keep in mind that we
        have some slight requirements you may need to have: Now because of it
        being done entirely online, you will need to have access to a{" "}
        <span className="text-black">Computer</span>
        where all learning will be done from, you are also required to have
        access to the internet{" "}
        <span className="text-black">("Speed can be moderate")</span> and last
        but not least, you must be able to commute to{" "}
        <span className="text-black">10hrs in a week</span>.
      </p>

      <p className="text-gray-700 mb-8">
        The scholarships will cover the cost of tuition for the Lupleg learning
        community, as well as provide additional support and resources to help
        students succeed. We are excited to partner with Warrant to provide
        these scholarships, and we look forward to welcoming students to our
        community.
      </p>

      <p className="text-gray-700 mb-8">
        Now because this is fully funded and you will not pay a single dollar,
        we do have some rules and laws which you will need to adhere or else you
        will be dismiss: ofcourse you are required to join and actively
        participate during the program. If you are asigned to work in groups, do
        as it has been prepared. If you happen to refrain from following simple
        instructions, we do not have a choice but to revork your scholarship.
        Therefore you are encouraged to actively participate during the program.
      </p>

      <h1 className="text-2xl font-bold text-green-950 mb-6">
        What if you want to drop out of the program
      </h1>
      <p className="text-gray-700 mb-8">
        If you decide to drop out of the program, you will need to inform us
        immediately. If you do not inform us, we will assume that you are still
        participating in the program. If you drop out of the program, you will
        not be able to rejoin at a later date. We will also not be able to
        provide you with a refund for any tuition or fees that you have paid. If
        you have any questions about the program or the scholarships, please do
        not hesitate to contact us. We are here to help you succeed and achieve
        your goals. We look forward to welcoming you to our community and
        helping you develop your skills and build your network. Thank you for
        your interest in our scholarships, and we hope to see you soon!{" "}
      </p>

      <h1 className="text-2xl font-bold text-green-950 mb-6">
        If you fail to meet the requirements
      </h1>
      <p className="text-gray-700 mb-8">
        If you fail to meet the requirements of the scholarships, you will be
        dismissed from the program. You will not be able to rejoin at a later
        date. We will also not be able to provide you with a refund for any
        tuition or fees that you have paid. If you have any questions about the
        program or the scholarships, please do not hesitate to contact us. We
        are here to help you succeed and achieve your goals. We look forward to
        welcoming you to our community and helping you develop your skills and
        build your network. Thank you for your interest in our scholarships, and
        we hope to see you soon!{" "}
      </p>

      <AnnounceCard />
    </div>
  );
}
