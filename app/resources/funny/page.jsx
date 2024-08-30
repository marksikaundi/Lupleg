'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Component() {
  const [image, setImage] = useState(null)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [fontSize, setFontSize] = useState(40)
  const [textColor, setTextColor] = useState('#ffffff')
  const [strokeColor, setStrokeColor] = useState('#000000')
  const [fontFamily, setFontFamily] = useState('Impact')
  const canvasRef = useRef(null)

  const fontOptions = [
    'Impact',
    'Arial',
    'Helvetica',
    'Comic Sans MS',
    'Times New Roman',
    'Courier New',
    'Verdana',
    'Georgia',
    'Palatino',
    'Garamond',
    'Bookman',
    'Trebuchet MS',
    'Arial Black',
  ]

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setImage(e.target?.result)
      reader.readAsDataURL(file)
    }
  }

  const drawMeme = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || !image) return

    const img = new Image()
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)

      ctx.font = `bold ${fontSize}px ${fontFamily}`
      ctx.textAlign = 'center'
      ctx.fillStyle = textColor
      ctx.strokeStyle = strokeColor
      ctx.lineWidth = fontSize / 15

      const drawText = (text, y) => {
        ctx.fillText(text, canvas.width / 2, y)
        ctx.strokeText(text, canvas.width / 2, y)
      }

      drawText(topText.toUpperCase(), fontSize + 10)
      drawText(bottomText.toUpperCase(), canvas.height - 10)
    }
    img.src = image
  }

  useEffect(() => {
    drawMeme()
  }, [image, topText, bottomText, fontSize, textColor, strokeColor, fontFamily])

  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement('a')
    link.download = 'meme.png'
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="image-upload">Upload Image</Label>
        <Input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="top-text">Top Text</Label>
          <Input
            id="top-text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
            placeholder="Enter top text"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bottom-text">Bottom Text</Label>
          <Input
            id="bottom-text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
            placeholder="Enter bottom text"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Font Size: {fontSize}px</Label>
        <Slider
          value={[fontSize]}
          onValueChange={(value) => setFontSize(value[0])}
          min={20}
          max={80}
          step={1}
        />
      </div>

      <div className="space-y-2">
        <Label>Font Family</Label>
        <Select value={fontFamily} onValueChange={setFontFamily}>
          <SelectTrigger>
            <SelectValue placeholder="Select font" />
          </SelectTrigger>
          <SelectContent>
            {fontOptions.map((font) => (
              <SelectItem key={font} value={font}>
                {font}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="text-color">Text Color</Label>
          <Input
            id="text-color"
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="h-10 p-1"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="stroke-color">Stroke Color</Label>
          <Input
            id="stroke-color"
            type="color"
            value={strokeColor}
            onChange={(e) => setStrokeColor(e.target.value)}
            className="h-10 p-1"
          />
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <canvas ref={canvasRef} className="max-w-full h-auto mx-auto" />
      </div>

      <Button onClick={handleDownload} disabled={!image}>
        Download Meme
      </Button>
    </div>
  )
}