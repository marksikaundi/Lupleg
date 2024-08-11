import Publications from "@/components/LastUpdated/Publications";
import React from "react";

export default function AboutUs() {
  return (
    <div class="flex flex-col items-center container px-4 mx-auto">
      <h1 class="text-black text-center text-4xl font-bold tracking-tight md:text-5xl mt-16 mb-12">
        About us
        <hr className="m-6"/>
      </h1>
      <div class=" max-w-2xl ml-4 flex-1 [&amp;&gt;p]:mb-12 [&amp;&gt;h2]:text-4xl [&amp;&gt;h2]:font-bold">
        <p>
          Lupleg is a visionary technology company on a mission to bridge the
          skills gap and empower individuals and businesses in the digital age.
          We believe that knowledge is the key to unlocking potential, and we're
          dedicated to providing innovative educational solutions that make a
          real difference.
          <br />
          Our core offering is a comprehensive suite of educational services,
          delivered through multiple channels to best suit your needs. This
          includes traditional on-site instruction, as well as a user-friendly
          online platform called the Mentor Management System (MMS). The MMS
          provides a flexible and interactive learning experience, allowing you
          to access courses and connect with qualified mentors at your own pace.
          <br />
        </p>
        <hr className="my-8" />
        <p>
          Lupleg goes beyond just education. Our team of passionate experts is
          also dedicated to developing cutting-edge software solutions to help
          businesses thrive in today's ever-evolving digital landscape. Whether
          you're looking to enhance your workforce's skills with targeted
          training programs or streamline your operations through innovative
          technology, Lupleg is your trusted partner for achieving success.
          <br />
          At Lupleg, we believe in fostering a collaborative community where
          individuals can learn, grow, and achieve their goals. We're committed
          to providing exceptional customer service and building long-term
          partnerships with our clients.
          <br />
          Partner with Lupleg and unlock your full potential in the digital
          world!
        </p>

        <h2 className="font-mono font-bold my-6 ">
          ℹ️ Our Mission and Values
        </h2>

        <p>
          Lupleg is a catalyst for the next generation of tech pioneers. We
          ignite a passion for innovation by equipping young minds with the
          cutting edge skills and knowledge they need to thrive in the ever
          evolving technology sector. Our comprehensive educational programs and
          industry expert mentors empower these future leaders to drive growth,
          efficiency, and groundbreaking advancements. Guided by our core
          values, we foster a dynamic and collaborative environment that fuels
          creativity, critical thinking, and a relentless pursuit of excellence.{" "}
          Lupleg is more than just an educational provider; we are architects of
          the future, one empowered tech pioneer at a time.
        </p>

        <Publications />
      </div>
    </div>
  );
}
