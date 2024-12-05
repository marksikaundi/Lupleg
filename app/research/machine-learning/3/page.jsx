import SharePost from "../shareCard";
import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-sm text-gray-500 uppercase text-center my-8">
        RESEARCH
      </div>
      <h1 className="text-4xl font-bold mb-2 text-center">
        A new generation of African talent brings cutting-edge AI to scientific
        challenges
      </h1>
      <div className="text-center text-gray-500 mb-4">5 AUGUST 2024</div>
      <div className="text-center text-gray-700 mb-6">
        Obum Ekeke OBE, Head of Education Partnerships
      </div>
      <div className="flex justify-center mb-8">
        <SharePost className="w-4 h-4 mr-2" />
      </div>
      <Image
        src="/ml/new.webp"
        alt="A new generation of African talent brings cutting-edge AI to scientific challenges"
        height="400"
        width="800"
        className="w-full rounded-lg mb-8"
      />
      <p className="font-mono text-lg mb-6">
        Food security, healthcare and exploring the cosmos are among the ways
        students of a new pan-African Master’s program aspire to apply AI
      </p>
      <div className="space-y-4 text-gray-700">
        <p>
          At Google DeepMind, we’re committed to supporting the next generation
          of artificial intelligence (AI) leaders to help build a stronger, more
          diverse and inclusive global AI community. This includes increasing
          access to AI and science through education.
        </p>{" "}
        <p>
          Last year, we partnered with the African Institute for Mathematical
          Sciences (AIMS), Africa’s first network of centers of excellence in
          mathematical sciences, to launch an AI for Science Master’s program,
          with a $4.5M grant from Google DeepMind.
        </p>{" "}
        <p>
          This funding helps AIMS provide full scholarships, equipment and
          compute to talented local students, giving them access to advanced
          studies in mathematics, AI and machine learning from world-class
          academics at AIMS South Africa. Students have the opportunity to
          accelerate scientific discovery, with mentoring and support from
          Google DeepMind’s researchers and engineers.
        </p>
        <h2 className="my-4 font-bold">
          {" "}
          Béria: Innovating for better food security
        </h2>
        <p>
          Sustainability is a top priority for Béria, originally from Chad. “I
          hope to develop solutions for sustainable agricultural development
          that will benefit both people and the planet by integrating principles
          of renewable energy, precision farming, and ecological preservation in
          my work,” he says.
        </p>{" "}
        <p>
          “Beyond agriculture, AI offers significant potential to enhance the
          resilience of Africa's natural environments,” Béria adds. “By
          implementing AI-powered monitoring and decision-support systems, we
          can safeguard Africa's precious green areas and biodiversity for
          future generations.”
        </p>
        <h2 className="my-4 font-bold">
          Olivier: Pioneering virus transmission research through the lens of
          climate change
        </h2>
        <p>
          Olivier’s passion for applying mathematics to complex problems led him
          to AIMS South Africa: “Throughout my academic journey, I’ve been
          fascinated by the power of mathematics, particularly in addressing
          real-world challenges through AI,” he says. “A solid foundation in
          mathematical sciences is crucial for driving progress in areas such as
          healthcare, climate science and technology — and I’m eager to be at
          the forefront of these advancements.”
        </p>{" "}
        <p>
          Originally from Benin, Olivier now looks to apply this approach to
          data from African countries to help understand the spread of dengue
          fever. “Using advanced AI techniques, I hope to create more accurate
          prediction models to inform public health strategies and
          interventions, ultimately contributing to the control and prevention
          of this viral disease.”
        </p>{" "}
        <p>
          Discussing the personal impact of his scholarship, Olivier recounts,
          “Without it, pursuing advanced studies at such a prestigious
          institution would have been financially unattainable for me. This
          support enabled me to fully immerse myself in AIMS' rigorous academic
          environment, so I could engage deeply in coursework, collaborate with
          professors and peers, and contribute meaningfully to research
          projects.”
        </p>
        <h2 className="my-4 font-bold">
          {" "}
          Diffo: Unraveling the secrets of our universe
        </h2>
        <p>
          Diffo, from Cameroon, is fascinated by the big questions beyond Earth
          — which is what drew her to the Square Kilometre Array (SKA), the
          largest and most sensitive radio telescope on the planet.
        </p>{" "}
        <p>
          “Understanding the 21cm line provides insights into the early
          universe, the formation of the first stars and galaxies, and the
          structure of the cosmos,” Diffo explains. “By applying Markov chain
          Monte Carlo (MCMC) techniques, I hope to improve the accuracy and
          efficiency of extracting these faint signals from SKA data,
          potentially leading to more precise cosmological models and a deeper
          understanding of the future evolution of the universe.”
        </p>{" "}
        <p>
          For those considering similar studies, Diffo offers a few words of
          advice: “Stay curious, be persistent and embrace interdisciplinary
          learning. Engaging in hands-on projects, collaborating with peers, and
          seeking mentorship from AI experts can greatly benefit your learning
          experience and career prospects.”
        </p>
        <h2 className="my-4 font-bold">Supporting AI education in Africa</h2>
        <p>
          This work builds on our existing commitments in the region, including
          our support of the Deep Learning Indaba through volunteering and
          funding since its inception in 2017, the recent launch of our
          Experience AI education program across Africa, which has already
          engaged local educators working with more than 30,000 young people,
          and additional educational funding, which has been used by three
          further African universities to offer a total of over 40 postgraduate
          scholarships since 2020.
        </p>{" "}
        <p>
          Increasing representation in the field of AI research offers a
          much-needed opportunity to bring diverse values, perspectives, and
          concerns into conversations about the design and deployment of this
          transformative technology. We hope our support for AIMS not only
          serves to build a more global and inclusive AI ecosystem, but also
          helps students make new scientific discoveries that benefit their
          local communities and the entire globe.
        </p>
        <div>
          <h2></h2>
          <p>
            Credit source from:
            <Link
              className="ml-4 font-bold italic"
              href="https://deepmind.google/discover/blog/a-new-generation-of-african-talent-brings-cutting-edge-ai-to-scientific-challenges/"
            >
              Google DeepMind
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
