import { ShareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import BackCard from "../backCard";

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
        Protein Design and Wei Lab teams
      </div>
      <div className="flex justify-center mb-8">
        <Button variant="outline" size="sm">
          <ShareIcon className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>
      <img
        src="/placeholder.svg?height=400&width=800"
        alt="3D protein structure visualization"
        className="w-full rounded-lg mb-8"
      />
      <p className="font-semibold mb-6">
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
        <BackCard />
      </div>
    </div>
  );
}
