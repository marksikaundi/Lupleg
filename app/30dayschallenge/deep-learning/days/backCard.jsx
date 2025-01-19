"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackCard() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/research");
  };

  return (
    <Button
      variant="ghost"
      onClick={handleBack}
      className="flex ml-2 items-center space-x-2 text-primary hover:text-primary/80"
    >
      <ArrowLeft className="h-4 w-4 ml-10" />
      <span>Back</span>
    </Button>
  );
}
