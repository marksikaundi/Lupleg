import React from "react";
import CardSection from "@/components/FeaturesCards/CardSection";
import CardSections from "@/components/FeaturesCards/CardSections";

export default function ProgramSummary() {
  // TODO: Uploadthing bucket needed for images and other assets
  return (
    <div>
      <CardSections
        subtitle="Digital Skills Training Programs"
        description="The Digital Skills Training Programs are short courses that are designed to help you learn new skills and advance your career. You can choose from a variety of topics, including web development, digital marketing, graphic design, and more. Each course is taught by an expert instructor, and includes hands-on projects and real-world examples. By the end of the course, you will have the skills and confidence to succeed in your chosen field."
        imageUrl="https://i.imgur.com/i4Sdm62.jpg"
        learnMoreLink="/mentorships/digital-skills-training"
      />

      <CardSections
        subtitle="Office Productivity Softwares  "
        description="The Office Productivity Softwares Training Programs are short courses that are designed to help you learn how to use popular office productivity software like Microsoft Office, Google Workspace, and more. You will learn how to create documents, spreadsheets, presentations, and more, and how to collaborate with others using these tools. Each course is taught by an expert instructor, and includes hands-on projects and real-world examples. By the end of the course, you will have the skills and confidence to succeed in your chosen field."
        imageUrl="https://i.imgur.com/AOuw4qC.jpg"
        learnMoreLink="/mentorships/office-productivity-software"
      />

      <CardSections
        subtitle="Master Your Freelance Hustle"
        description="The Master Your Freelance Hustle Mentorship is a 3-month program that is designed to help you become a successful freelancer. You will learn how to find clients, negotiate contracts, and deliver high-quality work on time and on budget. You will also learn how to manage your time, set your rates, and build your personal brand. By the end of the program, you will have a portfolio of projects that you can show to potential clients, and the skills and confidence to succeed as a freelancer."
        imageUrl="https://i.imgur.com/vhxao6r.jpeg"
        learnMoreLink="/mentorships/master-your-freelance-hustle"
      />

      <CardSections
        subtitle="Frontend Development Mentorship"
        description="The Frontend Development Mentorship is a 3-month program that is designed to help you become a frontend developer. You will learn how to build beautiful and responsive user interfaces using HTML, CSS, and JavaScript. You will also learn how to work with design tools like Figma, and how to collaborate with backend developers to build fullstack applications. By the end of the program, you will have a portfolio of projects that you can show to potential employers, and the skills and confidence to succeed in the tech industry."
        imageUrl="https://i.imgur.com/AOuw4qC.jpg"
        learnMoreLink="/mentorships/frontend-development"
      />

      <CardSections
        subtitle="Backend Development Mentorship"
        description="The Backend Development Mentorship is a 3-month program that is designed to help you become a backend developer. You will learn how to build scalable and secure server-side applications using Node.js, Express, and MongoDB. You will also learn how to work with APIs, databases, and cloud services. By the end of the program, you will have a portfolio of projects that you can show to potential employers, and the skills and confidence to succeed in the tech industry."
        imageUrl="https://i.imgur.com/8J0SZJU.jpeg"
        learnMoreLink="/mentorships/backend-development"
      />
    </div>
  );
}
