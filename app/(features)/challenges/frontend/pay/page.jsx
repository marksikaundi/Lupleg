import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Help from "@/components/FeaturesCards/Help";
import PayCard from "@/components/UIPreviews/Pay";

export default function Pay() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link
        href="/challenges/frontend"
        className="inline-flex items-center text-sm text-[#2D1537] hover:text-[#2D1537] mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Credit Card Form
      </h1>

      <div className="flex items-center mb-6">
        <Image
          src="/mark.jpg"
          alt="Mark Sikaundi"
          width={40}
          height={40}
          className="rounded-full w-10 h-10 mr-3"
        />
        <div>
          <p className="font-medium text-gray-900">Mark Sikaundi </p>
          <p className="text-sm text-gray-500">September 17, 2024</p>
        </div>
      </div>

      <p className="text-gray-700 mb-8">
        In this challenge, you will build a credit card form with card number,
        expiry date, and CVC code fields. The form should include a custom
        design with input validation and error handling. The credit card form
        should be responsive and work on all screen sizes. You will use React
        hooks to manage the form state and handle form submission. The form
        should include a submit button that displays a success message when the
        form is submitted successfully. Feel free to customize the design and
        functionality to suit your needs.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        The Credit Card Form includes the following features:
      </h2>

      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>Card number field with input validation</li>
        <li>Expiry date field with input validation</li>
        <li>CVC code field with input validation</li>
        <li>Custom design with error handling</li>
        <li>Responsive design for all screen sizes</li>
        <li>Form submission with success message</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Here's a breakdown of the component:
      </h2>

      <p className="text-gray-700 mb-8">
        The credit card form component includes input fields for the card
        number, expiry date, and CVC code. The form includes input validation
        for each field and error handling for invalid inputs. The form is
        designed to be responsive and work on all screen sizes. The form
        includes a submit button that displays a success message when the form
        is submitted successfully. The form is built using React hooks to manage
        the form state and handle form submission. Feel free to customize the
        design and functionality to suit your needs.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Here's a preview of the Credit Card Form:
      </h2>
      <PayCard />

      <h2 className="text-2xl font-bold text-gray-900 my-6">Note:</h2>
      <p className="text-gray-700 mb-8">
        This challenge is designed to test your skills in building a credit card
        form with input validation and error handling. You will use React hooks
        to manage the form state and handle form submission. The form should be
        responsive and work on all screen sizes. The form should include a
        submit button that displays a success message when the form is submitted
        successfully. Feel free to customize the design and functionality to
        suit your needs.
      </p>

      <Help />
    </div>
  );
}
