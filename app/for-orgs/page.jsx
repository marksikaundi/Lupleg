import CardOrg from "@/components/FeaturesCards/CardOrg";
import React from "react";

function page() {
  return (
    <div>
      <div className="w-full bg-transparent">
        <div className="flex flex-col container mx-auto lg:py-24 py-20 px-8 w-7/10 justify-center">
          <div className="flex flex-col gap-4 text-center ">
            <p className=" md:text-lg">
              We’re In The Business of Changing Lives
            </p>
            <h2 className=" font-semibold sm:text-2xl text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-6xl mb-6 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12">
              We are dedicated to transforming lives and making a lasting impact
            </h2>
          </div>
          <div className="flex justify-center">
            <img
              src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/649fc78acaebbe296387ce9f_Screenshot%202023-07-01%20at%2007.25-p-1080.webp"
              className=" object-cover"></img>
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
      <CardOrg
        title="Hire Talents from Zuri"
        subtitle="Unlock the Potential of Zuri Graduates for Your Organization"
        description="At Zuri, we are committed to nurturing exceptional talent in the tech industry. Our comprehensive training programs equip individuals with cutting-edge skills and empower them to excel in their careers."
        imageUrl="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e5184308199cf4867fa2ba_Group%20151-p-800.webp"
        learnMoreLink="a"
      />
      <CardOrg
        title="Hire Talents from Zuri"
        subtitle="Unlock the Potential of Zuri Graduates for Your Organization"
        description="At Zuri, we are committed to nurturing exceptional talent in the tech industry. Our comprehensive training programs equip individuals with cutting-edge skills and empower them to excel in their careers."
        imageUrl="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e5184308199cf4867fa2ba_Group%20151-p-800.webp"
        learnMoreLink="a"
      />
    </div>
  );
}

export default page;
