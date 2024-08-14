import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 text-primary-foreground">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unlock Your Potential with Mentorship
                </h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Connect with experienced professionals and accelerate your
                  growth. Our mentorship program pairs you with the right mentor
                  to help you achieve your goals.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button variant="secondary" className="w-full">
                  Apply Now
                </Button>
                <p className="text-xs text-primary-foreground/80">
                  Join our community of mentors and mentees.
                </p>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Mentorship"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet Our Mentors
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mentors are experienced professionals who are passionate
                about helping others grow. Browse their profiles and find the
                right mentor for you.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <Card className="flex flex-col items-center justify-between gap-4 rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-bold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  John has over 10 years of experience in the software industry.
                  He's passionate about mentoring and helping others grow their
                  careers.
                </p>
                <Button variant="secondary" size="sm">
                  View Profile
                </Button>
              </div>
            </Card>
            <Card className="flex flex-col items-center justify-between gap-4 rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-bold">Sarah Anderson</h3>
                  <p className="text-sm text-muted-foreground">
                    Product Manager
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Sarah has extensive experience in product management and loves
                  to share her knowledge with aspiring product managers.
                </p>
                <Button variant="secondary" size="sm">
                  View Profile
                </Button>
              </div>
            </Card>
            <Card className="flex flex-col items-center justify-between gap-4 rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-bold">Michael Kim</h3>
                  <p className="text-sm text-muted-foreground">
                    Marketing Strategist
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Michael has a proven track record in developing successful
                  marketing strategies. He's excited to share his expertise with
                  aspiring marketers.
                </p>
                <Button variant="secondary" size="sm">
                  View Profile
                </Button>
              </div>
            </Card>
            <Card className="flex flex-col items-center justify-between gap-4 rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>LW</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-bold">Lisa Wang</h3>
                  <p className="text-sm text-muted-foreground">UX Designer</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Lisa has a keen eye for design and a passion for creating
                  user-friendly experiences. She's excited to mentor aspiring
                  designers.
                </p>
                <Button variant="secondary" size="sm">
                  View Profile
                </Button>
              </div>
            </Card>
            <Card className="flex flex-col items-center justify-between gap-4 rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JB</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-bold">James Brown</h3>
                  <p className="text-sm text-muted-foreground">Data Analyst</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  James has extensive experience in data analysis and
                  visualization. He's passionate about helping others develop
                  their data skills.
                </p>
                <Button variant="secondary" size="sm">
                  View Profile
                </Button>
              </div>
            </Card>
            <Card className="flex flex-col items-center justify-between gap-4 rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>EG</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-bold">Emily Garcia</h3>
                  <p className="text-sm text-muted-foreground">
                    Project Manager
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Emily has a wealth of experience in project management and is
                  passionate about helping others develop their leadership
                  skills.
                </p>
                <Button variant="secondary" size="sm">
                  View Profile
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Become a Mentor or Mentee
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Fill out the form below to apply to our mentorship program as a
              mentor or mentee.
            </p>
          </div>
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Mentorship Application</CardTitle>
              <CardDescription>
                Tell us a bit about yourself and your goals.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select id="role">
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mentor">Mentor</SelectItem>
                    <SelectItem value="mentee">Mentee</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your goals and how we can help"
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
