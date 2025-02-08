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
              We have a variety of short courses that are designed to help you
              to learn and grow in your career. We have courses in Data Science,
              Machine Learning, Web Development, Mobile Development, Digital
              Marketing Skills, Freelancing and Personal Development Skills.
            </p>
          </div>
          <div className="bg-[#2D1537] p-8 rounded-xl border-[#2D1537] border-b-8 ">
            <h2 className="text-3xl font-extrabold text-white ">
              At your own pace or with a mentor
            </h2>
            <p className="mt-4 mb-2 text-lg text-white">
              Our courses are designed to be taken at your own pace, but you can
              also get a mentor to help you along the way. Our mentors are
              experts in their fields and are here to help you.
            </p>
            <Link
              className="mt-6 text-base font-semibold text-white hover:text-white"
              href="https://mentor.lupleg.org"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
