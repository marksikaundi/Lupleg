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
        For dataset, will use Iris dataset, which is commonly used for
        classification tasks
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
        alt="Iris dataset"
        height="400"
        width="800"
        className="w-full rounded-lg mb-8"
      />
      <p className="font-mono text-lg mb-6">
        Why are we using the Iris dataset? The Iris dataset is a classic dataset
        for classification, machine learning, and data visualization. It is
        often used in introductory machine learning tutorials and courses. The
        dataset is small and easy to understand, making it ideal for educational
        purposes. The Iris dataset contains 150 samples of iris flowers. There
        are four features (sepal length, sepal width, petal length, and petal
        width) and one target variable (species). The target variable has three
        possible values (setosa, versicolor, and virginica). The goal is to
        predict the species of an iris flower based on the four features.
      </p>

      <h2 className="text-2xl font-bold mb-4">About the Iris dataset</h2>
      <p>
        The Iris dataset is a classic dataset for classification, machine
        learning, and data visualization. It is often used in introductory
        machine learning tutorials and courses. The dataset is small and easy to
        understand, making it ideal for educational purposes. The Iris dataset
        contains 150 samples of iris flowers. There are four features (sepal
        length, sepal width, petal length, and petal width) and one target
        variable (species). The target variable has three possible values
        (setosa, versicolor, and virginica). The goal is to predict the species
        of an iris flower based on the four features.
      </p>

      <h2 className="text-2xl font-bold mb-4">Features of the Iris dataset</h2>
      <p>
        The Iris dataset has four features: sepal length, sepal width, petal
        length, and petal width. These features are measured in centimeters. The
        sepal is the outer part of the flower that protects the petals. The
        petal is the inner part of the flower that produces pollen. The sepal
        length and width are the dimensions of the sepal, while the petal length
        and width are the dimensions of the petal. The features are used to
        predict the species of the iris flower.
      </p>

      <h2 className="text-2xl font-bold mb-4">
        Who is behind the Irish dataset{" "}
      </h2>
      <p>
        The Iris dataset was introduced by the British biologist and
        statistician{" "}
        <Link
          className="text-[#2D1537] "
          href="https://en.wikipedia.org/wiki/Ronald_Fisher"
        >
          {" "}
          Ronald Fisher
        </Link>{" "}
        in his 1936 paper "The use of multiple measurements in taxonomic
        problems". The dataset is named after the iris flower, which is a genus
        of flowering plants in the family Iridaceae. The dataset is commonly
        used in machine learning and data science to demonstrate classification
        algorithms.
      </p>

      <h2 className="text-2xl font-bold mb-4">
        Target variable of the Iris dataset
      </h2>

      <p className="font-mono text-lg mb-6">
        {" "}
        What you need to know about the Iris dataset:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>It is a small dataset with 150 samples</li>
        <li>
          It has four features (sepal length, sepal width, petal length, petal
          width)
        </li>
        <li>
          It has one target variable (species) with three possible values
          (setosa, versicolor, virginica)
        </li>
        <li>It is commonly used for classification tasks</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Step 1: Import Libraries</h2>
      <p>First, we need to import the necessary libraries.</p>

      <pre className="bg-gray-100 p-4 rounded-lg text-sm font-mono my-4">
        <code>
          {`

          import numpy as np
import pandas as pd
from sklearn.datasets import load_iris # From public datasets imports
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold mb-4">Step 2: Load the Iris dataset</h2>
      <p>
        Next, we need to load the Iris dataset. We can use the load_iris
        function from the sklearn.datasets module to load the dataset.
      </p>

      <pre className="bg-gray-100 p-4 rounded-lg text-sm font-mono my-4">
        <code>
          {`
# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold mb-4">
        Step 3: Train a Logistic Regression model
      </h2>
      <p>
        Now, we'll create an instance of the <code>LogisticRegression</code>{" "}
        class and train it using the training data.
      </p>

      <pre className="bg-gray-100 p-4 rounded-lg text-sm font-mono my-4">
        <code>
          {`
# Create a logistic regression model
model = LogisticRegression(max_iter=200)

# Train the model
model.fit(X_train, y_train)
`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold mb-4">Step 4: Make predictions</h2>
      <p>
        Next, we'll use the trained model to make predictions on the test data.
      </p>

      <pre className="bg-gray-100 p-4 rounded-lg text-sm font-mono my-4">
        <code>
          {`
# Make predictions
y_pred = model.predict(X_test)
`}
        </code>
      </pre>

      <h2 className="text-2xl font-bold mb-4">Step 5: Evaluate the model</h2>
      <p>
        Finally, we'll evaluate the model by calculating the accuracy, confusion
        matrix, and classification report.
      </p>

      <pre className="bg-gray-100 p-4 rounded-lg text-sm font-mono my-4">
        <code>
          {`
# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy:.2f}')

# Generate confusion matrix
conf_matrix = confusion_matrix(y_test, y_pred)
print('Confusion Matrix:')
print(conf_matrix)

# Generate classification report
class_report = classification_report(y_test, y_pred, target_names=iris.target_names)
print('Classification Report:')
print(class_report)
`}
        </code>
      </pre>

      <div className="space-y-4 text-gray-700">
        <div>
          <h2></h2>
          <p>
            Get full source code on:
            <Link
              className="ml-4 font-bold italic"
              href="https://github.com/Lupleg/30DaysOfDeepLearning/blob/main/06/Introduction.md"
            >
              Lupleg Community
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
