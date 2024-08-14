import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function MarkAuthor() {
  return (
    <Card className="w-full max-w-md p-6 grid gap-6">
      <div className="flex items-start gap-6">
        <Avatar className="w-20 h-20">
          <AvatarImage src="/mark.jpg" alt="Coach Avatar" />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
        <div className="grid gap-2">
          <div>
            <h3 className="text-xl font-semibold">Mark Sikaundi🇿🇲</h3>
            <p className="text-muted-foreground mb-2">Software Engineer</p>
            <hr className="" />
          </div>
          <p className="text-muted-foreground">
            Mark is a software engineer with over 8 years of experience in
            building web applications. He is passionate about helping others
            learn and grow in the tech industry.
          </p>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center gap-2">
          <MailOpenIcon className="w-5 h-5 text-muted-foreground" />
          <p className="text-muted-foreground">mark@lupleg.website</p>
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon className="w-5 h-5 text-muted-foreground" />
          <p className="text-muted-foreground">(260) 776-578-583</p>
        </div>
      </div>
    </Card>
  );
}

function MailOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
