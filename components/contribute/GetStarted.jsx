import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const contributionOptions = [
  {
    imageUrl: "/icons/doc.svg",
    title: "Proofread and update",
    level: "Beginner",
    description:
      "Never contributed to an open source project? Give this a go. We'll help you submit your first pull request.",
    issuesCount: 0,
    exploreLink: "Explore 0 issues",
    languages: [],
  },
  {
    imageUrl: "/icons/improve.svg",
    title: "Improve a concept or exercise",
    level: "Intermediary",
    description:
      "Fix bugs and make improvements to concepts and exercise across Lupleg. Help students have a smooth and error-free experience.",
    issuesCount: 0,
    exploreLink: "Explore  issues",
    languages: ["Cairo", "Delphi Pascal", "Bash", "Nim"],
  },
  {
    imageUrl: "/icons/create.svg",
    title: "Create a new exercise or concept",
    level: "Advanced",
    description:
      "Build out a new exercise or concept based on a track's roadmap. Have fun making interactive content that millions of people will use.",
    issuesCount: 0,
    exploreLink: "Explore  issues",
    languages: ["Elixir", "Java", "Julia", "F#"],
  },
  {
    imageUrl: "/icons/dev.svg",
    title: "Develop a test runner",
    level: "Project",
    description:
      "Test runners power our online editor. All tracks have basic test runners, but many need more advanced features and functionality adding.",
    issuesCount: 0,
    exploreLink: "Explore  issues",
    languages: ["Fortran", "Gleam", "Lisp Flavoured Erlang", "D"],
  },
  {
    imageUrl: "/icons/analize.svg",
    title: "Develop an analyzer",
    level: "Project",
    description:
      "Analyzers give automated feedback to students through ASTs analysis. These are complex and deeply interesting pieces of software to develop.",
    issuesCount: 0,
    exploreLink: "Explore  issues",
    languages: ["Ballerina", "Fortran", "Nim", "Clojure"],
  },
  {
    imageUrl: "/icons/represent.svg",
    title: "Develop a representer",
    level: "Project",
    description:
      "Representers help us spot identical solutions so that we can reuse feedback. Simpler than analyzers but fun and interesting to reason about.",
    issuesCount: 0,
    exploreLink: "Explore  issues",
    languages: ["Go", "CFML", "Groovy", "ReasonML"],
  },
];

export default function GetStarted() {
  return (
    <div className="container mx-auto px-4 py-8 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contributionOptions.map((option, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <CardHeader className="pb-0">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Image
                    src={option.imageUrl}
                    alt={`${option.title} icon`}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg font-bold mb-1">
                    {option.title}
                  </CardTitle>
                  <Badge
                    variant={
                      option.level === "Beginner"
                        ? "default"
                        : option.level === "Intermediary"
                        ? "secondary"
                        : option.level === "Advanced"
                        ? "destructive"
                        : "outline"
                    }
                    className="font-normal text-xs"
                  >
                    {option.level}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="py-4">
              <p className="text-sm text-muted-foreground">
                {option.description}
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-sm font-medium">
                  {option.issuesCount} issues need help
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start pt-0">
              <div className="flex flex-wrap gap-2 mb-4">
                {option.languages.slice(0, 3).map((lang, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="rounded-sm text-xs font-normal"
                  >
                    {lang}
                  </Badge>
                ))}
                {option.languages.length > 3 && (
                  <span className="text-xs text-muted-foreground">
                    + {option.languages.length - 3} more need help
                  </span>
                )}
              </div>
              <a
                href="#"
                className="text-sm font-semibold text-primary hover:underline"
              >
                {option.exploreLink} →
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
