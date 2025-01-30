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
        Basics of Neural Networks and understand the key components
      </h1>
      <div className="text-center text-gray-500 mb-4">26 JANUARY 2025</div>
      <div className="text-center text-gray-700 mb-6">
        Mark Sikaundi - Data Scientist and AI Researcher.{" "}
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
        A neural network is a computational model inspired by the way biological
        neural networks in the human brain process information. It consists of
        interconnected units called neurons that work together to solve complex
        problems. Neural networks are particularly powerful for tasks such as
        image recognition, natural language processing, and game playing.
      </p>
      <div className="space-y-4 text-gray-700">
        <p>
          A neural network is a computational model inspired by the way
          biological neural networks in the human brain process information. It
          consists of interconnected units called neurons that work together to
          solve complex problems. Neural networks are particularly powerful for
          tasks such as image recognition, natural language processing, and game
          playing.
        </p>{" "}
        <p>
          Neural networks are composed of layers of neurons that process input
          data and produce output data. The input layer receives data from the
          outside world, the output layer produces the final result, and the
          hidden layers perform intermediate processing. Each neuron in a layer
          is connected to every neuron in the next layer, and each connection
          has an associated weight that determines the strength of the
          connection.
        </p>{" "}
        <p>
          During training, a neural network learns to adjust the weights of its
          connections to minimize the difference between its output and the
          desired output. This process is known as backpropagation and is
          typically done using an optimization algorithm such as stochastic
          gradient descent. Once trained, a neural network can be used to make
          predictions on new data by passing it through the network and
          computing the output.
        </p>
        <h2 className="my-4 font-bold">Key components of a neural network</h2>
        <p>
          The key components of a neural network are neurons, layers, activation
          functions, and loss functions. Neurons are the basic processing units
          that receive input data, perform a computation, and produce an output.
          Layers are groups of neurons that process data in parallel and
          communicate with each other through connections. Activation functions
          introduce nonlinearity into the network, allowing it to learn complex
          patterns in the data. Loss functions measure the difference between
          the network's output and the desired output, providing feedback for
          training.
        </p>{" "}
        <h1 className="my-4 font-bold">Types of neural networks</h1>
        <p>
          There are many different types of neural networks, each with its own
          architecture and learning algorithm. Some common types of neural
          networks include feedforward neural networks, convolutional neural
          networks, and recurrent neural networks. Each type of network is
          suited to different types of tasks and data, and choosing the right
          network for a given problem is an important part of designing an
          effective machine learning system.
        </p>{" "}
        <h1 className="my-4 font-bold">Neurons</h1>
        <p>
          Neurons are the basic processing units of a neural network. Each
          neuron receives input data, performs a computation, and produces an
          output. Neurons are typically organized into layers, with each layer
          performing a specific type of processing. The input layer receives
          data from the outside world, the output layer produces the final
          result, and the hidden layers perform intermediate processing.
        </p>{" "}
        <h1 className="my-4 font-bold">
          Mathematically, a neuron can be represented as:
        </h1>
        <p>y = f(w1x1 + w2x2 + ... + wnxn + b)</p>
        <p>
          Where y is the output of the neuron, f is the activation function, w1,
          w2, ..., wn are the weights of the connections, x1, x2, ..., xn are
          the inputs to the neuron, and b is the bias term. The weights and bias
        </p>
        <h1 className="my-4 font-bold">Layers</h1>
        <p>
          Layers are groups of neurons that process data in parallel and
          communicate with each other through connections. There are several
          types of layers in a neural network, including input layers, output
          layers, and hidden layers. Each layer performs a specific type of
          processing, such as feature extraction or classification.
        </p>{" "}
        <h1 className="my-4 font-bold">Activation functions</h1>
        <p>
          Activation functions introduce nonlinearity into the network, allowing
          it to learn complex patterns in the data. There are several types of
          activation functions, including sigmoid, tanh, and ReLU. Each
          activation function has its own properties and is suited to different
          types of tasks.
        </p>
        <p>
          Activation functions introduce non-linearity into the neural network,
          allowing it to learn complex patterns. Some common activation
          functions include:
        </p>
        <ul>
          <li>Sigmoid function</li>
          <li>Tanh function</li>
          <li>ReLU function</li>
        </ul>
        <h1 className="my-4 font-bold">
          Lets undertand how Sigmoid function function works
        </h1>
        <p>
          The sigmoid function is a type of activation function that produces an
          S-shaped curve. It is defined as: f(x) = 1 / (1 + e^-x) The sigmoid
          function takes an input x and produces an output between 0 and 1. It
          is often used in binary classification tasks, where the goal is to
          predict whether an input belongs to one of two classes. The sigmoid
          function is differentiable and monotonic, making it well-suited for
          training neural networks using gradient-based optimization algorithms.
        </p>{" "}
        <h1 className="my-4 font-bold">Loss functions</h1>
        <p>
          Loss functions measure the difference between the network's output and
          the desired output, providing feedback for training. There are several
          types of loss functions, including mean squared error, cross-entropy,
          and hinge loss. Each loss function has its own properties and is
          suited to different types of tasks.
        </p>
        <p>
          There are many different types of neural networks, each with its own
          architecture and learning algorithm. Some common types of neural
          networks include feedforward neural networks, convolutional neural
          networks, and recurrent neural networks. Each type of network is
          suited to different types of tasks and data, and choosing the right
          network for a given problem is an important part of designing an
          effective machine learning system.
        </p>{" "}
        <p>
          In recent years, neural networks have achieved remarkable success in a
          wide range of applications, from speech recognition to autonomous
          driving. As researchers continue to improve the performance and
          scalability of neural networks, they are likely to play an
          increasingly important role in shaping the future of artificial
          intelligence.
        </p>
        <h2 className="my-4 font-bold">Conclusion</h2>
        <p>
          Neural networks are a powerful computational model inspired by the
          human brain. They consist of interconnected neurons that work together
          to solve complex problems. Neural networks are particularly
          well-suited for tasks such as image recognition, natural language
          processing, and game playing. By understanding the key components of a
          neural network, you can begin to explore the exciting world of deep
          learning and artificial intelligence.
        </p>
        <div>
          <h2></h2>
          <p>
            Explore more on:
            <Link
              className="ml-4 font-bold italic"
              href="https://deepmind.google/discover/blog/a-new-generation-of-african-talent-brings-cutting-edge-ai-to-scientific-challenges/"
            >
              Lupleg Community
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
