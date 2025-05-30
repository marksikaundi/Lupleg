import MoreFQA from "@/components/FeaturesCards/MoreFAQ";
import Link from "next/link";
import React from "react";

export default function Challenges() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-black drop-shadow-lg text-center max-w-3xl">
          Challenges you can solve to
          <span className="text-[#2D1537]"> improve </span>your
          <span className="text-[#2D1537]"> coding </span>skills!
        </h1>
        <div className="relative my-16 text-center z-20">
          <p className="text-black text-lg mt-4 mb-8 w-96 max-w-full">
            Join{" "}
            <b className="mr-2">
              <Link className="cursor-pointer" href="/challenges/frontend">
                10240
              </Link>
              + developers
            </b>
            supercharging their coding skills by building projects.
          </p>
          <div className="bg-[#2D1537] rounded-lg transition hover:-translate-y-1 w-max mx-auto group cursor-pointer">
            <div className="animated-border after:opacity-100 before:opacity-100 p-0.5 rounded-lg text-[#2D1537] flex justify-center items-center">
              <Link
                className="bg-[#2D1537] text-white text-lg font-bold py-4 px-8 cursor-pointer relative w-full rounded-lg group-hover:bg-[#2D1537] z-10"
                href="/challenges/start-coding"
              >
                Start coding
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#2D1537] text-white p-4 rounded-md w-full lg:max-w-[800px]">
          <div className="relative h-96 lg:h-[450px] 2xl:h-[600px] pb-12">
            <div className="bg-[#2D1537] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-3/4 md:scale-[1.5] opacity-75 blur-3xl -z-10 w-96 h-96 rounded-full"></div>
            <p className="text-lg text-center mb-4">
              <strong>Challenge</strong>
            </p>
            <div className="relative w-full h-full">
              <div className="w-full h-full relative cursor-pointer">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "absolute",
                    inset: 0,
                  }}
                >
                  <img
                    alt="Challenge Image"
                    sizes="100vw"
                    src="https://utfs.io/f/8f537474-0d20-4193-b7ee-96cf95a88ea2-u9ii4h.webp"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover h-auto w-full rounded-md"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </span>
                <span className="flex justify-center items-center absolute top-4 right-4 bg-[#2D1537] w-10 h-10 rounded-full text-[#2D1537] hover:scale-105 hover:text-[#2D1537] transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M16 4l4 0l0 4"></path>
                    <path d="M14 10l6 -6"></path>
                    <path d="M8 20l-4 0l0 -4"></path>
                    <path d="M4 20l6 -6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-[#2D1537] flex flex-col items-center justify-center pb-24 pt-48 p-4 w-full -mt-24 md:-mt-36">
        <small className="uppercase font-bold">features</small>
        <h2 className="text-4xl text-center font-bold mt-2 text-black">
          What makes LupLeg special
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 container mt-24 mx-auto">
          <div className="text-center">
            <span className="inline-block bg-[#2D1537] rounded-xl p-3 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11.5 17h-7.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v9"></path>
                <path d="M3 13h18"></path>
                <path d="M8 21h3.5"></path>
                <path d="M10 17l-.5 4"></path>
                <path d="M20 21l2 -2l-2 -2"></path>
                <path d="M17 17l-2 2l2 2"></path>
              </svg>
            </span>
            <h3 className="text-2xl font-bold my-4 text-black">
              Hundreds of Coding Challenges
            </h3>
            <p className="text-lg text-[#343943]">
              There are hudrends of coding challenge awaiting for you every time
              you want to improve your coding skills.
            </p>
          </div>
          <div className="text-center">
            <span className="inline-block bg-[#2D1537] rounded-xl p-2 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                <path d="M6 8h.01"></path>
                <path d="M9 8h.01"></path>
              </svg>
            </span>
            <h3 className="text-2xl font-bold my-4 text-black">
              In-browser IDE
            </h3>
            <p className="text-lg text-[#343943]">
              We built an in-browser IDE just for you so you can get up and
              running fast!
            </p>
          </div>
          <div className="text-center">
            <span className="inline-block bg-[#2D1537] rounded-xl p-3 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9"></path>
                <path d="M7 20l10 0"></path>
                <path d="M9 16l0 4"></path>
                <path d="M15 16l0 4"></path>
                <path d="M17 4h4v4"></path>
                <path d="M16 9l5 -5"></path>
              </svg>
            </span>
            <h3 className="text-2xl font-bold my-4 text-black">
              Showcase Your Skills
            </h3>
            <p className="text-lg text-[#343943]">
              All the projects you're building will be available on your github
              profile and you can easily showcase them to a potential client or
              employer.
            </p>
          </div>
          <div className="text-center">
            <span className="inline-block bg-[#2D1537] rounded-xl p-3 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="9" cy="12" r="1"></circle>
                <circle cx="15" cy="12" r="1"></circle>
                <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
                <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
                <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
              </svg>
            </span>
            <h3 className="text-2xl font-bold my-4 text-black">
              Supportive Community
            </h3>
            <p className="text-lg text-[#343943]">
              Join our Discord community where like-minded developers work &
              collaboring together to tackle the coding challenges.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-white py-12 text-center w-full">
        <h2 className="text-4xl font-bold mb-6 text-black">
          Join the challenge now!
        </h2>
        <a
          className="inline-block bg-[#2D1537] text-white text-lg font-bold rounded-lg py-4 px-8 cursor-pointer hover:opacity-80"
          href="/challenges/frontend"
        >
          Join challenge
        </a>
      </section>
      <MoreFQA />
    </div>
  );
}
