import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function BookSession() {
  return (
    <div className="px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-4 md:space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Book a Mentorship Session
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-muted-foreground sm:mt-5">
            Find the perfect time to connect with an experienced mentor and take
            your skills to the next level.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Calendar
              mode="single"
              className="rounded-lg border border-input p-4"
            />
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Schedule a Mentorship</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="details">Details</Label>
                  <Textarea
                    id="details"
                    placeholder="Tell us more about your mentorship needs"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="time-slot">Time Slot</Label>
                  <Select id="time-slot">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9am-10am">
                        9:00 AM - 10:00 AM
                      </SelectItem>
                      <SelectItem value="10am-11am">
                        10:00 AM - 11:00 AM
                      </SelectItem>
                      <SelectItem value="11am-12pm">
                        11:00 AM - 12:00 PM
                      </SelectItem>
                      <SelectItem value="1pm-2pm">1:00 PM - 2:00 PM</SelectItem>
                      <SelectItem value="2pm-3pm">2:00 PM - 3:00 PM</SelectItem>
                      <SelectItem value="3pm-4pm">3:00 PM - 4:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-[#2D1537] hover:bg-[#2D1537]"
                >
                  Book Mentorship
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
