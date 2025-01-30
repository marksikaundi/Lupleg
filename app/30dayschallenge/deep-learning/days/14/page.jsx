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
        Evaluating the performance of a Convolutional Neural Network (CNN)
      </h1>
      <div className="text-center text-gray-500 mb-4">29 JANUARY 2025</div>
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
        A confusion matrix is a table that is often used to describe the
        performance of a classification model on a set of test data for which
        the true values are known. It allows you to see the number of correct
        and incorrect predictions made by the model compared to the actual
        classifications in the test data.
      </p>
      <div className="space-y-4 text-gray-700">
        <h2 className="my-4 font-bold">Confusion Matrix</h2>
        <p>
          The confusion matrix is a 2x2 table that contains 4 outputs provided
          by the binary classifier. Various measures, such as error-rate,
          accuracy, specificity, sensitivity, precision, and recall, can be
          derived from the confusion matrix.
        </p>

        <h2 className="my-4 font-bold">Components of a Confusion Matrix:</h2>
        <p>
          <strong>True Positives (TP):</strong> The number of positive instances
          correctly classified as positive.
        </p>
        <p>
          <strong>True Negatives (TN):</strong> The number of negative instances
          correctly classified as negative.
        </p>
        <p>
          <strong>False Positives (FP):</strong> The number of negative
          instances incorrectly classified as positive.
        </p>
        <p>
          <strong>False Negatives (FN):</strong> The number of positive
          instances incorrectly classified as negative.
        </p>
        <p>
          The confusion matrix is a powerful tool for evaluating the performance
          of a classification model. It provides a clear picture of the model's
          performance and helps identify areas for improvement. By analyzing the
          confusion matrix, you can gain insights into the model's strengths and
          weaknesses and make informed decisions about how to optimize its
          performance.
        </p>

        <h2 className="my-4 font-bold">Example:</h2>
        <p>
          Suppose we have a binary classification model that predicts whether a
          patient has a particular disease based on a set of symptoms. The
          confusion matrix for this model might look like this:
        </p>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">Actual</th>
              <th className="border border-gray-400 p-2">Predicted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">Disease</td>
              <td className="border border-gray-400 p-2">Positive</td>
            </tr>

            <tr>
              <td className="border border-gray-400 p-2">No Disease</td>
              <td className="border border-gray-400 p-2">Negative</td>
            </tr>
          </tbody>
        </table>

        <h2 className="my-4 font-bold">
          Metrics Derived from Confusion Matrix:
        </h2>
        <ul>
          <li>
            <strong>Accuracy:</strong> The proportion of correctly classified
            instances.
          </li>
          <li>
            <strong>Error Rate:</strong> The proportion of incorrectly
            classified instances.
          </li>
          <li>
            <strong>True Positive Rate (TPR):</strong> The proportion of actual
            positive instances that are correctly classified as positive.
          </li>
          <li>
            <strong>False Positive Rate (FPR):</strong> The proportion of actual
            negative instances that are incorrectly classified as positive.
          </li>
        </ul>

        <h2 className="my-4 font-bold">Visualization</h2>
        <p>
          The confusion matrix can be visualized using a heatmap to provide a
          clear and intuitive representation of the model's performance. This
          visualization can help identify patterns and trends in the model's
          predictions and highlight areas for improvement.
        </p>

        <pre>
          <code>
            {`
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix

# Assuming y_true are the true labels and y_pred are the predicted labels
conf_matrix = confusion_matrix(y_true, y_pred)

plt.figure(figsize=(10, 7))
sns.heatmap(conf_matrix, annot=True, fmt='d', cmap='Blues')
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.title('Confusion Matrix')
plt.show()
            `}
          </code>
        </pre>

        <p>
          By analyzing the confusion matrix and the derived metrics, you can
          gain valuable insights into the performance of your classification
          model and make informed decisions about how to improve its accuracy
          and reliability.
        </p>

        <h2 className="my-4 font-bold">2. Classification Report</h2>
        <p>
          A classification report provides a comprehensive overview of the main
          classification metrics: precision, recall, and F1 score for each
          class. This is particularly useful for multi-class classification
          problems.
        </p>

        <pre>
          <code>
            {`
from sklearn.metrics import classification_report

# Assuming y_true are the true labels and y_pred are the predicted labels
report = classification_report(y_true, y_pred, target_names=['Cat', 'Dog'])
print(report)

            `}
          </code>
        </pre>

        <h2 className="my-4 font-bold">Explanation of Metrics:</h2>
        <p>
          <strong>Precision:</strong> The proportion of positive instances that
          were correctly classified. It is calculated as TP / (TP + FP).
        </p>
        <p>
          <strong>Recall:</strong> The proportion of actual positive instances
          that were correctly classified. It is calculated as TP / (TP + FN).
        </p>
        <p>
          <strong>F1 Score:</strong> The harmonic mean of precision and recall.
          It is calculated as 2 * (precision * recall) / (precision + recall).
        </p>

        <h2 className="my-4 font-bold">Putting It All Together</h2>
        <p>
          By combining the confusion matrix, classification report, and other
          evaluation metrics, you can gain a comprehensive understanding of your
          classification model's performance. This information can help you
          identify areas for improvement and make informed decisions about how
          to optimize your model for better results.
        </p>
        <p>
          Let's assume we have a trained CNN model and we want to evaluate its
          performance on a test dataset. We can use the confusion matrix, the
          classification report, and other evaluation metrics to assess the
          model's accuracy, precision, recall, and other key performance
          indicators.
        </p>

        <pre>
          <code>
            {`
import numpy as np
from sklearn.metrics import confusion_matrix, classification_report
import matplotlib.pyplot as plt
import seaborn as sns

# Assuming we have a trained model and test data
# X_test, y_test = ... (your test data)
# model = ... (your trained CNN model)

# Predicting the labels for the test set
y_pred = model.predict(X_test)
y_pred_classes = np.argmax(y_pred, axis=1)
y_true = np.argmax(y_test, axis=1)

# Confusion Matrix
conf_matrix = confusion_matrix(y_true, y_pred_classes)

plt.figure(figsize=(10, 7))
sns.heatmap(conf_matrix, annot=True, fmt='d', cmap='Blues')
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.title('Confusion Matrix')
plt.show()

# Classification Report
report = classification_report(y_true, y_pred_classes, target_names=['Class1', 'Class2', 'Class3'])
print(report)

            `}
          </code>
        </pre>

        <h2 className="my-4 font-bold">Conclusion</h2>
        <p>
          Evaluating the performance of a Convolutional Neural Network (CNN) is
          essential to ensure that it meets the desired accuracy and reliability
          levels. By using tools such as the confusion matrix, classification
          report, and other evaluation metrics, you can gain valuable insights
          into your model's performance and make informed decisions about how to
          optimize it for better results.
        </p>

        <div>
          <h2></h2>
          <p>
            Learn more from
            <Link
              className="ml-4 font-bold italic"
              href="https://github.com/Lupleg/30DaysOfDeepLearning/blob/main/14/Evaluation.md"
            >
              Lupleg Community
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
