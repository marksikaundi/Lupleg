import Publications from "@/components/LastUpdated/Publications";
import React from "react";
import { LuListStart } from "react-icons/lu";
import MarkAuthor from "@/components/Trainers/MarkAuthor";

export default function AboutMentorship() {
  return (
    <div class="flex flex-col items-center container px-4 mx-auto">
      <div class=" max-w-2xl ml-4 flex-1 [&amp;&gt;p]:mb-12 [&amp;&gt;h2]:text-xl [&amp;&gt;h2]:font-bold">
        <p className="pt-6 text-md">
          The mentorship program is designed to help you become successful
          software developer. The program is divided into six core months, each
          focusing on a specific key part to help you become a successful in the
          tech industry:
        </p>
        <h2 className="font-mono font-bold my-6 text-lg ">
          Program Structure:
        </h2>
        <p className="text-md">
          The program is divided into six core months, each focusing on a
          specific key part to help you become a successful in the tech
          industry: Ranging from basic programming knowledge to a job-ready
          software developer. This program is far more than just a coding
          bootcamp. It is a mentorship program that will help you become a
          successful software developer whether you are a beginner or an expert.
        </p>

        <ul className="px-6 py-2 list-disc"></ul>

        <h2 className="font-mono font-bold my-6 text-lg ">
          {" "}
          About curriculum:
        </h2>
        <p className="text-md">
          The curriculum is designed to be flexible and can be tailored to your
          needs. It is a combination of videos, quizzes, and projects that will
          help you learn and understand the key concepts of software
          development. The curriculum is designed to be flexible and can be
          tailored to your needs. It is a combination of videos, quizzes, and
          projects that will help you learn and understand the key concepts of
          software development.
        </p>
      </div>

      <div className="pt-10">
        <MarkAuthor />
      </div>
    </div>
  );
}
