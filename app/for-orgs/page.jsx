import React from "react";
import CardSection from "@/components/FeaturesCards/CardSection";
import CardSections from "@/components/FeaturesCards/CardSections";

function Organization() {
  return (
    <div>
      <div className="w-full bg-transparent">
        <div className="flex flex-col container mx-auto lg:py-24 py-20 px-8 w-7/10 justify-center">
          <div className="flex flex-col gap-4 text-center ">
            <p className=" md:text-lg">
              We’re In The Business of Changing Lives
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 mb-10">
              <span className="block xl:inline">
                The efficiency of help and
              </span>{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400 xl:inline">
                Collaboration with
              </span>{" "}
              <span className="block xl:inline">Developers</span>{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 xl:inline">
                empowers
              </span>
            </h1>
          </div>
          <div className="flex justify-center">
            <img
              src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/649fc78acaebbe296387ce9f_Screenshot%202023-07-01%20at%2007.25-p-1080.webp"
              className="rounded-md object-cover"
            ></img>
          </div>
        </div>
      </div>

      <CardSections
        title="Hire Talents from Zuri"
        subtitle="Unlock the Potential of Zuri Graduates for Your Organization"
        description="At Zuri, we are committed to nurturing exceptional talent in the tech industry. Our comprehensive training programs equip individuals with cutting-edge skills and empower them to excel in their careers."
        imageUrl="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e5184308199cf4867fa2ba_Group%20151-p-800.webp"
        learnMoreLink="a"
      />
      <CardSection
        title="Hire Talents from Zuri"
        subtitle="Unlock the Potential of Zuri Graduates for Your Organization"
        description="At Zuri, we are committed to nurturing exceptional talent in the tech industry. Our comprehensive training programs equip individuals with cutting-edge skills and empower them to excel in their careers."
        imageUrl="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e5184308199cf4867fa2ba_Group%20151-p-800.webp"
        learnMoreLink="a"
      />
      <CardSections
        title="Hire Talents from Lupleg"
        subtitle="Unlock the Potential of Zuri Graduates for Your Organization"
        description="At Zuri, we are committed to nurturing exceptional talent in the tech industry. Our comprehensive training programs equip individuals with cutting-edge skills and empower them to excel in their careers."
        imageUrl="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e5184308199cf4867fa2ba_Group%20151-p-800.webp"
        learnMoreLink="a"
      />
    </div>
  );
}

export default Organization;
