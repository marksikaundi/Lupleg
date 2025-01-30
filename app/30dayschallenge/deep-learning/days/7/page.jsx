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
        Data preprocessing is a crucial step in the data analysis and machine
        learning pipeline
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
        Data preprocessing is a crucial step in the data analysis and machine
        learning pipeline. It involves transforming raw data into a format that
        is more suitable for analysis and modeling.
      </p>
      <div className="space-y-4 text-gray-700">
        <p>
          Common preprocessing techniques include scaling, normalization, and
          encoding. Below, are techniques and provide example code for each.
        </p>

        <h2 className="text-2xl font-bold mb-4">Scaling</h2>
        <p>
          Scaling is a technique used to standardize the range of independent
          variables or features of data. It is an important step in data
          preprocessing as it helps to normalize the data within a particular
          range. This is particularly important for algorithms that are
          sensitive to the scale of the input data, such as support vector
          machines and k-nearest neighbors.
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg">
          <code className="text-sm">
            {`
          import numpy as np
from sklearn.preprocessing import StandardScaler

# Example data
data = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# Initialize the scaler
scaler = StandardScaler()

# Fit and transform the data
scaled_data = scaler.fit_transform(data)

print("Standardized Data:\n", scaled_data)
          `}
          </code>
        </pre>

        <p>
          Min-Max Scaling: Min-Max scaling scales the data to a fixed range,
          usually [0, 1].
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg">
          <code className="text-sm">
            {`
from sklearn.preprocessing import MinMaxScaler

# Initialize the scaler
min_max_scaler = MinMaxScaler()

# Fit and transform the data
min_max_scaled_data = min_max_scaler.fit_transform(data)

print("Min-Max Scaled Data:\n", min_max_scaled_data)
          `}
          </code>
        </pre>

        <h2 className="text-2xl font-bold mb-4">Normalization</h2>
        <p>
          Normalization is a technique used to scale the data in such a way that
          it falls within a specific range, typically 0 and 1. It is useful when
          the features have different units or scales. Normalization helps to
          improve the convergence of the machine learning algorithms and speeds
          up training.
        </p>
        <p>
          Normalization adjusts the values of numeric columns in the dataset to
          a common scale, without distorting differences in the ranges of
          values. It typically scales the data to have a unit norm (e.g., L2
          norm).
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg">
          <code className="text-sm">
            {`
            from sklearn.preprocessing import Normalizer

# Initialize the normalizer
normalizer = Normalizer()

# Fit and transform the data
normalized_data = normalizer.fit_transform(data)

print("Normalized Data:\n", normalized_data)
          `}
          </code>
        </pre>

        <h2 className="text-2xl font-bold mb-4">Encoding</h2>
        <p>
          Encoding is a technique used to convert categorical data into a
          numerical format that can be used for machine learning algorithms.
          There are different encoding techniques, such as one-hot encoding and
          label encoding. One-hot encoding is used when the categories are not
          ordinal, while label encoding is used when the categories have an
          ordinal relationship.
        </p>

        <p>
          Label Encoding: Label encoding assigns a unique integer to each
          category.
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg">
          <code className="text-sm">
            {`
from sklearn.preprocessing import LabelEncoder

# Example categorical data
categories = ['cat', 'dog', 'fish', 'cat', 'dog']

# Initialize the encoder
label_encoder = LabelEncoder()

# Fit and transform the data
encoded_labels = label_encoder.fit_transform(categories)

print("Label Encoded Data:\n", encoded_labels)
          `}
          </code>
        </pre>

        <p>
          One-Hot Encoding: One-hot encoding creates a binary column for each
          category and returns a sparse matrix or dense array.
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg">
          <code className="text-sm">
            {`
            
from sklearn.preprocessing import OneHotEncoder

# Example categorical data
categories = np.array(['cat', 'dog', 'fish', 'cat', 'dog']).reshape(-1, 1)

# Initialize the encoder
one_hot_encoder = OneHotEncoder(sparse=False)

# Fit and transform the data
one_hot_encoded_data = one_hot_encoder.fit_transform(categories)

print("One-Hot Encoded Data:\n", one_hot_encoded_data)
          `}
          </code>
        </pre>

        <h2 className="text-2xl font-bold mb-4">
          Applying Preprocessing to a Dataset
        </h2>
        <p> Let's apply these preprocessing techniques to a sample dataset.</p>

        <pre className="bg-gray-100 p-4 rounded-lg">
          <code className="text-sm">
            {`
            import pandas as pd
from sklearn.model_selection import train_test_split

# Example dataset
data = {
    'age': [25, 45, 35, 50, 23],
    'salary': [50000, 100000, 75000, 120000, 45000],
    'city': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
}

df = pd.DataFrame(data)

# Splitting the dataset into features and target
X = df[['age', 'salary', 'city']]
y = [1, 0, 1, 0, 1]  # Example target variable

# Splitting the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Applying scaling to numerical features
scaler = StandardScaler()
X_train[['age', 'salary']] = scaler.fit_transform(X_train[['age', 'salary']])
X_test[['age', 'salary']] = scaler.transform(X_test[['age', 'salary']])

# Applying one-hot encoding to categorical features
one_hot_encoder = OneHotEncoder(sparse=False)
X_train_city_encoded = one_hot_encoder.fit_transform(X_train[['city']])
X_test_city_encoded = one_hot_encoder.transform(X_test[['city']])

# Concatenating the encoded categorical features with the scaled numerical features
X_train_preprocessed = np.hstack((X_train[['age', 'salary']], X_train_city_encoded))
X_test_preprocessed = np.hstack((X_test[['age', 'salary']], X_test_city_encoded))

print("Preprocessed Training Data:\n", X_train_preprocessed)
print("Preprocessed Testing Data:\n", X_test_preprocessed)
          `}
          </code>
        </pre>

        <p>
          In this example, we first split the dataset into training and testing
          sets. We then applied standard scaling to the numerical features (age
          and salary) and one-hot encoding to the categorical feature (city).
          Finally, we concatenated the preprocessed numerical and categorical
          features to form the final preprocessed dataset.
        </p>

        <p>
          These preprocessing steps are essential for preparing data for machine
          learning models, ensuring that the data is in a suitable format and
          scale for the algorithms to learn effectively.
        </p>

        <div>
          <h2></h2>
          <p>
            Explore more on
            <Link
              className="ml-4 font-bold italic"
              href="https://github.com/Lupleg/30DaysOfDeepLearning/blob/main/07/Introduction.md"
            >
              Lupleg Community
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
