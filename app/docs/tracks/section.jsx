import { Card } from "@/components/ui/card";

const tracks = [
  { name: "8th", icon: "8", color: "#84cc16", docCount: 4 },
  { name: "ABAP", icon: "ABAP", color: "#2563eb", docCount: 5 },
  { name: "Arturo", icon: "🦂", color: "#86198f", docCount: 4 },
  { name: "AWK", icon: "🐦", color: "#dc2626", docCount: 4 },
  { name: "Ballerina", icon: "⚡", color: "#06b6d4", docCount: 4 },
  { name: "Bash", icon: "⌨️", color: "#1f2937", docCount: 4 },
  { name: "Batch Script", icon: "⚙️", color: "#15803d", docCount: 4 },
  { name: "C", icon: "C", color: "#0891b2", docCount: 4 },
  { name: "C#", icon: "C#", color: "#6d28d9", docCount: 4 },
  { name: "C++", icon: "C++", color: "#a21caf", docCount: 4 },
  { name: "Cairo", icon: "🔷", color: "#ef4444", docCount: 4 },
  { name: "CFML", icon: "CF", color: "#7c3aed", docCount: 4 },
  { name: "Clojure", icon: "λ", color: "#3b82f6", docCount: 4 },
  { name: "COBOL", icon: "COB", color: "#2563eb", docCount: 4 },
  { name: "CoffeeScript", icon: "☕", color: "#ea580c", docCount: 4 },
  { name: "Red", icon: "🔺", color: "#dc2626", docCount: 4 },
  { name: "Roc", icon: "🦅", color: "#9333ea", docCount: 4 },
  { name: "Ruby", icon: "💎", color: "#ef4444", docCount: 4 },
  { name: "Rust", icon: "⚙️", color: "#27272a", docCount: 4 },
  { name: "Scala", icon: "📊", color: "#dc2626", docCount: 4 },
  { name: "Scheme", icon: "λ", color: "#1f2937", docCount: 4 },
  { name: "SQLite", icon: "📝", color: "#2563eb", docCount: 4 },
  { name: "Standard ML", icon: "SML", color: "#a21caf", docCount: 4 },
  { name: "Swift", icon: "🕊️", color: "#ef4444", docCount: 4 },
  { name: "Tcl", icon: "📜", color: "#2563eb", docCount: 4 },
  { name: "TypeScript", icon: "TS", color: "#2563eb", docCount: 4 },
  { name: "Uiua", icon: "⚡", color: "#9333ea", docCount: 4 },
  { name: "Unison", icon: "⚛️", color: "#27272a", docCount: 5 },
  { name: "V", icon: "V", color: "#4b5563", docCount: 4 },
  { name: "Vim script", icon: "📝", color: "#15803d", docCount: 4 },
];

export default function Section() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-[#2D1537] mb-4">
          Track Specific Docs
        </h1>
        <p className="text-xl text-[#2D1537]">
          Explore the docs of tracks you're learning, mentoring or helping to
          build.
        </p>
      </div>

      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-6">
        {tracks.map((track) => (
          <Card
            key={track.name}
            className="flex flex-col items-center p-6 hover:shadow-lg transition-shadow"
          >
            <div
              className="w-16 h-16 flex items-center justify-center rounded-xl mb-4"
              style={{
                backgroundColor: `${track.color}10`,
                color: track.color,
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            >
              <span className="text-2xl">{track.icon}</span>
            </div>
            <h3 className="font-semibold text-[#1a1523] mb-1">{track.name}</h3>
            <p className="text-sm text-[#1a1523]/60">{track.docCount} docs</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
