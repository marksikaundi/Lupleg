"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Link } from "lucide-react";
import { FaFacebook } from "react-icons/fa6";
import { IoReturnUpBack } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

export default function SharePost({
  title = "Check out this post!",
  url = "https://lupleg.org//30dayschallenge/deep-learning",
}) {
  const [isCopied, setIsCopied] = useState(false);

  const shareOnX = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`,
      "_blank"
    );
  };

  const router = useRouter();

  const handleBack = () => {
    router.push("/30dayschallenge/deep-learning");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setIsCopied(true);
      toast({
        title: "Link copied!",
        description: "The post URL has been copied to your clipboard.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-background rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2 text-[#2D1537]">
        Share this post
      </h2>
      <div className="flex space-x-2">
        <Button onClick={handleBack} size="icon" variant="outline">
          <IoReturnUpBack className="h-4 w-4" />
          <span className="sr-only">Return</span>
        </Button>
        <Button onClick={shareOnX} size="icon" variant="outline">
          <FaXTwitter className="h-4 w-4 " />
          <span className="sr-only">Share on X</span>
        </Button>
        <Button onClick={shareOnFacebook} size="icon" variant="outline">
          <FaFacebook className="h-4 w-4 " />
          <span className="sr-only">Share on Facebook</span>
        </Button>
        <Button onClick={shareOnLinkedIn} size="icon" variant="outline">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">Share on LinkedIn</span>
        </Button>
        <Button onClick={copyToClipboard} size="icon" variant="outline">
          <Link className="h-4 w-4" />
          <span className="sr-only">Copy link</span>
        </Button>
      </div>
      {isCopied && (
        <p className="text-sm text-muted-foreground">
          Link copied to clipboard!
        </p>
      )}
    </div>
  );
}
