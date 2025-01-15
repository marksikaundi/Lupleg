"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const allTips = [
  { 
    title: "Introduction to Deep Learning", 
    duration: "2 hrs", 
    link: "/30dayschallenge/deep-learning/days/01/" 
  },
  { 
    title: "Mathematics for Deep Learning: Linear Algebra", 
    duration: "3 hrs", 
    link: "/30dayschallenge/deep-learning/days/02/" 
  },
  {
    title: "Mathematics for Deep Learning: Calculus",
    duration: "3 hrs",
    link: "/30dayschallenge/deep-learning/days/03/",
  },
  {
    title: "Mathematics for Deep Learning: Probability and Statistics",
    duration: "3 hrs",
    link: "/30dayschallenge/deep-learning/days/04/",
  },
  {
    title: "Neural Networks Basics: Perceptrons and Activation Functions",
    duration: "3 hrs",
    link: "/30dayschallenge/deep-learning/days/05/",
  },
  {
    title: "Neural Networks Basics: Network Architecture and Layers",
    duration: "3 hrs",
    link: "/30dayschallenge/deep-learning/days/06/",
  },
  {
    title: "Training Neural Networks: Forward Propagation and Loss Functions",
    duration: "3 hrs",
    link: "/30dayschallenge/deep-learning/days/07/",
  },
  {
    title: "Training Neural Networks: Backpropagation and Gradient Descent",
    duration: "3 hrs",
    link: "/30dayschallenge/deep-learning/days/08/",
  },
  {
    title: "Optimization Techniques: Advanced Optimizers (Adam, RMSprop)",
    duration: "3 hrs",
    link: "/30dayschallenge/deep-learning/days/09/",
  },
  {
    title: "Regularization Techniques: Dropout and L2/L1 Regularization",
    duration: "3 hrs",
    link: "/30dayschallenge/deep-learning/days/10/",
  },
  {
    title: "Regularization Techniques: Batch Normalization",
    duration: "3 hrs",
    link: "/30dayschallenge/deep-learning/days/11/",
  },
  {
    title: "Hyperparameter Tuning: Grid Search and Random Search",
    duration: "3 hrs",
    link: "/30dayschallenge/deep-learning/days/12/",
  },
  {
    title: "Hyperparameter Tuning: Bayesian Optimization",
    duration: "3 hrs",
    link: "/30dayschallenge/deep-learning/days/13/",
  },
  {
    title: "Deep Learning Frameworks: Introduction to TensorFlow and Keras",
    duration: "3 hrs",
    link: "/30dayschallenge/deep-learning/days/14/",
  },
  {
    title: "Convolutional Neural Networks (CNNs): Architecture and Convolutional Layers",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/15/",
  },
  {
    title: "Convolutional Neural Networks (CNNs): Pooling Layers and Applications",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/16/",
  },
  {
    title: "Advanced CNN Architectures: ResNet and Inception",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/17/",
  },
  {
    title: "Advanced CNN Architectures: MobileNet and EfficientNet",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/18/",
  },
  {
    title: "Recurrent Neural Networks (RNNs): Architecture and Applications",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/19/",
  },
  {
    title: "Long Short-Term Memory (LSTM) Networks: Architecture and Applications",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/20/",
  },
  {
    title: "Gated Recurrent Units (GRUs): Architecture and Applications",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/21/",
  },
  {
    title: "Natural Language Processing (NLP): Tokenization and Embeddings",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/22/",
  },
  {
    title: "Transformers and Attention Mechanisms: Self-Attention and BERT",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/23/",
  },
  {
    title: "Generative Adversarial Networks (GANs): Architecture and Training",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/24/",
  },
  {
    title: "Autoencoders: Architecture and Applications",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/25/",
  },
  {
    title: "Variational Autoencoders (VAEs): Architecture and Applications",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/26/",
  },
  {
    title: "Reinforcement Learning: Basics and Q-Learning",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/27/",
  },
  {
    title: "Deep Reinforcement Learning: DQN and Policy Gradients",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/28/",
  },
  {
    title: "Transfer Learning: Pre-Trained Models and Fine-Tuning",
    duration: "4 hrs",
    link: "/30dayschallenge/deep-learning/days/29/",
  },
  {
    title: "Project Work: Implement a Deep Learning Project",
    duration: "6 hrs",
    link: "/30dayschallenge/deep-learning/days/30/",
  }
];


export default function TipsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tips, setTips] = useState(allTips);

  const handleSearch = () => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredTips = allTips.filter((tip) =>
      tip.title.toLowerCase().includes(query)
    );
    setTips(filteredTips);
  };

  return (
    <div className="min-h-screen  text-white  mb-10 p-8 flex flex-col items-center justify-start">
      <div className="w-full max-w-3xl space-y-8">
        {/* Comet image placeholder */}
        <div className="h-40 flex items-center justify-center">
          <div className="w-20 h-20 bg-[#2D1537] rounded-full blur-2xl opacity-50"></div>
        </div>

        <h1 className="text-5xl font-bold text-center text-[#2D1537] ">30Days of Deep Learning</h1>
        <p className="text-lg text-center text-[#2D1537] ">
          A collection of useful tips that you wish you
          <br />
          knew when you started cracking Deep learning.
        </p>

        <div className="relative">
          <Input
            className="search-input w-full bg-[#2D1537] border-none text-white placeholder-white pl-10 pr-4 py-2 rounded-md"
            placeholder={`Search through ${allTips.length} challenges available`}
            value={searchQuery}
            onChange={handleSearch}
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
            size={20}
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-sm">
            ⌘K
          </span>
        </div>

        <div className="space-y-4">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-[#2D1537] p-4 rounded-md"
            >
              <div className="w-12 h-12 bg-[#ac67ca] rounded-md flex items-center justify-center">
                <span className="text-2xl">▶️</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">
                  {tip.link ? (
                    <Link href={tip.link}>{tip.title}</Link>
                  ) : (
                    <span>{tip.title}</span>
                  )}
                </h3>
              </div>
              <span className="text-sm text-white">{tip.duration}</span>
            </div>
          ))}
        </div>

        {tips.length === 0 && (
          <p className="text-center text-[#2D1537]">
            No tips found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
