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
        Basic Classification with a Neural Network with Keras and TensorFlow
      </h1>
      <div className="text-center text-gray-500 mb-4">27 JANUARY 2025</div>
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
        Keras is a high-level neural networks API, written in Python and capable
        of running on top of TensorFlow, CNTK, or Theano. It allows for easy and
        fast prototyping, supports both convolutional networks and recurrent
        networks, and runs seamlessly on both CPUs and GPUs.
      </p>
      <div className="space-y-4 text-gray-700">
        <p>
          Keras is a high-level neural networks API, written in Python and
          capable of running on top of TensorFlow, CNTK, or Theano. It allows
          for easy and fast prototyping, supports both convolutional networks
          and recurrent networks, and runs seamlessly on both CPUs and GPUs.
        </p>{" "}
        <p>
          Keras is designed to be user-friendly, modular, and extensible. It
          provides a simple and intuitive interface that allows you to build
          complex neural networks with just a few lines of code. Keras also
          supports a wide range of neural network architectures, including
          feedforward networks, convolutional networks, recurrent networks, and
          more.
        </p>{" "}
        <p>
          TensorFlow is an open-source machine learning library developed by
          Google. It provides a flexible and efficient framework for building
          and training machine learning models, including neural networks. With
          TensorFlow, you can easily create custom models, train them on large
          datasets, and deploy them in production environments.
        </p>{" "}
        <p>
          TensorFlow is designed to be scalable, allowing you to train models on
          distributed systems with multiple GPUs and CPUs. It also provides
          tools for visualizing and debugging your models, making it easier to
          understand and improve their performance.
        </p>{" "}
        <p>
          In this tutorial, we will use Keras with TensorFlow as the backend to
          build a basic classification model. We will train the model on the
          famous MNIST dataset, which consists of 28x28 pixel grayscale images
          of handwritten digits. The goal is to classify the digits into one of
          ten classes (0-9) based on the pixel values.
        </p>{" "}
        <p>
          We will start by loading the dataset and preprocessing the images. We
          will then build a simple neural network with a single hidden layer and
          train it on the training data. Finally, we will evaluate the model on
          the test data and visualize the results.
        </p>{" "}
        <p>
          By the end of this tutorial, you will have a basic understanding of
          how to build and train a neural network using Keras and TensorFlow.
          You will also have a working classification model that can recognize
          handwritten digits with high accuracy.
        </p>{" "}
        <p>
          To get started, you will need to install the following Python
          libraries: TensorFlow, Keras, NumPy, and Matplotlib. You can install
          them using pip:
        </p>{" "}
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>pip install tensorflow keras numpy matplotlib</code>
        </pre>{" "}
        <p>
          Once you have installed the required libraries, you can proceed with
          the tutorial. Let's get started!
        </p>{" "}
        <h1 className="my-4 font-bold">
          Step 2: Understand the Basic Structure of a Keras Model
        </h1>
        <p>
          A Keras model is a collection of layers that are connected in a
          sequential or functional manner. Each layer in the model performs a
          specific type of processing, such as feature extraction or
          classification. The layers communicate with each other through
          connections, which carry the output of one layer to the input of the
          next layer.
        </p>{" "}
        <p>
          Keras models are typically built using the Sequential API or the
          Functional API. Here, we'll cover the basic structure of a Keras model
          using the Sequential API.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            {`
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
            `}
          </code>
        </pre>{" "}
        <h1 className="my-4 font-bold">Step 2 Define the model:</h1>
        <p>
          The Sequential model is a linear stack of layers. You can create a
          Sequential model by passing a list of layer instances to the
          constructor.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            {`
model = Sequential([
    Dense(128, activation='relu', input_shape=(784,)),
    Dense(10, activation='softmax')
])
    `}
          </code>
        </pre>
        <p>
          Here, we define a Sequential model with two layers: a hidden layer
          with 128 neurons and a ReLU activation function, and an output layer
          with 10 neurons and a softmax activation function. The input shape of
          the model is (784,), which corresponds to the 28x28 pixel images of
          handwritten digits.
        </p>
        <h1 className="my-4 font-bold">Step 3 Compile the model:</h1>
        <p>
          Before training the model, you need to compile it with a loss
          function, an optimizer, and evaluation metrics.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            {`
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])
    `}
          </code>
        </pre>
        <p>
          Here, we compile the model with the Adam optimizer, the sparse
          categorical crossentropy loss function, and the accuracy metric. The
          Adam optimizer is a popular optimization algorithm that is well-suited
          for training deep neural networks. The sparse categorical crossentropy
          loss function is used for multi-class classification tasks, and the
          accuracy metric measures the performance of the model on the training
          data.
        </p>
        <h1 className="my-4 font-bold">Step 4 Train the model:</h1>
        <p>Now we can train the model on the training data.</p>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            {`
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_test, y_test))
    `}
          </code>
        </pre>
        <p>
          Here, we train the model on the training data (X_train, y_train) for
          10 epochs with a batch size of 32. We also evaluate the model on the
          test data (X_test, y_test) after each epoch to monitor its
          performance.
        </p>
        <h1 className="my-4 font-bold">Step 5 Evaluate the model:</h1>
        <p>
          Finally, we can evaluate the model on the test data and visualize the
          results.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            {`
loss, accuracy = model.evaluate(X_test, y_test)
print('Test accuracy:', accuracy)
    `}
          </code>
        </pre>
        <p>
          Here, we evaluate the model on the test data (X_test, y_test) and
          print the test accuracy. This gives us an idea of how well the model
          generalizes to new, unseen data.
        </p>
        <h1 className="my-4 font-bold">Step 6 Visualize the results:</h1>
        <p>
          Finally, we can visualize the results of the model on the test data.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            {`
import matplotlib.pyplot as plt

predictions = model.predict(X_test)
plt.figure(figsize=(10, 10))
for i in range(25):
    plt.subplot(5, 5, i + 1)
    plt.imshow(X_test[i].reshape(28, 28), cmap='gray')
    plt.title('Predicted: {}'.format(np.argmax(predictions[i])))
    plt.axis('off')
plt.show()
    `}
          </code>
        </pre>
        <p>
          Here, we use the model to make predictions on the test data (X_test)
          and visualize the results. We plot the first 25 images in the test
          data along with the predicted class labels. This gives us an idea of
          how well the model is performing on the test data.
        </p>
        <h1 className="my-4 font-bold">What are layers in Keras</h1>
        <p>
          A Keras model is a collection of layers that are connected in a
          sequential or functional manner. Each layer in the model performs a
          specific type of processing, such as feature extraction or
          classification. The layers communicate with each other through
          connections, which carry the output of one layer to the input of the
          next layer.
        </p>
        <p>
          There are several types of layers in a Keras model, including input
          layers, output layers, and hidden layers. The input layer receives the
          data and passes it to the first hidden layer. The hidden layers
          process the data in parallel and communicate with each other through
          connections. The output layer produces the final output of the model,
          which can be used for classification or regression tasks.
        </p>{" "}
        <p>The basic structure of a Keras model is as follows:</p>{" "}
        <ul>
          <li>Input layer</li>
          <li>Hidden layers</li>
          <li>Output layer</li>
        </ul>{" "}
        <p>
          The input layer receives the data and passes it to the first hidden
          layer. The hidden layers process the data in parallel and communicate
          with each other through connections. The output layer produces the
          final output of the model, which can be used for classification or
          regression tasks.
        </p>{" "}
        <p>
          The layers in a Keras model are connected in a sequential or
          functional manner. In a sequential model, the layers are stacked on
          top of each other, with the output of one layer feeding into the input
          of the next layer. In a functional model, the layers are connected in
          a more complex manner, allowing for more flexibility in the model
          structure.
        </p>{" "}
        <p>
          In the next section, we will build a simple Keras model with a single
          hidden layer and train it on the MNIST dataset. We will then evaluate
          the model on the test data and visualize the results.
        </p>{" "}
        <h1 className="my-4 font-bold">Step 3: Build a Simple Keras Model</h1>
        <p>
          In this section, we will build a simple Keras model with a single
          hidden layer. The model will consist of three layers: an input layer,
          a hidden layer, and an output layer. We will use the Sequential API to
          create the model and add the layers one by one.
        </p>{" "}
        <p>
          The input layer will receive the 28x28 pixel grayscale images of
          handwritten digits. The hidden layer will perform feature extraction
          and classification, and the output layer will produce the final
          classification result.
        </p>{" "}
        <p>The basic structure of the model is as follows:</p>{" "}
        <ul>
          <li>Input layer: 28x28 pixel grayscale images</li>
          <li>Hidden layer: 128 neurons with ReLU activation function</li>
          <li>Output layer: 10 neurons with softmax activation function</li>
        </ul>{" "}
        <p>
          The input layer will receive the 28x28 pixel grayscale images of
          handwritten digits. The hidden layer will perform feature extraction
          and classification, and the output layer will produce the final
          classification result.
        </p>{" "}
        <p>
          The hidden layer will consist of 128 neurons with the ReLU activation
          function. ReLU is a popular activation function that introduces
          non-linearity into the model, allowing it to learn complex patterns in
          the data.
        </p>{" "}
        <p>
          The output layer will consist of 10 neurons with the softmax
          activation function. Softmax is a common activation function used in
          classification tasks, as it produces a probability distribution over
          the classes.
        </p>{" "}
        <p>
          In the next section, we will implement the model in Keras and train it
          on the MNIST dataset. We will then evaluate the model on the test data
          and visualize the results.
        </p>{" "}
        <h1 className="my-4 font-bold">Step 4: Train the Keras Model</h1>
        <p>
          In this section, we will train the Keras model on the MNIST dataset.
          We will use the model to classify the handwritten digits into one of
          ten classes (0-9) based on the pixel values.
        </p>{" "}
        <p>
          We will start by loading the MNIST dataset and preprocessing the
          images. We will then build the Keras model with a single hidden layer
          and train it on the training data. Finally, we will evaluate the model
          on the test data and visualize the results.
        </p>{" "}
        <p>The training process consists of the following steps:</p>{" "}
        <ul>
          <li>Load the MNIST dataset</li>
          <li>Preprocess the images</li>
          <li>Build the Keras model</li>
          <li>Compile the model</li>
          <li>Train the model on the training data</li>
          <li>Evaluate the model on the test data</li>
        </ul>{" "}
        <p>The training process consists of the following steps:</p>{" "}
        <ul>
          <li>Load the MNIST dataset</li>
          <li>Preprocess the images</li>
          <li>Build the Keras model</li>
          <li>Compile the model</li>
          <li>Train the model on the training data</li>
          <li>Evaluate the model on the test data</li>
        </ul>{" "}
        <p>The training process consists of the following steps:</p>{" "}
        <ul>
          <li>Load the MNIST dataset</li>
          <li>Preprocess the images</li>
          <li>Build the Keras model</li>
          <li>Compile the model</li>
          <li>Train the model on the training data</li>
          <li>Evaluate the model on the test data</li>
        </ul>{" "}
        <div>
          <h2></h2>
          <p>
            Learn more about Keras
            <Link
              className="ml-4 font-bold italic"
              href="https://github.com/Lupleg/30DaysOfDeepLearning/blob/main/09/Intro_Keras.md"
            >
              Lupleg Community
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
