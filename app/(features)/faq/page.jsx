import React from "react";

function FAQ() {
  return (
    <div className="w-full bg-transparent">
      <div className="flex flex-col md:flex-row lg:gap-20 gap-8 md:gap-12 container mx-auto lg:py-16 py-10 px-8">
        <div className="container flex flex-col md:w-3/5 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-2 gap-3">
          <div>
            <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
              Some Frequently Asked{" "}
              <span className=" text-green-600">Questions</span>
            </h2>
          </div>
          <div className="text-green-900 gap-4 flex flex-col">
            <div className="flex gap-2">
              <h3 className="md:text-xl lg:text-2xl text-lg font-bold">
                What is the guarantee that we’ll be getting top talents?
              </h3>
              <div className="bg-green-200 text-xs md:text-sm px-4 py-2 rounded-2xl">
                For Business
              </div>
            </div>

            <p className="lg:text-sm xl:text-lg 2xl:text-xl md:text-xs">
              Our rigorous vetting, training, and recruiting processes help us
              effectively filter through the pool of candidates to locate the
              top talents. At Zuri, we have a proven track record of delivering
              top-quality candidates to our clients and are confident in our
              ability to help you find the right talent for your organization.
            </p>
          </div>
          <div className="text-green-900 gap-4 flex flex-col">
            <div className="flex gap-2">
              <h3 className="md:text-xl lg:text-2xl text-lg font-bold">
                How do I start as a complete beginner?
              </h3>
              <div className="bg-green-200 text-xs md:text-sm px-4 py-2 rounded-2xl">
                Program
              </div>
            </div>

            <p className="lg:text-sm xl:text-lg 2xl:text-xl md:text-xs">
              To start as a complete beginner on Zuri training, you can sign up
              for an account and take advantage of our onboarding resources and
              support.
            </p>
          </div>
          <div className="text-green-900 gap-4 flex flex-col">
            <div className="flex gap-2">
              <h3 className="md:text-xl lg:text-2xl text-lg font-bold">
                Is there a capacity max to the of beneficiaries we can have?
              </h3>
              <div className="bg-green-200 text-xs md:text-sm px-4 py-2 rounded-2xl">
                For NGOs
              </div>
            </div>

            <p className="lg:text-sm xl:text-lg 2xl:text-xl md:text-xs">
              There is no specific capacity max for beneficiaries, it depends on
              the plan you choose and the needs of your organization.
            </p>
          </div>
          <div className="text-green-900 gap-4 flex flex-col">
            <div className="flex gap-2">
              <h3 className="md:text-xl lg:text-2xl text-lg font-bold">
                How much does it cost to use ZuriBoard?
              </h3>
              <div className="bg-green-200 text-xs md:text-sm px-4 py-2 rounded-2xl">
                Products
              </div>
            </div>

            <p className="lg:text-sm xl:text-lg 2xl:text-xl md:text-xs">
              The cost of using ZuriBoard depends on the specific plan you
              choose and the size of your organization. We offer a variety of
              pricing options to meet the needs of different businesses.
            </p>
          </div>
        </div>
        <div className="md:w-2/5 bg-green-300 rounded-md">
          <img
            src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e56544e17a293a19177f89_faq%20img-p-500.webp"
            className="object-cover"
            alt="Talent Image"
          />
        </div>
      </div>

      <div className="flex flex-col py-16">
        <div className="flex flex-col gap-4 md:mb-10 mb-6">
          <h3 className="text-center text-green-600">Helpdesk</h3>
          <p className="text-center text-green-900 md:text-5xl text-3xl font-bold">
            Need some more help? <br />
            Visit our help desk
          </p>
        </div>
        <div className="bg-green-800 rounded-lg transition hover:-translate-y-1 w-max mx-auto group cursor-pointer">
          <div className="animated-border after:opacity-100 before:opacity-100 p-0.5 rounded-lg text-green-300 flex justify-center items-center">
            <a
              className="bg-green-800 text-white text-lg font-bold py-4 px-8 cursor-pointer relative w-full rounded-lg group-hover:bg-green-700 z-10"
              href="/helpdesk">
              Go to Help Desk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
