"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function MoreFQA() {
  const faqs = [
    {
      question: "What is the pricing for Lupleg Mentorship?",
      answer:
        "Our mentorship varies with range of pricing plans to fit your needs. The basic plan starts at $19 per month, with additional features and support available in our higher-tier plans. You can view all of our pricing options on the Premium page.",
    },
    {
      question: "What features are included in Lupleg mentorship?",
      answer:
        "Comes with includes a comprehensive set of features to help you streamline your workflow and improve your productivity. Some of the key features include project management tools, collaboration features, data visualization, and integrations with popular third-party apps. You can find a full list of features on our Features page.",
    },
    {
      question: "How do I get started with the program?",
      answer:
        "Getting started our program its easy. Simply sign up for an account on our website, and you'll be guided through the onboarding process. Our onboarding team is available to help you set up your account and customize the platform to fit your specific needs. If you have any questions or need assistance, don't hesitate to reach out to our support team.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide excellent customer support. Our support team is available 24/7 to assist you with any questions or issues you may have. You can reach out to us via email, phone, or our online chat feature. We also have a comprehensive knowledge base and FAQ section on our website, where you can find answers to common questions.",
    },
    {
      question:
        "Do you offer any training or resources for free?",
      answer:
      "Yes, we offer a range of free resources to help you get started with our program. We have a library of video tutorials, blog posts, and webinars that cover a wide range of topics, from basic setup and configuration to advanced features and best practices. We also offer a free trial of our platform, so you can try it out risk-free before committing to a subscription.",
    },
    {
      question: "How are programs offered?",
      answer:
        "Our programs are offered on a subscription basis, with monthly and annual plans available. You can choose the plan that best fits your needs and budget, and you can cancel or upgrade your plan at any time. We also plan to offer a 14-day free trial, so you can try out our platform risk-free before committing to a subscription.",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const filteredFaqs = useMemo(() => {
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  return (
    <section className="bg-white dark:bg-gray-950 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold tracking-tight mb-8 md:mb-10">
            Frequently Asked Questions
          </h2>
          <div className="mb-8 md:mb-10">
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <Accordion type="single" collapsible>
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
