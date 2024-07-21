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

      <div>Hello work</div>
    </div>
  );
}
