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
        BuildingSimple Neural Network(NN) from Scratch
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
        Today we are going to build and train a simple neural network using the
        MNIST dataset. The MNIST dataset consists of 60,000 training images and
        10,000 testing images of handwritten digits (0-9). We'll use TensorFlow
        and Keras to build and train our neural network. Below is a step-by-step
        guide with detailed comments and explanations.
      </p>
      <div className="space-y-4 text-gray-700">
        <h2 className="my-4 font-bold">Step 1: Import Libraries</h2>
        <pre>
          <code>
            {`import tensorflow as tf
from tensorflow import keras
import numpy as np
import matplotlib.pyplot as plt`}
          </code>
        </pre>
        <h2 className="my-4 font-bold">Step 2: Load the MNIST dataset</h2>
        <pre>
          <code>
            {`
# Load the MNIST dataset
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Normalize the images to values between 0 and 1
x_train = x_train / 255.0
x_test = x_test / 255.0

# Convert labels to one-hot encoding
y_train = to_categorical(y_train, 10)
y_test = to_categorical(y_test, 10)
            `}
          </code>
        </pre>
        <h2 className="my-4 font-bold">Step 3: Build the Neural Network</h2>
        <pre>
          <code>
            {`
# Initialize the model
model = Sequential()

# Flatten the input data (28x28 images) to a 1D array of 784 elements
model.add(Flatten(input_shape=(28, 28)))

# Add a dense layer with 128 neurons and ReLU activation function
model.add(Dense(128, activation='relu'))

# Add an output layer with 10 neurons (one for each digit) and softmax activation function
model.add(Dense(10, activation='softmax'))
            
            `}
          </code>
        </pre>
        <h2 className="my-4 font-bold">Step 4: Compile the Model</h2>
        <pre>
          <code>
            {`
# Compile the model
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])
            `}
          </code>
        </pre>
        <h2 className="my-4 font-bold">Step 5: Train the Model</h2>
        <pre>
          <code>
            {`
# Train the model
history = model.fit(x_train, y_train, epochs=10, batch_size=32, validation_split=0.2)
            `}
          </code>
        </pre>
        <h2 className="my-4 font-bold">Step 6: Evaluate the Model</h2>
        <pre>
          <code>{`
# Evaluate the model on the test data
test_loss, test_accuracy = model.evaluate(x_test, y_test)

print(f'Test loss: {test_loss}')
print(f'Test accuracy: {test_accuracy}')`}</code>
        </pre>
        <h2 className="my-4 font-bold">Step 7: Visualize Training History</h2>
        <pre>
          <code>
            {`
# Plot training & validation accuracy values
plt.figure(figsize=(12, 4))

plt.subplot(1, 2, 1)
plt.plot(history.history['accuracy'])
plt.plot(history.history['val_accuracy'])
plt.title('Model accuracy')
plt.ylabel('Accuracy')
plt.xlabel('Epoch')
plt.legend(['Train', 'Validation'], loc='upper left')

# Plot training & validation loss values
plt.subplot(1, 2, 2)
plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.title('Model loss')
plt.ylabel('Loss')
plt.xlabel('Epoch')
plt.legend(['Train', 'Validation'], loc='upper left')

plt.show()
            
           `}
          </code>
        </pre>
        <h2 className="my-4 font-bold">Conclusion</h2>
        <p>
          In this tutorial, we built and trained a simple neural network using
          the MNIST dataset. We used TensorFlow and Keras to build the model and
          train it on the training data. We then evaluated the model on the test
          data and visualized the training history. We achieved an accuracy of
          over 98% on the test data, which is quite good for a simple neural
          network. You can further improve the model by experimenting with
          different architectures, hyperparameters, and optimization algorithms.
        </p>
        <h2 className="my-4 font-bold">Access to full source codes</h2>
        <p>
          You can access the full source code for this tutorial on our GitHub
          repository. Feel free to fork the repository and experiment with the
          code on your own.
        </p>
        <Link
          href="https://github.com/Lupleg/30DaysOfDeepLearning/blob/main/10/BuildingSimple_Neural_Network.md#full-code"
          className="font-bold italic"
        >
          GitHub Repository
        </Link>
        <br />

        <div>
          <h2 className="my-4 font-bold"></h2>
          <p>
            Credit source from:
            <Link
              className="ml-4 font-bold italic"
              href="https://deepmind.google/discover/blog/a-new-generation-of-african-talent-brings-cutting-edge-ai-to-scientific-challenges/"
            >
              Google DeepMind
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
