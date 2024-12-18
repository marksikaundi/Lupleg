import { Plus } from "lucide-react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function MentoringFAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <nav className="border-b sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex items-center h-16 space-x-8 whitespace-nowrap">
            <Link
              href="/docs"
              className="text-gray-600 hover:text-gray-900 flex-shrink-0"
            >
              <IoHome className="h-5 w-5" />
            </Link>
            <Link
              href="/docs/using"
              className=" text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Using Lupleg
            </Link>
            <Link
              href="/docs/building"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Building Lupleg
            </Link>
            <Link
              href="/docs/mentoring"
              className=" text-[#2D1537] border-b-2 border-[#2D1537] hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Mentoring
            </Link>
            <Link
              href="/docs/community"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Community
            </Link>
            <Link
              href="/docs/tracks"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Track Specific
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex pt-16">
        {" "}
        {/* Sidebar */}
        <aside className="w-64 border-r p-4 hidden md:block">
          <nav className="space-y-4">
            <div className="space-y-2">
              <Link
                href="/docs/mentoring"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Mentoring
              </Link>
              <Link
                href="/docs/mentoring/choosing"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Choosing a Solution
              </Link>
              <Link
                href="/docs/mentoring/feedback"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                How to give great feedback
              </Link>
              <Link
                href="/docs/mentoring/mentoring-faq"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Mentoring FAQ
              </Link>
              <Link
                href="/docs/mentoring/representations"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                How to give feedback on representations
              </Link>
              <Link
                href="/docs/mentoring/markdown"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                How to use Markdown in mentoring
              </Link>

              <Link
                href="/docs/mentoring/mindset"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                The Mentoring Mindset
              </Link>

              <Link
                href="/docs/mentoring/tips"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Mentoring Tips
              </Link>
            </div>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-[#2D1537] mb-4">
              Frequently asked mentoring questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              An assortment of commonly asked questions related to mentoring
            </p>

            {/* Decorative Wave */}
            <div className="mb-8">
              <svg className="text-[#2D1537]" viewBox="0 0 100 20" width="100">
                <path
                  d="M0 10 Q25 20 50 10 T100 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <p id="community" className="text-gray-700 mb-8">
              Welcome to the Lupleg Mentoring Team. Follow the links below for
              guides on how to get started with mentoring on Lupleg!
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              What is the purpose of mentoring?
            </h2>

            <p className="text-gray-700 mb-8">
              The purpose of mentoring is to provide guidance and support to
              help mentees grow and develop in their careers. Mentoring is a
              two-way relationship that benefits both the mentor and the mentee.
              Mentors share their knowledge and experience, while mentees gain
              valuable insights and advice.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              How do I become a mentor?
            </h2>

            <p className="text-gray-700 mb-8">
              To become a mentor, you need to have experience in the field you
              want to mentor in. You should also have good communication skills
              and be willing to share your knowledge and expertise with others.
              If you are interested in becoming a mentor, you can sign up on the
              Lupleg platform and create a mentor profile.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              How do I find a mentor?
            </h2>

            <p className="text-gray-700 mb-8">
              To find a mentor, you can search for mentors on the Lupleg
              platform. You can filter mentors by industry, expertise, and
              availability to find a mentor that matches your needs. Once you
              find a mentor you are interested in, you can send them a message
              to request a mentoring session.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              How do I schedule a mentoring session?
            </h2>

            <p className="text-gray-700 mb-8">
              To schedule a mentoring session, you can send a message to the
              mentor you want to meet with. You can discuss your availability
              and preferences with the mentor to find a time that works for both
              of you. Once you have agreed on a time, you can schedule the
              mentoring session on the Lupleg platform.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              How do I prepare for a mentoring session?
            </h2>

            <p className="text-gray-700 mb-8">
              To prepare for a mentoring session, you should think about what
              you want to get out of the session. You should also prepare any
              questions or topics you want to discuss with your mentor. It can
              be helpful to do some research on your mentor's background and
              expertise so you can ask informed questions.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              What should I expect from a mentoring session?
            </h2>

            <p className="text-gray-700 mb-8">
              In a mentoring session, you can expect to receive guidance and
              support from your mentor. Your mentor will share their knowledge
              and experience with you and provide advice on how to achieve your
              goals. You can also expect to have an open and honest conversation
              with your mentor about your career and development.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              How do I give feedback to my mentor?
            </h2>

            <p className="text-gray-700 mb-8">
              Giving feedback to your mentor is an important part of the
              mentoring relationship. You should be honest and constructive in
              your feedback, and focus on specific examples and behaviors. You
              should also be open to receiving feedback from your mentor and use
              it to improve your mentoring skills.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              How do I end a mentoring relationship?
            </h2>

            <p className="text-gray-700 mb-8">
              Ending a mentoring relationship can be difficult, but it is
              important to do so in a respectful and professional manner. You
              should have an open and honest conversation with your mentor about
              why you want to end the relationship and thank them for their
              support. You should also offer to stay in touch and provide
              updates on your progress.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              How do I become a better mentor?
            </h2>

            <p className="text-gray-700 mb-8">
              To become a better mentor, you should focus on building a strong
              relationship with your mentee and providing them with guidance and
              support. You should also be open to feedback and willing to
              reflect on your mentoring skills. You can also seek out
              professional development opportunities to improve your mentoring
              skills.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              How do I become a better mentee?
            </h2>

            <p className="text-gray-700 mb-8">
              To become a better mentee, you should be proactive in seeking out
              mentoring opportunities and taking advantage of the guidance and
              support your mentor provides. You should also be open to feedback
              and willing to learn from your mentor's experience. You can also
              set goals for your mentoring relationship and track your progress
              over time.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              How do I provide feedback on a mentoring session?
            </h2>

            <p className="text-gray-700 mb-8">
              Providing feedback on a mentoring session is an important part of
              the mentoring process. You should be honest and constructive in
              your feedback, and focus on specific examples and behaviors. You
              should also be open to receiving feedback from your mentor and use
              it to improve your mentoring skills.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              How do I track my progress in a mentoring relationship?
            </h2>

            <p className="text-gray-700 mb-8">
              To track your progress in a mentoring relationship, you can set
              goals and milestones for your mentoring sessions. You can also
              keep a journal of your mentoring sessions and reflect on what you
              have learned and achieved. You should also ask for feedback from
              your mentor and use it to improve your mentoring skills.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              How do I provide feedback on a mentor's profile?
            </h2>

            <p className="text-gray-700 mb-8">
              Providing feedback on a mentor's profile is an important part of
              the mentoring process. You should be honest and constructive in
              your feedback, and focus on specific examples and behaviors. You
              should also be open to receiving feedback from your mentor and use
              it to improve your mentoring skills.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              How do I report a mentor?
            </h2>

            <p className="text-gray-700 mb-8">
              If you have concerns about a mentor's behavior or conduct, you can
              report them to the Lupleg team. You should provide details of the
              incident or behavior you are concerned about, and the Lupleg team
              will investigate the matter and take appropriate action.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              How do I provide feedback on the Lupleg platform?
            </h2>

            <p className="text-gray-700 mb-8">
              Providing feedback on the Lupleg platform is an important way to
              help us improve our services. You can provide feedback by sending
              us an email or by filling out our feedback form on the Lupleg
              website. We welcome all feedback and will use it to make
              improvements to the platform.
            </p>

            <h2 className="text-2xl font-bold text-[#2D1537] mb-4">
              How do I contact the Lupleg team?
            </h2>

            <p className="text-gray-700 mb-8">
              If you have any questions or concerns, you can contact the Lupleg
              team by sending us an email or by filling out our contact form on
              the Lupleg website. We are here to help and will respond to your
              inquiry as soon as possible.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
