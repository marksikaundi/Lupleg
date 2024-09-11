"use client"

import { useState } from 'react'
import { Share2, Facebook, Twitter, Link } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"



export default function SharePost({ title, text, url }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url })
        toast({
          title: "Shared successfully",
          description: "The post has been shared.",
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      setIsOpen(true)
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    toast({
      title: "Link copied",
      description: "The link has been copied to your clipboard.",
    })
    setIsOpen(false)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" onClick={handleShare}>
          <Share2 className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="grid gap-4">
          <h4 className="font-medium leading-none">Share post</h4>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="w-full" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')}>
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </Button>
            <Button variant="outline" size="sm" className="w-full" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank')}>
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
            <Button variant="outline" size="sm" className="w-full col-span-2" onClick={handleCopyLink}>
              <Link className="mr-2 h-4 w-4" />
              Copy link
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}