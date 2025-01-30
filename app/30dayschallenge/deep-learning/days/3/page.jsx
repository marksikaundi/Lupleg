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
        The basics of using Matplotlib and Seaborn for data visualization
      </h1>
      <div className="text-center text-gray-500 mb-4">24 JANUARY 2025</div>
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
        Let's go through the basics of using Matplotlib and Seaborn for data
        visualization in Python. We'll cover how to create basic plots such as
        line plots, bar plots, and scatter plots.
      </p>
      <div className="space-y-4 text-gray-700">
        <h2 className="my-4 font-bold">Introduction</h2>
        <p>
          Data visualization is an essential skill for data scientists and
          machine learning engineers. It helps in understanding the data and
          communicating insights to stakeholders. In this article, we'll cover
          the basics of using Matplotlib and Seaborn for data visualization in
          Python.
        </p>
        <h2 className="my-4 font-bold">What is Matplotlib?</h2>
        <p>
          Matplotlib is a popular data visualization library in Python. It
          provides a wide range of plotting functions to create various types of
          plots such as line plots, bar plots, scatter plots, and more.
          Matplotlib is highly customizable and allows you to create
          publication-quality plots.
        </p>

        <h2 className="my-4 font-bold">What is Seaborn?</h2>
        <p>
          Seaborn is a statistical data visualization library built on top of
          Matplotlib. It provides a high-level interface for creating attractive
          and informative statistical graphics. Seaborn simplifies the process
          of creating complex plots and provides a wide range of built-in themes
          and color palettes.
        </p>

        <h2 className="my-4 font-bold">Installing Matplotlib and Seaborn</h2>
        <p>
          You can install Matplotlib and Seaborn using pip, the Python package
          manager. Run the following commands in your terminal:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>{`pip install matplotlib seaborn`}</code>
        </pre>

        <h2 className="my-4 font-bold">Importing Matplotlib and Seaborn</h2>
        <p>
          To use Matplotlib and Seaborn in your Python script, you need to
          import the libraries. Here's how you can import them:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            {`import matplotlib.pyplot as plt
import seaborn as sns`}
          </code>
        </pre>

        <h2 className="my-4 font-bold">Creating a Line Plot</h2>
        <p>
          A line plot is a type of plot that displays data points connected by
          straight lines. It is useful for visualizing trends and patterns in
          data. Here's how you can create a line plot using Matplotlib:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            {`import matplotlib.pyplot as plt
import numpy as np

# Sample data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Line plot
plt.plot(x, y)
plt.show()
`}
          </code>
        </pre>

        <h2 className="my-4 font-bold">
          How to create a line plot using Matplotlib
        </h2>
        <p>
          To create a line plot using Matplotlib, you need to import the library
          and use the plt.plot() function. Here's an example:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            {`import matplotlib.pyplot as plt
import numpy as np

# Sample data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Line plot
plt.plot(x, y)
plt.show()
`}
          </code>
        </pre>
        <h2 className="my-4 font-bold">Creating Basic Plots</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            {`import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import pandas as pd

# Sample data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Matplotlib line plot
plt.figure(figsize=(8, 6))
plt.plot(x, y, label='sin(x)')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Line Plot using Matplotlib')
plt.legend()
plt.show()

# Seaborn line plot
data = pd.DataFrame({'x': x, 'y': y})
plt.figure(figsize=(8, 6))
sns.lineplot(data=data, x='x', y='y', label='sin(x)')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Line Plot using Seaborn')
plt.legend()
plt.show()
`}
          </code>
        </pre>
        <h2 className="my-4 font-bold">Creating Bar Plots</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            {`import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import pandas as pd

# Sample data
x = ['A', 'B', 'C', 'D', 'E']
y = [10, 20, 30, 40, 50]

# Matplotlib bar plot
plt.figure(figsize=(8, 6))
plt.bar(x, y)
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Bar Plot using Matplotlib')
plt.show()

# Seaborn bar plot
data = pd.DataFrame({'x': x, 'y': y})
plt.figure(figsize=(8, 6))
sns.barplot(data=data, x='x', y='y')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Bar Plot using Seaborn')
plt.show()
`}
          </code>
        </pre>

        <h2 className="my-4 font-bold">Creating Scatter Plots</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            {`import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Sample data
x = np.random.rand(100)
y = np.random.rand(100)

# Matplotlib scatter plot
plt.figure(figsize=(8, 6))
plt.scatter(x, y)
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Scatter Plot using Matplotlib')
plt.show()

# Seaborn scatter plot
data = pd.DataFrame({'x': x, 'y': y})
plt.figure(figsize=(8, 6))
sns.scatterplot(data=data, x='x', y='y')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Scatter Plot using Seaborn')
plt.show()
`}
          </code>
        </pre>

        <h2 className="my-4 font-bold">Conclusion</h2>
        <p>
          In this article, we covered the basics of using Matplotlib and Seaborn
          for data visualization in Python. We created line plots, bar plots,
          and scatter plots using both libraries. Data visualization is an
          essential skill for data scientists and machine learning engineers, as
          it helps in understanding the data and communicating insights to
          stakeholders.
        </p>

        <div>
          <h2></h2>
          <p>
            Explore more with Examples
            <Link
              className="ml-4 font-bold italic"
              href="https://github.com/Lupleg/30DaysOfDeepLearning/blob/main/03/visualization.md"
            >
              Lupleg Community
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
