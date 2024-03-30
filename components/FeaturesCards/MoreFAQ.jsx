"use client";
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What can I expect from Lupleg?",
    answer:
      " Lupleg provides coding challenges that are designed to improve your HTML, CSS, and JavaScript skills. The challenges are varied and range in difficulty levels.  ",
  },
  {
    question: "What level of experience do i need ?",
    answer:
      "Our coding challenges are suitable for developers of all experience levels, from beginners to advanced coders. The challenges are designed to be challenging yet accessible.",
  },
  {
    question: "How often are new challenge added?",
    answer:
      " We add a new coding challenge every day, so you can constantly improve your coding skills.",
  },
  {
    question: "How do I submit my solution?",
    answer:
      "You can submit your solution by clicking the 'Submit Solution' button on the challenge page. You will be prompted to enter your code and submit it for review. Once you submit your solution, you will receive feedback on your code.",
  },
  {
    question: "How do I know if my solution is correct?",
    answer:
      "Once you submit your solution, our team of expert reviewers will review your code and provide feedback on your solution. You will receive a score based on the quality of your code.",
  },
  {
    question: "How can I improve my coding skills?",
    answer:
      "The best way to improve your coding skills is to practice regularly. Lupleg provides daily coding challenges that are designed to help you improve your coding skills. You can also participate in our coding challenges and receive feedback on your code.",
  },
  {
    question: "How can I contact Lupleg?",
    answer: "You can contact Lupleg by sending an email to dev@lupleg.website",
  },
];

const MoreFAQ = ({ data }) => {
  const [isOpen, setIsOpen] = useState(Array(data).fill(false));

  const toggleAnswer = (index) => {
    setIsOpen((prevOpen) => {
      const updatedOpen = [...prevOpen];
      updatedOpen[index] = !prevOpen[index];
      return updatedOpen;
    });
  };

  useEffect(() => {
    setIsOpen((prevOpen) => {
      prevOpen[0] = true;
      return prevOpen;
    });
  }, []);

  return (
    <div className="bg-green-950 ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="  overflow-hidden">
          <div className="flex flex-col items-center justify-center px-4 py-5 sm:p-6 ">
            <h2 className="  text-3xl md:text-5xl font-bold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <div className="mt-6">
              <dl className="sm:divide-y sm:divide-gray-600">
                {faqData.map((item, index) => (
                  <div key={index} className="py-3 sm:py-4">
                    <div className="flex justify-between items-center">
                      <dt
                        className={` lg:text-xl text-lg font-medium text-white cursor-pointer flex items-center ${
                          isOpen[index] ? "text-white" : ""
                        }`}
                        onClick={() => toggleAnswer(index)}
                      >
                        {item.question}
                        {isOpen[index] ? (
                          <FaMinus className="ml-4" />
                        ) : (
                          <FaPlus className="ml-4" />
                        )}
                      </dt>
                    </div>
                    {isOpen[index] && (
                      <dd className="mt-2 lg:text-lg text-md text-gray-200">
                        {item.answer}
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFAQ;
