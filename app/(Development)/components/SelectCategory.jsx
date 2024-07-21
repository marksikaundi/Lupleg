import { Card, CardHeader } from "@/components/ui/card";
const { Globe, ChefHat, PartyPopper } = require("lucide-react");

const categoryItems = [
  { id: 0, name: "templates", title: "Templates", image: <Globe /> },
  {
    id: 1,
    name: "uikit",
    title: "UI Kit",
    image: <ChefHat />,
  },
  {
    id: 2,

    name: "Icon",
    title: "Icon",
    image: <PartyPopper />,
  },
];

export function SelectCategory() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {categoryItems.map((item) => (
        <Card>
          <CardHeader>
            {item.image}
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
