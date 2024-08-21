import Link from "next/link";

export default function Publications() {
  return (
    <div>
      <div class=" ">
        <hr className="my-8" />
        <h2 className="font-mono font-bold text-2xl my-6 ">Publications 📢:</h2>
        <p>
          We are committed to keeping our publications up to date. We review our
          publications every 3 months to ensure that the information is accurate
          and relevant. If you have any questions or feedback, please feel free
          to:{" "}
          <Link href="/contact" className="text-green-700">
            Contact us here
          </Link>
        </p>

        <p className="my-6 font-mono">
          <span className="font-bold">Last updated:</span> 21 July, 2024.
        </p>
      </div>
    </div>
  );
}
