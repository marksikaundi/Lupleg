import { ShareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-sm text-gray-500 uppercase text-center my-8">
        RESEARCH
      </div>
      <h1 className="text-4xl font-bold mb-2 text-center">
        FermiNet: Quantum physics and chemistry from first principles
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
        Using deep learning to solve fundamental problems in computational
        quantum physics and chemistry from first principles.
      </p>
      <div className="space-y-4 text-gray-700">
        <p>
          Quantum mechanics is the fundamental theory of nature that describes
          the behavior of matter and energy at atomic and subatomic scales. It
          is the foundation of chemistry and materials science, and underpins
          our understanding of the universe. But solving the equations of
          quantum mechanics for systems of more than a few particles is a
          computational challenge that grows exponentially with system size.
          This has limited our ability to accurately predict the properties of
          molecules and materials from first principles.
        </p>
        <p>
          FermiNet is a new deep learning architecture that can predict the
          quantum mechanical properties of molecules and materials with high
          accuracy, using only the fundamental laws of physics as input. By
          combining the expressive power of deep neural networks with the
          principles of quantum mechanics, FermiNet can predict the electronic
          structure of molecules and materials with unprecedented accuracy and
          efficiency. This opens up new possibilities for understanding and
          designing molecules and materials for a wide range of applications,
          from drug discovery to renewable energy.
        </p>
        <p>
          We have applied FermiNet to a wide range of problems in quantum
          chemistry and condensed matter physics, and have demonstrated its
          ability to predict the properties of molecules and materials with high
          accuracy. Our results show that FermiNet can achieve state-of-the-art
          accuracy on a wide range of benchmark datasets, and can scale to large
          systems with thousands of atoms. This opens up new possibilities for
          using deep learning to solve fundamental problems in computational
          quantum physics and chemistry, and paves the way for a new era of
          discovery and innovation.
        </p>
      </div>
    </div>
  );
}
