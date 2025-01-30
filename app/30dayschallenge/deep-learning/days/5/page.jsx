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
        Linear Regression and Logistic Regression, including their concepts,
        mathematical foundations
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
        Linear regression and logistic regression are two fundamental algorithms
        in machine learning. They are used to model the relationship between a
        dependent variable and one or more independent variables. In this
        series, we explore the concepts and mathematical foundations of linear
        and logistic regression, and discuss how they are used in practice.
      </p>
      <div className="space-y-4 text-gray-700">
        <p>
          Linear regression is a supervised learning algorithm used to model the
          relationship between a dependent variable and one or more independent
          variables. The goal of linear regression is to find the best-fitting
          straight line that describes the relationship between the dependent
          variable and the independent variables. This line is called the
          regression line, and it is defined by the equation:
        </p>
        <p className="text-center">
          <span className="font-bold">y = mx + b</span>
        </p>

        <h2 className="text-2xl font-bold">Mathematical Foundations</h2>
        <p>
          The goal of linear regression is to find the values of the slope (m)
          and the intercept (b) that minimize the sum of the squared errors
          between the observed values of the dependent variable and the values
          predicted by the regression line. This is done by minimizing the
          following cost function:
        </p>
        <p className="text-center">
          <span className="font-bold">J(m, b) = 1/2m * Σ(y - (mx + b))²</span>
        </p>

        <h2 className="text-2xl font-bold">Logistic Regression</h2>
        <p>
          Logistic regression is a supervised learning algorithm used to model
          the relationship between a dependent variable and one or more
          independent variables. Unlike linear regression, which is used to
          model continuous variables, logistic regression is used to model
          binary variables. The dependent variable in logistic regression is
          binary, meaning it can take on one of two values, typically 0 or 1.
        </p>

        <h2 className="text-2xl font-bold">Mathematical Foundations</h2>
        <p>
          The goal of logistic regression is to find the values of the
          coefficients that maximize the likelihood of the observed data. This
          is done by maximizing the following likelihood function:
        </p>
        <p className="text-center">
          <span className="font-bold">L(θ) = Π (hθ(x))y (1 - hθ(x))1-y</span>
        </p>
        <p>Where hθ(x) is the logistic function, defined as:</p>
        <p className="text-center">
          <span className="font-bold">hθ(x) = 1 / (1 + e^-θx)</span>
        </p>
        <p>
          The logistic function maps any real number to the range [0, 1], making
          it suitable for modeling binary variables. The coefficients θ are
          estimated using an optimization algorithm such as gradient descent.
        </p>

        <h2 className="text-2xl font-bold">NOTE</h2>
        <p>
          To illustrate the concepts of linear regression and logistic
          regression, consider the following examples:
        </p>

        <p>
          <span className="font-bold">Linear Regression:</span> Suppose you have
          a dataset of house prices and the size of the houses. You can use
          linear regression to model the relationship between the size of the
          houses and their prices, and predict the price of a house given its
          size.
        </p>
        <h2 className="text-2xl font-bold">Example</h2>
        <p>
          Let's consider a dataset where we want to predict a person's salary
          based on their years of experience.
        </p>
        <pre>
          <code>
            {`
# Import necessary libraries
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# Create a sample dataset
data = {
    'YearsExperience': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'Salary': [40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000]
}
df = pd.DataFrame(data)

# Define the feature and target variable
X = df[['YearsExperience']]
y = df['Salary']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Mean Squared Error: {mse}")
print(f"R² Score: {r2}")

# Plot the results
plt.scatter(X, y, color='blue')
plt.plot(X, model.predict(X), color='red')
plt.xlabel('Years of Experience')
plt.ylabel('Salary')
plt.title('Linear Regression: Salary vs. Years of Experience')
plt.show()
                `}
          </code>
        </pre>

        <p>
          <span className="font-bold">Logistic Regression:</span> Suppose you
          have a dataset of email messages and whether they are spam or not. You
          can use logistic regression to model the relationship between the
          content of the email messages and whether they are spam or not, and
          predict whether a new email message is spam or not.
        </p>
        <code>
          The logistic function (sigmoid function) maps any real-valued number
          into the range [0, 1].
        </code>

        <h2 className="text-2xl font-bold">Example</h2>
        <p>
          Let's consider a dataset where we want to predict whether a student
          will pass (1) or fail (0) an exam based on their study hours.
        </p>

        <pre>
          <code>
            {`
            # Import necessary libraries
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
import matplotlib.pyplot as plt

# Create a sample dataset
data = {
    'StudyHours': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'Pass': [0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
}
df = pd.DataFrame(data)

# Define the feature and target variable
X = df[['StudyHours']]
y = df['Pass']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train the model
model = LogisticRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred)
recall = recall_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

print(f"Accuracy: {accuracy}")
print(f"Precision: {precision}")
print(f"Recall: {recall}")
print(f"F1 Score: {f1}")

# Plot the results
plt.scatter(X, y, color='blue')
plt.plot(X, model.predict_proba(X)[:, 1], color='red')
plt.xlabel('Study Hours')
plt.ylabel('Probability of Passing')
plt.title('Logistic Regression: Probability of Passing vs. Study Hours')
plt.show()
                `}
          </code>
        </pre>

        <h2 className="text-2xl font-bold">Summary</h2>
        <p>
          <span className="text-black font-bold">Linear Regression:</span> Used
          for predicting a continuous target variable. The relationship between
          the target and the feature(s) is modeled as a straight line. Evaluated
          using metrics like Mean Squared Error (MSE) and R² score.
          <br />
          <span className="text-black font-bold">
            {" "}
            Logistic Regression:
          </span>{" "}
          Used for binary classification problems. The relationship between the
          target and the feature(s) is modeled using the logistic function,
          which outputs probabilities. Evaluated using metrics like accuracy,
          precision, recall, and F1 score.
          <br className="my-4" />
          These examples provide a comprehensive introduction to implementing
          and evaluating linear and logistic regression models using
          Scikit-Learn. You can further enhance these models by performing
          feature engineering, hyperparameter tuning, and using more advanced
          evaluation metrics.
        </p>

        <h2 className="text-2xl font-bold">Applications</h2>
        <p>
          Linear regression and logistic regression are widely used in a variety
          of applications, including:
        </p>
        <ul className="list-disc list-inside">
          <li>Forecasting sales</li>
          <li>Modeling customer behavior</li>
          <li>Predicting the outcome of sports events</li>
          <li>Identifying fraudulent transactions</li>
          <li>Diagnosing diseases</li>
        </ul>

        <h2 className="text-2xl font-bold">Challenges</h2>
        <p>
          Linear regression and logistic regression have some limitations that
          can make them unsuitable for certain types of data. For example,
          linear regression assumes that the relationship between the dependent
          variable and the independent variables is linear, which may not always
          be the case. Logistic regression assumes that the independent
          variables are linearly related to the log odds of the dependent
          variable, which may not always be true. In addition, both algorithms
          are sensitive to outliers and multicollinearity, which can affect the
          accuracy of the model.
        </p>

        <h2 className="text-2xl font-bold">Future Directions</h2>
        <p>
          Despite their limitations, linear regression and logistic regression
          remain popular algorithms in machine learning due to their simplicity
          and interpretability. Researchers are exploring ways to improve the
          performance of these algorithms by incorporating more complex models
          and regularization techniques. In addition, new algorithms such as
          neural networks and support vector machines are being developed to
          address the limitations of linear regression and logistic regression
          and to handle more complex data.
        </p>

        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p>
          Linear regression and logistic regression are two fundamental
          algorithms in machine learning. They are used to model the
          relationship between a dependent variable and one or more independent
          variables. In this series, we explored the concepts and mathematical
          foundations of linear and logistic regression, and discussed how they
          are used in practice.
        </p>

        <div>
          <h2></h2>
          <p>
            Explore in detail the concepts with examples on:
            <Link
              className="ml-4 font-bold italic"
              href="https://github.com/Lupleg/30DaysOfDeepLearning/blob/main/05/introduction.md"
            >
              Lupleg Community
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
