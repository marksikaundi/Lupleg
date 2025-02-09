import Link from "next/link";

export default function ShortCourseCard() {
  return (
    <div className="mt-20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#2D1537] ">
              Short courses available
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-black lg:mx-auto">
              Explore our diverse range of short courses, crafted to empower you
              with the skills and knowledge to excel in your career. From Data
              Science and Machine Learning to Web and Mobile Development,
              Digital Marketing, Freelancing, and Personal Development, we offer
              courses that support your professional growth and personal
              success.
            </p>
          </div>
          <div className="bg-[#2D1537] p-8 rounded-xl border-[#2D1537] border-b-8 ">
            <h2 className="text-3xl font-extrabold text-white ">
              Learn at Your Own Pace with Expert Mentorship
            </h2>
            <p className="mt-4 mb-2 text-lg text-white">
              Our courses are flexible, allowing you to learn at your own pace.
              For added support, you can also connect with a mentor—an expert in
              your field—who will guide you every step of the way.
            </p>
            <Link
              className="mt-6 text-base font-semibold text-white hover:text-white"
              href="https://mentor.lupleg.org"
              target="_blank"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
