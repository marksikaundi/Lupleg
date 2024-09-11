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
        A new generation of African talent brings cutting-edge AI to scientific
        challenges
      </p>
      <div className="space-y-4 text-gray-700">
        <p>
          Food security, healthcare and exploring the cosmos are among the ways
          students of a new generation of African talent are using cutting-edge
          AI to tackle scientific challenges. The students, who are part of the
          African Master's in Machine Intelligence (AMMI) program, are working
          on projects that have the potential to transform industries and
          improve lives across the continent. The program, which is a
          collaboration between the African Institute for Mathematical Sciences
          (AIMS) and Facebook AI, aims to train the next generation of AI
          researchers and practitioners in Africa.
        </p>
        <p>
          One of the projects being developed by the students is a system that
          uses AI to monitor crop health and predict crop yields. The system
          combines satellite imagery with machine learning algorithms to analyze
          the health of crops and predict how much food they will produce. This
          information can help farmers make better decisions about when to
          plant, water and harvest their crops, leading to higher yields and
          increased food security.
        </p>
        <p>
          Another project focuses on using AI to improve healthcare in rural
          areas. The students are developing a system that can diagnose diseases
          from medical images, such as X-rays and MRIs, with high accuracy. This
          system has the potential to bring life-saving medical care to
          communities that lack access to trained medical professionals.
        </p>
        <BackCard />
      </div>
    </div>
  );
}
