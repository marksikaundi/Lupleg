import { Button } from "@/components/ui/button";
import SharePost from "../shareCard";
import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa6";
import { IoOpen } from "react-icons/io5";

export default function Component() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-sm text-gray-500 uppercase text-center my-8">
        RESEARCH
      </div>
      <h1 className="text-4xl font-bold mb-2 text-center">
        FermiNet: Quantum physics and chemistry from first principles
      </h1>
      <div className="text-center text-gray-500 mb-4">22 AUGUST 2024</div>
      <div className="text-center text-gray-700 mb-6">
        David Pfau and James Spencer
      </div>
      <div className="flex justify-center mb-8">
        <SharePost className="w-4 h-4 mr-2" />
      </div>
      <img
        src="/ml/FermiNet.webp"
        alt="FermiNet: Quantum physics and chemistry from first principles"
        height="400"
        width="800"
        className="w-full rounded-lg mb-8"
      />
      <p className="font-mono text-lg mb-6">
        Using deep learning to solve fundamental problems in computational
        quantum chemistry and explore how matter interacts with light
      </p>
      <div className="space-y-4 text-gray-700">
        <p>
          In an article published in Physical Review Research, we showed how
          deep learning can help solve the fundamental equations of quantum
          mechanics for real-world systems. Not only is this an important
          fundamental scientific question, but it also could lead to practical
          uses in the future, allowing researchers to prototype new materials
          and chemical syntheses using computer simulation before trying to make
          them in the lab.
        </p>
        <p>
          Our neural network architecture, FermiNet (Fermionic Neural Network),
          is well-suited to modeling the quantum state of large collections of
          electrons, the fundamental building blocks of chemical bonds. We
          released the code from this study so computational physics and
          chemistry communities can build on our work and apply it to a wide
          range of problems.
        </p>
        <p>
          FermiNet was the first demonstration of deep learning for computing
          the energy of atoms and molecules from first principles that was
          accurate enough to be useful, and Psiformer, our novel architecture
          based on self-attention, remains the most accurate AI method to date.
        </p>
        <p>
          We hope the tools and ideas developed in our artificial intelligence
          (AI) research can help solve fundamental scientific problems, and
          FermiNet joins our work on protein folding, glassy dynamics, lattice
          quantum chromodynamics and many other projects in bringing that vision
          to life.
        </p>
        <h2 className="my-4 font-bold">
          {" "}
          A brief history of quantum mechanics
        </h2>
        <p>
          Mention “quantum mechanics” and you’re more likely to inspire
          confusion than anything else. The phrase conjures up images of
          Schrödinger’s cat, which can paradoxically be both alive and dead, and
          fundamental particles that are also, somehow, waves.
        </p>
        <p>
          In quantum systems, a particle such as an electron doesn’t have an
          exact location, as it would in a classical description. Instead, its
          position is described by a probability cloud — it’s smeared out in all
          places it’s allowed to be. This counterintuitive state of affairs led
          Richard Feynman to declare: “If you think you understand quantum
          mechanics, you don’t understand quantum mechanics.”
        </p>
        <p>
          Despite this spooky weirdness, the meat of the theory can be reduced
          down to just a few straightforward equations. The most famous of
          these, the Schrödinger equation, describes the behavior of particles
          at the quantum scale in the same way that Newton’s laws of motion
          describe the behavior of objects at our more familiar human scale.
          While the interpretation of this equation can cause endless
          head-scratching, the math is much easier to work with, leading to the
          common exhortation from professors to “shut up and calculate” when
          pressed with thorny philosophical questions from students.
        </p>
        <p>
          These equations are sufficient to describe the behavior of all the
          familiar matter we see around us at the level of atoms and nuclei.
          Their counterintuitive nature leads to all sorts of exotic phenomena:
          superconductors, superfluids, lasers and semiconductors are only
          possible because of quantum effects. But even the humble covalent bond
          — the basic building block of chemistry — is a consequence of the
          quantum interactions of electrons.
        </p>
        <p>
          Once these rules were worked out in the 1920s, scientists realized
          that, for the first time, they had a detailed theory of how chemistry
          works. In principle, they could just set up these equations for
          different molecules, solve for the energy of the system, and figure
          out which molecules were stable and which reactions would happen
          spontaneously. But when they sat down to actually calculate the
          solutions to these equations, they found that they could do it exactly
          for the simplest atom (hydrogen) and virtually nothing else.
          Everything else was too complicated.
        </p>

        <FaQuoteLeft className="text-2xl text-[#2D1537]" />
        <p className="text-2xl text-[#2D1537]">
          The underlying physical laws necessary for the mathematical theory of
          a large part of physics and the whole of chemistry are thus completely
          known, and the difficulty is only that the exact application of these
          laws leads to equations much too complicated to be soluble. It
          therefore becomes desirable that approximate practical methods of
          applying quantum mechanics should be developed
        </p>
        <p className="text-gray-700 text-sm mb-6">
          Paul Dirac, founder of quantum mechanics, 1929
        </p>

        {/* here end */}
        <p>
          Many took up Dirac’s charge, and soon physicists built mathematical
          techniques that could approximate the qualitative behavior of
          molecular bonds and other chemical phenomena. These methods started
          from an approximate description of how electrons behave that may be
          familiar from introductory chemistry.
        </p>
        <p>
          In this description, each electron is assigned to a particular
          orbital, which gives the probability of a single electron being found
          at any point near an atomic nucleus. The shape of each orbital then
          depends on the average shape of all other orbitals. As this “mean
          field” description treats each electron as being assigned to just one
          orbital, it’s a very incomplete picture of how electrons actually
          behave. Nevertheless, it’s enough to estimate the total energy of a
          molecule with only about 0.5% error.
        </p>
        <p>
          Unfortunately, 0.5% error still isn’t enough to be useful to the
          working chemist. The energy in molecular bonds is just a tiny fraction
          of the total energy of a system, and correctly predicting whether a
          molecule is stable can often depend on just 0.001% of the total energy
          of a system, or about 0.2% of the remaining “correlation” energy.
        </p>
        <p>
          For instance, while the total energy of the electrons in a butadiene
          molecule is almost 100,000 kilocalories per mole, the difference in
          energy between different possible shapes of the molecule is just 1
          kilocalorie per mole. That means that if you want to correctly predict
          butadiene’s natural shape, then the same level of precision is needed
          as measuring the width of a football field down to the millimeter.
        </p>
        <p>
          With the advent of digital computing after World War II, scientists
          developed a wide range of computational methods that went beyond this
          mean field description of electrons. While these methods come in a
          jumble of abbreviations, they all generally fall somewhere on an axis
          that trades off accuracy with efficiency. At one extreme are
          essentially exact methods that scale worse than exponentially with the
          number of electrons, making them impractical for all but the smallest
          molecules. At the other extreme are methods that scale linearly, but
          are not very accurate. These computational methods have had an
          enormous impact on the practice of chemistry — the 1998 Nobel Prize in
          chemistry was awarded to the originators of many of these algorithms.
        </p>
        <h2 className="my-4 font-bold">Fermionic neural networks</h2>

        <p>
          Despite the breadth of existing computational quantum mechanical
          tools, we felt a new method was needed to address the problem of
          efficient representation. There’s a reason that the largest quantum
          chemical calculations only run into the tens of thousands of electrons
          for even the most approximate methods, while classical chemical
          calculation techniques like molecular dynamics can handle millions of
          atoms.
        </p>
        <p>
          The state of a classical system can be described easily — we just have
          to track the position and momentum of each particle. Representing the
          state of a quantum system is far more challenging. A probability has
          to be assigned to every possible configuration of electron positions.
          This is encoded in the wavefunction, which assigns a positive or
          negative number to every configuration of electrons, and the
          wavefunction squared gives the probability of finding the system in
          that configuration.
        </p>
        <p>
          The space of all possible configurations is enormous — if you tried to
          represent it as a grid with 100 points along each dimension, then the
          number of possible electron configurations for the silicon atom would
          be larger than the number of atoms in the universe. This is exactly
          where we thought deep neural networks could help.
        </p>
        <p>
          In the last several years, there have been huge advances in
          representing complex, high-dimensional probability distributions with
          neural networks. We now know how to train these networks efficiently
          and scalably. We guessed that, given these networks have already
          proven their ability to fit high-dimensional functions in AI problems,
          maybe they could be used to represent quantum wavefunctions as well.
        </p>
        <p>
          Researchers such as Giuseppe Carleo, Matthias Troyer and others have
          shown how modern deep learning could be used for solving idealized
          quantum problems. We wanted to use deep neural networks to tackle more
          realistic problems in chemistry and condensed matter physics, and that
          meant including electrons in our calculations.
        </p>
        <p>
          There is just one wrinkle when dealing with electrons. Electrons must
          obey the Pauli exclusion principle, which means that they can’t be in
          the same space at the same time. This is because electrons are a type
          of particle known as fermions, which include the building blocks of
          most matter: protons, neutrons, quarks, neutrinos, etc. Their
          wavefunction must be antisymmetric. If you swap the position of two
          electrons, the wavefunction gets multiplied by -1. That means that if
          two electrons are on top of each other, the wavefunction (and the
          probability of that configuration) will be zero.
        </p>
        <p>
          This meant we had to develop a new type of neural network that was
          antisymmetric with respect to its inputs, which we called FermiNet. In
          most quantum chemistry methods, antisymmetry is introduced using a
          function called the determinant. The determinant of a matrix has the
          property that if you swap two rows, the output gets multiplied by -1,
          just like a wavefunction for fermions.
        </p>
        <p>
          So, you can take a bunch of single-electron functions, evaluate them
          for every electron in your system, and pack all of the results into
          one matrix. The determinant of that matrix is then a properly
          antisymmetric wavefunction. The major limitation of this approach is
          that the resulting function — known as a Slater determinant — is not
          very general.
        </p>
        <p>
          Wavefunctions of real systems are usually far more complicated. The
          typical way to improve on this is to take a large linear combination
          of Slater determinants — sometimes millions or more — and add some
          simple corrections based on pairs of electrons. Even then, this may
          not be enough to accurately compute energies.
        </p>

        <h2 className="my-4 font-bold"> A new way to compute excited states</h2>

        <p>
          In August 2024, we published the next phase of this work in Science.
          Our research proposes a solution to one of the most difficult
          challenges in computational quantum chemistry: understanding how
          molecules transition to and from excited states when stimulated.
        </p>
        <p>
          FermiNet originally focused on the ground states of molecules, the
          lowest energy configuration of electrons around a given set of nuclei.
          But when molecules and materials are stimulated by a large amount of
          energy, like being exposed to light or high temperatures, the
          electrons might get kicked into a higher energy configuration — an
          excited state.
        </p>
        <p>
          Excited states are fundamental for understanding how matter interacts
          with light. The exact amount of energy absorbed and released creates a
          unique fingerprint for different molecules and materials, which
          affects the performance of technologies ranging from solar panels and
          LEDs to semiconductors, photocatalysts and more. They also play a
          critical role in biological processes involving light, like
          photosynthesis and vision.
        </p>
        <p>
          Accurately computing the energy of excited states is significantly
          more challenging than computing ground state energies. Even gold
          standard methods for ground state chemistry, like coupled cluster,
          have shown errors on excited states that are dozens of times too
          large. While we wanted to extend our work on FermiNet to excited
          states, existing methods didn't work well enough for neural networks
          to compete with state-of-the-art approaches.
        </p>
        <p>
          We developed a novel approach to computing excited states that’s more
          robust and general than prior methods. Our approach can be applied to
          any kind of mathematical model, including FermiNet and other neural
          networks. It works by finding the ground state of an expanded system
          with extra particles, so existing algorithms for optimization can be
          used with little modification.
          <br />
          We validated this work on a wide range of benchmarks, with
          highly-promising results. On a small but complex molecule called the
          carbon dimer, we achieved a mean absolute error (MAE) of 4 meV, which
          is five times closer to experimental results than prior gold standard
          methods reaching 20 meV. We also tested our method on some of the most
          challenging systems in computational chemistry, where two electrons
          are excited simultaneously, and found we were within around 0.1 eV of
          the most demanding, complex calculations done to date.
        </p>
        <p>
          Today, we’re open sourcing our latest work, and hope the research
          community will build upon our methods to explore the unexpected ways
          matter interacts with light.
        </p>

        <Button className="bg-[#c296d4]  hover:bg-[#c296d4]  rounded-full ">
          <Link
            className="p-2 text-[#2D1537] flex items-center"
            href="https://www.science.org/doi/abs/10.1126/science.adn0137"
          >
            Read our latest paper in Science
            <IoOpen className="ml-2" />
          </Link>
        </Button>
        <Button className="bg-[#c296d4]  mx-6 hover:bg-[#c296d4]  rounded-full ">
          <Link
            className="p-2 text-[#2D1537] flex items-center"
            href="https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.033429"
          >
            Read original paper
            <IoOpen className="ml-2" />
          </Link>
        </Button>
        <Button className="bg-[#c296d4]   hover:bg-[#c296d4]  rounded-full ">
          <Link
            className="p-2 text-[#2D1537] flex items-center"
            href="https://github.com/google-deepmind/ferminet"
          >
            Download the code
            <IoOpen className="ml-2" />
          </Link>
        </Button>

        <div>
          <p>
            Credit source from:
            <Link
              className="ml-4 font-bold italic"
              href="https://deepmind.google/discover/blog/ferminet-quantum-physics-and-chemistry-from-first-principles/"
            >
              Google DeepMind
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
