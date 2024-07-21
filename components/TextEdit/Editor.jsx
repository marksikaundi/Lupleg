'use client'

import StarterKit  from "@tiptap/starter-kit";
import { useEditor, EditorContent } from '@tiptap/react'
import React from "react";
import { Button } from "@/components/ui/button";



export const MenuBar = ({editor}) => {
  if(!editor) return null;

  return (
    <div className="flex flex-wrap gap-5">
      <Button onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
      variant={
        editor.isActive('heading', {level: 1}) ? 'primary' : 'secondary'}
      type="button">H1</Button>

    </div>
  )

}


export function TipTapEditor() {
  const editor = useEditor({
    extensions: [StarterKit]
  });
  return (
    <div>
      <MenuBar editor={editor} />
    </div>
  )
} 
