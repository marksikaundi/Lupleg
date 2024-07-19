import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      

        {/* Bottom Right Image */}
        <Image
        src="https://utfs.io/f/ff7c57f5-a1b0-4c0c-afde-390ecdf9c87e-6uzm02.jpg"
        width={300}
        height={300}
        alt="Mark Sikaundi"
        className="rounded-full object-cover h-48 w-48 absolute bottom-0 right-0 mb-20 mr-20"
      />


      {/* Text or other content */}
      <div className="absolute inset-0 flex items-center justify-center px-20">
        <p className="text-xl self-center text-center">
          to build talent pipelines and solve the world’s pressing
          challenges with machine learning & data science.
        </p>
      </div>



    </div>
  );
}
