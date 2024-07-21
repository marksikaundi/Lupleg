import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { SelectCategory } from "../components/SelectCategory";

export default function New() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <Card>
        <form>
          <CardHeader>
            <CardTitle>View all Our challenges</CardTitle>
            <CardDescription>
              Please describe what you looking for in detailed so that you can
              view
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <Label>Name</Label>
              <Input type="text" placeholder="Name what you looking for" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Category</Label>
              <SelectCategory />
            </div>
          </CardContent>
        </form>
      </Card>
    </section>
  );
}
