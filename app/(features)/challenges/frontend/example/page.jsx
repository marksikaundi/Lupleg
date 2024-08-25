import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Component() {
  return (
    <div className="container mx-auto px-2 py-4 sm:px-4 sm:py-6 md:py-8">
      <Card className="w-full max-w-[calc(100vw-1rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">
            Coding Challenge: Palindrome Checker
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6">
          <div className="aspect-video relative overflow-hidden rounded-md sm:rounded-lg">
            <Image
              src="https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png"
              alt="Palindrome example"
              layout="fill"
              objectFit="cover"
              className="transition-transform hover:scale-105"
            />
          </div>
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold">
              Instructions:
            </h3>
            <p className="text-sm sm:text-base">
              Create a function that checks whether a given string is a
              palindrome. A palindrome is a word, phrase, number, or other
              sequence of characters that reads the same forward and backward,
              disregarding spaces, punctuation, and capitalization.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
              <li>The function should take a string as input.</li>
              <li>
                It should return true if the input is a palindrome, and false
                otherwise.
              </li>
              <li>
                Ignore spaces, punctuation, and capitalization when checking.
              </li>
              <li>An empty string should be considered a palindrome.</li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mt-2 sm:mt-3">
              Examples:
            </h4>
            <pre className="bg-muted p-2 sm:p-3 rounded-md text-[10px] leading-tight sm:text-xs md:text-sm overflow-x-auto">
              <code>{`isPalindrome("A man a plan a canal Panama") // true
isPalindrome("race a car") // false
isPalindrome("") // true
isPalindrome("Madam, I'm Adam") // true`}</code>
            </pre>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center p-4 sm:p-6">
          <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base">
            View Solutions
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
