import React from "react";
import CardSection from "@/components/FeaturesCards/CardSection";
import CardSections from "@/components/FeaturesCards/CardSections";

export default function ProgramSummary() {
  return (
    <div>
      <CardSections
        subtitle="Digital Skills Training"
        description="The Digital Skills Training Programs are short courses that are designed to help you learn new skills and advance your career. You can choose from a variety of topics, including web development, digital marketing, graphic design, and more. Each course is taught by an expert instructor, and includes hands-on projects and real-world examples. By the end of the course, you will have the skills and confidence to succeed in your chosen field."
        imageUrl="https://utfs.io/f/b9b4d679-34e2-4664-93b8-2c8283fa88dd-1h.png"
        learnMoreLink="/digital-skills-training"
      />

      <CardSections
        subtitle="Office Productivity Softwares  "
        description="The Office Productivity Softwares Training Programs are short courses that are designed to help you learn how to use popular office productivity software like Microsoft Office, Google Workspace, and more. You will learn how to create documents, spreadsheets, presentations, and more, and how to collaborate with others using these tools. Each course is taught by an expert instructor, and includes hands-on projects and real-world examples. By the end of the course, you will have the skills and confidence to succeed in your chosen field."
        imageUrl="https://utfs.io/f/dcdb26ac-4a38-4a3b-affa-2c16d3f5473a-t3524v.png"
        learnMoreLink="/office-productivity-software"
      />

      <CardSections
        subtitle="Master Your Freelance Hustle"
        description="The Master Your Freelance Hustle Mentorship is a 3-month program that is designed to help you become a successful freelancer. You will learn how to find clients, negotiate contracts, and deliver high-quality work on time and on budget. You will also learn how to manage your time, set your rates, and build your personal brand. By the end of the program, you will have a portfolio of projects that you can show to potential clients, and the skills and confidence to succeed as a freelancer."
        imageUrl="https://utfs.io/f/06caf2fd-5a18-40ce-86c1-57db0534d677-u2t8af.png"
        learnMoreLink="/master-your-freelance-hustle"
      />

      <CardSections
        subtitle="Frontend Development"
        description="The Frontend Development Mentorship is a 3-month program that is designed to help you become a frontend developer. You will learn how to build beautiful and responsive user interfaces using HTML, CSS, and JavaScript. You will also learn how to work with design tools like Figma, and how to collaborate with backend developers to build fullstack applications. By the end of the program, you will have a portfolio of projects that you can show to potential employers, and the skills and confidence to succeed in the tech industry."
        imageUrl="https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png"
        learnMoreLink="/frontend-development"
      />

      <CardSections
        subtitle="Backend Development"
        description="The Backend Development Mentorship is a 3-month program that is designed to help you become a backend developer. You will learn how to build scalable and secure server-side applications using Node.js, Express, and MongoDB. You will also learn how to work with APIs, databases, and cloud services. By the end of the program, you will have a portfolio of projects that you can show to potential employers, and the skills and confidence to succeed in the tech industry."
        imageUrl="https://utfs.io/f/95562878-0dec-48e1-b33c-4e3e3eae1198-5e4axc.jpeg"
        learnMoreLink="/backend-development"
      />
    </div>
  );
}
