import { Button } from "@/components/ui/button";
import SharePost from "../shareCard";
import Link from "next/link";
import { IoOpen } from "react-icons/io5";

export default function Component() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-sm text-gray-500 uppercase text-center my-8">
        RESEARCH
      </div>
      <h1 className="text-4xl font-bold mb-2 text-center">
        AlphaProteo generates novel proteins for biology and health research
      </h1>
      <div className="text-center text-gray-500 mb-4">5 SEPTEMBER 2024</div>
      <div className="text-center text-gray-700 mb-6">
        Protein Design and Wet Lab teams
      </div>
      <div className="flex justify-center mb-8">
        <SharePost className="w-4 h-4 mr-2" />
      </div>
      <img
        src="/ml/alpha.webp"
        alt="AlphaProteo generates novel proteins for biology and health research"
        height="400"
        width="800"
        className="w-full rounded-lg mb-8"
      />
      <p className="font-mono text-lg mb-6">
        New AI system designs proteins that successfully bind to target
        molecules, with potential for advancing drug design, disease
        understanding and more.
      </p>
      <div className="space-y-4 text-gray-700">
        <p>
          Every biological process in the body, from cell growth to immune
          responses, depends on interactions between molecules called proteins.
          Like a key to a lock, one protein can bind to another, helping
          regulate critical cellular processes. Protein structure prediction
          tools like AlphaFold have already given us tremendous insight into how
          proteins interact with each other to perform their functions, but
          these tools cannot create new proteins to directly manipulate those
          interactions.
        </p>
        <p>
          Scientists, however, can create novel proteins that successfully bind
          to target molecules. These binders can help researchers accelerate
          progress across a broad spectrum of research, including drug
          development, cell and tissue imaging, disease understanding and
          diagnosis – even crop resistance to pests. While recent machine
          learning approaches to protein design have made great strides, the
          process is still laborious and requires extensive experimental
          testing.
        </p>
        <p>
          Today, we introduce AlphaProteo, our first AI system for designing
          novel, high-strength protein binders to serve as building blocks for
          biological and health research. This technology has the potential to
          accelerate our understanding of biological processes, and aid the
          discovery of new drugs, the development of biosensors and more.
        </p>
        <p>
          AlphaProteo can generate new protein binders for diverse target
          proteins, including VEGF-A, which is associated with cancer and
          complications from diabetes. This is the first time an AI tool has
          been able to design a successful protein binder for VEGF-A.
        </p>
        <p>
          AlphaProteo also achieves higher experimental success rates and 3 to
          300 times better binding affinities than the best existing methods on
          seven target proteins we tested.
        </p>

        <h2 className="my-4 font-bold">
          Learning the intricate ways proteins bind to each other
        </h2>
        <p>
          Protein binders that can bind tightly to a target protein are hard to
          design. Traditional methods are time intensive, requiring multiple
          rounds of extensive lab work. After the binders are created, they
          undergo additional experimental rounds to optimize binding affinity,
          so they bind tightly enough to be useful.
        </p>
        <p>
          Trained on large amounts of protein data from the Protein Data Bank
          (PDB) and more than 100 million predicted structures from AlphaFold,
          AlphaProteo has learned the myriad ways molecules bind to each other.
          Given the structure of a target molecule and a set of preferred
          binding locations on that molecule, AlphaProteo generates a candidate
          protein that binds to the target at those locations.
        </p>

        <h2 className="my-4 font-bold">
          {" "}
          Demonstrating success on important protein binding targets
        </h2>
        <p>
          To test AlphaProteo, we designed binders for diverse target proteins,
          including two viral proteins involved in infection, BHRF1 and
          SARS-CoV-2 spike protein receptor-binding domain, SC2RBD, and five
          proteins involved in cancer, inflammation and autoimmune diseases,
          IL-7Rɑ, PD-L1, TrkA, IL-17A and VEGF-A.
        </p>
        <p>
          Our system has highly-competitive binding success rates and
          best-in-class binding strengths. For seven targets, AlphaProteo
          generated candidate proteins in-silico that bound strongly to their
          intended proteins when tested experimentally.
        </p>

        <h2 className="my-4 font-bold">
          {" "}
          Towards responsible development of protein design
        </h2>
        <p>
          Protein design is a fast-evolving technology that holds lots of
          potential for advancing science in everything from understanding the
          factors that cause disease, to accelerating diagnostic test
          development for virus outbreaks, supporting more sustainable
          manufacturing processes, and even cleaning contaminants from the
          environment.
        </p>
        <p>
          To account for potential risks in biosecurity, building on our
          long-standing approach to responsibility and safety, we’re working
          with leading external experts to inform our phased approach to sharing
          this work, and feeding into community efforts to develop best
          practices, including the NTI’s (Nuclear Threat Initiative) new AI Bio
          Forum.
        </p>
        <p>
          Going forward, we’ll be working with the scientific community to
          leverage AlphaProteo on impactful biology problems and understand its
          limitations. We've also been exploring its drug design applications at
          Isomorphic Labs, and are excited for what the future holds.
        </p>
        <p>
          At the same time, we’re continuing to improve the success rate and
          affinity of AlphaProteo’s algorithms, expanding the range of design
          problems it can tackle, and working with researchers in machine
          learning, structural biology, biochemistry and other disciplines to
          develop a responsible and more comprehensive protein design offering
          for the community.
        </p>

        <Button className="bg-[#c296d4]    hover:bg-[#c296d4]   rounded-full ">
          <Link
            className="p-2 text-[#2D1537] flex items-center"
            href="https://arxiv.org/abs/2409.08022"
          >
            Read our whitepaper
            <IoOpen className="ml-2" />
          </Link>
        </Button>

        <div>
          <p>
            Credit source from:
            <Link
              className="ml-4 font-bold italic"
              href="https://deepmind.google/discover/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/"
            >
              Google DeepMind
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
