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
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "@/components/TextEdit/Editor";

export default function New() {
  return (
    <section className="max-w-7xl mx-auto  my-20 px-4 md:px-8">
      <Card>
        <form>
          <CardHeader>
            <CardTitle>Sell your products with easy</CardTitle>
            <CardDescription>
              Please describe your product in detail, so that customers can buy
              it easily.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <Label>Name</Label>
              <Input type="text" placeholder="Name what you selling" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Category</Label>
              <SelectCategory />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Price</Label>
              <Input type="number" placeholder="$29" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Short Description</Label>
              <Textarea placeholder="Please describe your product shortly right here....." />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label>Description</Label>
              <TipTapEditor />
            </div>

            {/* <div className="flex flex-col gap-y-2"></div> */}
          </CardContent>
        </form>
      </Card>
    </section>
  );
}
