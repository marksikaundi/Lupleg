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
        Setting up a Python environment in all operating systems
      </h1>
      <div className="text-center text-gray-500 mb-4">19 JANUARY 2025</div>
      <div className="text-center text-gray-700 mb-6">
        Mark Sikaundi - Data Scientist and AI Researcher.{" "}
      </div>
      <div className="flex justify-center mb-8">
        <SharePost className="w-4 h-4 mr-2" />
      </div>
      <img
        src="/ml/alpha.webp"
        alt="Basics of Python and Machine Learning"
        height="400"
        width="800"
        className="w-full rounded-lg mb-8"
      />
      <p className="font-mono text-lg mb-6">
        <span className="text-6xl">B</span>best way to setup your python coding
        environment in all operating systems. Python is a high-level programming
        language that is widely used in the field of machine learning. It is a
        versatile language that is easy to learn and use. Python is an
        open-source language that is used by many developers to create machine
        learning models.
      </p>
      <div className="space-y-4 text-gray-700">
        <p>
          What you will need to get started is pretty any operating system that
          you are using. You can use Windows, Mac, or Linux. You will also need
          an internet connection to download the required software and
          libraries. You will also need a text editor or an IDE to write and run
          your Python code.
        </p>
        <p>
          Once you have all the required software and libraries installed, you
          can start writing and running your Python code. You can use Python to
          create machine learning models, analyze data, and build web
          applications.
        </p>
        <p>
          So now let's get started with setting up a Python environment in all
          operating systems.
        </p>

        <h2 className="text-2xl text-[#2D1537] my-4 font-bold">
          Installing Python on Windows
        </h2>
        <p>
          To install Python on Windows, you can download the latest version of
          Python from the official Python website. Once you have downloaded the
          Python installer, you can run the installer and follow the on-screen
          instructions to install Python on your computer.
        </p>

        <h2 className="text-2xl text-[#2D1537] my-4 font-bold">
          Installing Python on Mac
        </h2>
        <p>
          To install Python on Mac, you can download the latest version of
          Python from the official Python website. Once you have downloaded the
          Python installer, you can run the installer and follow the on-screen
          instructions to install Python on your computer.
        </p>

        <h2 className="text-2xl text-[#2D1537] my-4 font-bold">
          Installing Python on Linux
        </h2>
        <p>
          To install Python on Linux, you can use the package manager that comes
          with your Linux distribution. You can install Python by running the
          following command in the terminal:
        </p>
        <pre>
          <code>{`sudo apt-get install python3`}</code>
        </pre>

        <h2 className="text-2xl text-[#2D1537] my-4 font-bold">
          Installing required libraries and tools
        </h2>
        <p>
          To install the required libraries and tools for machine learning, you
          can use the pip package manager, which comes with Python. You can
          install the required libraries and tools by running the following
          commands in the terminal:
        </p>

        <h2 className="text-2xl text-[#2D1537] my-4 font-bold">
          First you will need to install pip
        </h2>

        <p>
          To install pip, you can run the following command in the terminal:
        </p>
        <pre>
          <code>{`pip install pip`}</code>
        </pre>

        <pre>
          <code>
            {`pip install numpy
pip install pandas
pip install matplotlib
pip install scikit-learn
pip install tensorflow
pip install keras`}
          </code>
        </pre>

        <h2 className="text-2xl text-[#2D1537] my-4 font-bold">
          How to setup a virtual environment in Python
        </h2>
        <p>
          A virtual environment is a self-contained directory that contains a
          Python installation for a particular version of Python, as well as the
          required libraries and tools for a project. Virtual environments are
          used to isolate projects and avoid conflicts between different
          projects.
        </p>

        <h2 className="text-2xl text-[#2D1537] my-4 font-bold">
          In Mac and Linux operating systems:
        </h2>

        <pre>
          <code>
            {`pip install virtualenv
virtualenv myenv
source myenv/bin/activate`}
          </code>
        </pre>

        <h2 className="text-2xl text-[#2D1537] my-4 font-bold">
          In Windows operating systems:
        </h2>
        <pre>
          <code>
            {`pip install virtualenv
virtualenv myenv
myenv\Scripts\activate`}
          </code>
        </pre>

        <h2 className="text-2xl text-[#2D1537] my-4 font-bold">
          To verify the installation of the required libraries and tools
        </h2>

        <p>
          To verify the installation of the required libraries and tools, you
          can run the following command in the terminal:
        </p>
        <pre>
          <code>
            {`python
import numpy
import pandas
import matplotlib
import sklearn
import tensorflow
import keras`}
          </code>
        </pre>

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
