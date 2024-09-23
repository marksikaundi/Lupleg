"use client"
import { Lock, FileText, ChevronDown } from "lucide-react";
import React, { useState } from "react";

const challenges = [
  { id: 440, status: "completed", title: "K-th Smallest in Lexicographical Order", solutionType: "file", acceptance: 34.9, difficulty: "Hard", frequency: 30 },
  { id: 1, status: "available", title: "Two Sum", solutionType: "code", acceptance: 53.8, difficulty: "Easy", frequency: 80 },
  { id: 2, status: "available", title: "Add Two Numbers", solutionType: "code", acceptance: 44.1, difficulty: "Medium", frequency: 60 },
  { id: 3, status: "available", title: "Longest Substring Without Repeating Characters", solutionType: "code", acceptance: 35.5, difficulty: "Medium", frequency: 70 },
  { id: 4, status: "available", title: "Median of Two Sorted Arrays", solutionType: "code", acceptance: 41.5, difficulty: "Hard", frequency: 40 },
  { id: 5, status: "available", title: "Longest Palindromic Substring", solutionType: "code", acceptance: 34.5, difficulty: "Medium", frequency: 50 },
  { id: 6, status: "available", title: "Zigzag Conversion", solutionType: "code", acceptance: 49.3, difficulty: "Medium", frequency: 30 },
  { id: 7, status: "available", title: "Reverse Integer", solutionType: "code", acceptance: 29.2, difficulty: "Medium", frequency: 40 },
  { id: 8, status: "locked", title: "String to Integer (atoi)", solutionType: "file", acceptance: 17.9, difficulty: "Medium", frequency: 20 },
  { id: 9, status: "available", title: "Palindrome Number", solutionType: "code", acceptance: 57.5, difficulty: "Easy", frequency: 60 },
  { id: 10, status: "locked", title: "Regular Expression Matching", solutionType: "file", acceptance: 28.4, difficulty: "Hard", frequency: 10 },
  { id: 11, status: "available", title: "Container With Most Water", solutionType: "code", acceptance: 56.2, difficulty: "Medium", frequency: 50 },
  { id: 12, status: "available", title: "Integer to Roman", solutionType: "code", acceptance: 66.3, difficulty: "Medium", frequency: 40 },
  { id: 13, status: "available", title: "Roman to Integer", solutionType: "code", acceptance: 62.7, difficulty: "Easy", frequency: 70 },
  { id: 14, status: "available", title: "Longest Common Prefix", solutionType: "code", acceptance: 43.8, difficulty: "Easy", frequency: 60 },
  { id: 15, status: "available", title: "3Sum", solutionType: "code", acceptance: 35.4, difficulty: "Medium", frequency: 50 },
  { id: 16, status: "available", title: "3Sum Closest", solutionType: "code", acceptance: 46.1, difficulty: "Medium", frequency: 40 },
];

function getDifficultyColor(difficulty) {
  switch (difficulty) {
    case "Easy":
      return "text-emerald-400";
    case "Medium":
      return "text-yellow-400";
    case "Hard":
      return "text-red-400";
    default:
      return "text-gray-400";
  }
}

function getStatusIcon(status) {
  switch (status) {
    case "completed":
      return <div className="w-5 h-5 bg-emerald-400 rounded-sm" />;
    case "locked":
      return <Lock className="w-5 h-5 text-gray-500" />;
    default:
      return null;
  }
}

export default function PMQcard() {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="sr-only sm:not-sr-only">
              <tr className="text-left border-b border-gray-700">
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Title</th>
                <th className="py-2 px-4">Solution</th>
                <th className="py-2 px-4">Acceptance</th>
                <th className="py-2 px-4">Difficulty</th>
                <th className="py-2 px-4">Frequency</th>
              </tr>
            </thead>
            <tbody>
              {challenges.map((challenge) => (
                <React.Fragment key={challenge.id}>
                  <tr
                    className="border-b border-gray-800 hover:bg-gray-800 cursor-pointer"
                    onClick={() => toggleRow(challenge.id)}
                  >
                    <td className="py-2 px-4 flex items-center">
                      {getStatusIcon(challenge.status)}
                      <span className="ml-2 sm:hidden">{challenge.title}</span>
                    </td>
                    <td className="py-2 px-4 hidden sm:table-cell">{challenge.title}</td>
                    <td className="py-2 px-4 hidden sm:table-cell">
                      {challenge.solutionType === "file" ? (
                        <FileText className="w-5 h-5 text-blue-400" />
                      ) : (
                        <FileText className="w-5 h-5 text-purple-400" />
                      )}
                    </td>
                    <td className="py-2 px-4 hidden sm:table-cell">{challenge.acceptance.toFixed(1)}%</td>
                    <td className={`py-2 px-4 hidden sm:table-cell ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </td>
                    <td className="py-2 px-4 hidden sm:table-cell">
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-400 h-2 rounded-full"
                          style={{ width: `${challenge.frequency}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="py-2 px-4 sm:hidden">
                      <ChevronDown className={`w-5 h-5 transition-transform ${expandedRow === challenge.id ? 'rotate-180' : ''}`} />
                    </td>
                  </tr>
                  {expandedRow === challenge.id && (
                    <tr className="sm:hidden bg-gray-800">
                      <td colSpan={2} className="py-2 px-4">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <p className="text-sm text-gray-400">Solution</p>
                            {challenge.solutionType === "file" ? (
                              <FileText className="w-5 h-5 text-blue-400" />
                            ) : (
                              <FileText className="w-5 h-5 text-purple-400" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Acceptance</p>
                            <p>{challenge.acceptance.toFixed(1)}%</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Difficulty</p>
                            <p className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Frequency</p>
                            <div className="w-24 bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-blue-400 h-2 rounded-full"
                                style={{ width: `${challenge.frequency}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
