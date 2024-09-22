"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define the structure for a quiz question
const quizzes = [
  {
    id: 1,
    title: "Basic Math Quiz",
    description: "Test your basic math skills",
    questions: [
      {
        id: 1,
        text: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1,
      },
      {
        id: 2,
        text: "What is 10 - 7?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: 2,
    title: "General Knowledge Quiz",
    description: "Test your general knowledge",
    questions: [
      {
        id: 1,
        text: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2,
      },
      {
        id: 2,
        text: "Who painted the Mona Lisa?",
        options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
        correctAnswer: 1,
      },
    ],
  },
];

export default function QuizPage() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  const handleAnswerSelect = (answerIndex) => {
    setUserAnswers([...userAnswers, answerIndex]);
    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return score + (answer === selectedQuiz.questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Interactive Quizzes</h1>
      {!selectedQuiz ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{quiz.title}</CardTitle>
                <CardDescription>{quiz.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button onClick={() => handleQuizSelect(quiz)}>Start Quiz</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : showResults ? (
        <Card>
          <CardHeader>
            <CardTitle>Quiz Results</CardTitle>
            <CardDescription>
              You scored {calculateScore()} out of {selectedQuiz.questions.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              {selectedQuiz.questions.map((question, index) => (
                <div key={question.id} className="mb-4">
                  <p className="font-semibold">{question.text}</p>
                  <p className="text-sm">
                    Your answer: {question.options[userAnswers[index]]}
                    {userAnswers[index] === question.correctAnswer ? (
                      <span className="text-green-500 ml-2">Correct</span>
                    ) : (
                      <span className="text-red-500 ml-2">
                        Incorrect (Correct: {question.options[question.correctAnswer]})
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <Button onClick={resetQuiz}>Back to Quizzes</Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>{selectedQuiz.title}</CardTitle>
            <CardDescription>
              Question {currentQuestion + 1} of {selectedQuiz.questions.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-4">{selectedQuiz.questions[currentQuestion].text}</p>
            <RadioGroup onValueChange={(value) => handleAnswerSelect(parseInt(value))}>
              {selectedQuiz.questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
