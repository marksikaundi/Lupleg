import CardOrg from "@/components/FeaturesCards/CardOrg";
import CardOrg2 from "@/components/FeaturesCards/CardOrg2";
import React from "react";

function Challenge() {
  return (
    <div>
      <div className="w-full bg-transparent">
        <div className="w-7/10 container mx-auto flex flex-col justify-center px-8 py-20 lg:py-24">
          <div className="flex flex-col gap-4 text-center ">
            <p className=" md:text-lg">
              Level up coding abilities by building practical applications.
            </p>
            <h1 className="mb-10 text-4xl font-bold text-gray-800 sm:text-5xl md:text-7xl">
              <span className="block xl:inline">Projects you can build</span>{" "}
              <span className="block bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent xl:inline">
                to improve
              </span>{" "}
              <span className="block xl:inline">your</span>{" "}
              <span className="block bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent xl:inline">
                coding skills
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

      <CardOrg
        title="Hire Talents from Zuri"
        subtitle="Unlock the Potential of Zuri Graduates for Your Organization"
        description="At Zuri, we are committed to nurturing exceptional talent in the tech industry. Our comprehensive training programs equip individuals with cutting-edge skills and empower them to excel in their careers."
        imageUrl="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e5184308199cf4867fa2ba_Group%20151-p-800.webp"
        learnMoreLink="a"
      />
      <CardOrg2
        title="Hire Talents from Zuri"
        subtitle="Unlock the Potential of Zuri Graduates for Your Organization"
        description="At Zuri, we are committed to nurturing exceptional talent in the tech industry. Our comprehensive training programs equip individuals with cutting-edge skills and empower them to excel in their careers."
        imageUrl="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e5184308199cf4867fa2ba_Group%20151-p-800.webp"
        learnMoreLink="a"
      />
      <CardOrg
        title="Hire Talents from Lupleg"
        subtitle="Unlock the Potential of Zuri Graduates for Your Organization"
        description="At Zuri, we are committed to nurturing exceptional talent in the tech industry. Our comprehensive training programs equip individuals with cutting-edge skills and empower them to excel in their careers."
        imageUrl="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e5184308199cf4867fa2ba_Group%20151-p-800.webp"
        learnMoreLink="a"
      />
    </div>
  );
}

export default Challenge;
