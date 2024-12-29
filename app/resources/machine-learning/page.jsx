import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpenIcon,
  CodeIcon,
  GraduationCapIcon,
} from "lucide-react";
import Link from "next/link";

export default function MachineLearning() {
  const notebooks = [
    {
      title: "Introduction to Neural Networks",
      description:
        "Learn the basics of neural networks and implement a simple model using TensorFlow.",
      tags: ["Neural Networks", "TensorFlow", "Beginner"],
      icon: <GraduationCapIcon className="h-4 w-4" />,
    },
    {
      title: "Natural Language Processing",
      description:
        "Explore advanced NLP techniques using BERT for text classification and sentiment analysis.",
      tags: ["NLP", "BERT", "Advanced"],
      icon: <CodeIcon className="h-4 w-4" />,
    },
    {
      title: "Computer Vision: Image Classification",
      description:
        "Build an image classification model using Convolutional Neural Networks (CNNs) with PyTorch.",
      tags: ["Computer Vision", "CNN", "PyTorch"],
      icon: <BookOpenIcon className="h-4 w-4" />,
    },
    {
      title: "Time Series Forecasting",
      description:
        "Implement ARIMA and Prophet models for time series analysis and forecasting.",
      tags: ["Time Series", "ARIMA", "Prophet"],
      icon: <CodeIcon className="h-4 w-4" />,
    },
    {
      title: "Reinforcement Learning: Q-Learning",
      description:
        "Get started with reinforcement learning by implementing a Q-learning algorithm.",
      tags: ["Reinforcement Learning", "Q-Learning", "OpenAI Gym"],
      icon: <GraduationCapIcon className="h-4 w-4" />,
    },
    {
      title: "Clustering Algorithms",
      description:
        "Explore various clustering techniques including K-means, DBSCAN, and Hierarchical Clustering.",
      tags: ["Clustering", "Unsupervised Learning", "scikit-learn"],
      icon: <BookOpenIcon className="h-4 w-4" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen  ">
      <main className="flex-1">
        <section className="w-full bg-[#2D1537] py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Machine Learning Notebooks
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl text-base">
                  Explore our collection of machine learning notebooks covering
                  various topics and techniques.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#">
                  <Button className="w-full sm:w-auto bg-[#F3A833] hover:bg-[#F3A833]  ">
                    Get Started
                  </Button>
                </Link>

                <Link href="#">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted px-4 md:px-6">
          <div className="container">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {notebooks.map((notebook, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      {notebook.icon}
                      {notebook.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {notebook.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {notebook.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
