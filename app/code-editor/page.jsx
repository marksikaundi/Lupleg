"use client";

import React, { useState, useEffect } from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { Code, FileCode, FileJson, Menu } from "lucide-react";
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function CodeEditor() {
  const [htmlCode, setHtmlCode] = useState(`
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-purple-100 flex justify-center items-center min-h-screen">
    <div class="bg-white text-[#181028] p-8 space-y-6 shadow-lg rounded-xl max-w-md md:max-w-lg">
      <img class="w-44" src="https://www.lupleg.org/lupleg.svg" alt="Lupleg logo" />
      <p class="text-lg">Welcome to the <strong>FREE</strong> editor!</p>
      <p class="flex gap-2 font-medium text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 12l5 5l10 -10"></path>
        </svg>
        Use your creativity to bring projects to life! 😎
      </p>
      <p class="text-sm border-t pt-6">This example uses TailwindCSS by adding the CDN in the head tag.</p>
    </div>
  </body>
</html>
  `);
  const [cssCode, setCssCode] = useState(`
/* Add your CSS here */
body {
  font-family: 'Inter', sans-serif;
  color: #181028;
  padding: 0;
  margin: 0;
}
  `);
  const [jsCode, setJsCode] = useState(`
// Add your JavaScript here
console.log('Hello from Lupleg!');
  `);
  const [output, setOutput] = useState("");
  const [layout, setLayout] = useState('triple');
  const [activeEditor, setActiveEditor] = useState('html');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const combinedCode = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;
    setOutput(combinedCode);
  }, [htmlCode, cssCode, jsCode]);

  const renderEditors = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      // Mobile view
      return (
        <ResizablePanel>
          {activeEditor === 'html' && (
            <MonacoEditor
              height="100%"
              defaultLanguage="html"
              theme="vs-dark"
              value={htmlCode}
              onChange={(value) => setHtmlCode(value || '')}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
              }}
            />
          )}
          {activeEditor === 'css' && (
            <MonacoEditor
              height="100%"
              defaultLanguage="css"
              theme="vs-dark"
              value={cssCode}
              onChange={(value) => setCssCode(value || '')}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
              }}
            />
          )}
          {activeEditor === 'js' && (
            <MonacoEditor
              height="100%"
              defaultLanguage="javascript"
              theme="vs-dark"
              value={jsCode}
              onChange={(value) => setJsCode(value || '')}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
              }}
            />
          )}
        </ResizablePanel>
      );
    }

    // Desktop view
    switch (layout) {
      case 'full':
        return (
          <ResizablePanel>
            <MonacoEditor
              height="100%"
              defaultLanguage="html"
              theme="vs-dark"
              value={htmlCode}
              onChange={(value) => setHtmlCode(value || '')}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
              }}
            />
          </ResizablePanel>
        );
      case 'split':
        return (
          <>
            <ResizablePanel defaultSize={50}>
              <MonacoEditor
                height="100%"
                defaultLanguage="html"
                theme="vs-dark"
                value={htmlCode}
                onChange={(value) => setHtmlCode(value || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <MonacoEditor
                height="100%"
                defaultLanguage="css"
                theme="vs-dark"
                value={cssCode}
                onChange={(value) => setCssCode(value || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </ResizablePanel>
          </>
        );
      case 'triple':
        return (
          <>
            <ResizablePanel defaultSize={33}>
              <MonacoEditor
                height="100%"
                defaultLanguage="html"
                theme="vs-dark"
                value={htmlCode}
                onChange={(value) => setHtmlCode(value || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={33}>
              <MonacoEditor
                height="100%"
                defaultLanguage="css"
                theme="vs-dark"
                value={cssCode}
                onChange={(value) => setCssCode(value || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={33}>
              <MonacoEditor
                height="100%"
                defaultLanguage="javascript"
                theme="vs-dark"
                value={jsCode}
                onChange={(value) => setJsCode(value || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </ResizablePanel>
          </>
        );
      case 'quad':
        return (
          <>
            <ResizablePanel defaultSize={50}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={50}>
                  <MonacoEditor
                    height="100%"
                    defaultLanguage="html"
                    theme="vs-dark"
                    value={htmlCode}
                    onChange={(value) => setHtmlCode(value || '')}
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14,
                    }}
                  />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <MonacoEditor
                    height="100%"
                    defaultLanguage="css"
                    theme="vs-dark"
                    value={cssCode}
                    onChange={(value) => setCssCode(value || '')}
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14,
                    }}
                  />
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={50}>
                  <MonacoEditor
                    height="100%"
                    defaultLanguage="javascript"
                    theme="vs-dark"
                    value={jsCode}
                    onChange={(value) => setJsCode(value || '')}
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14,
                    }}
                  />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <iframe
                    title="Output"
                    className="w-full h-full border-none bg-white"
                    srcDoc={output}
                  />
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </>
        );
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e] text-white">
      <header className="flex items-center justify-between p-4 bg-[#2d2d2d]">
        {/* <div className="flex items-center space-x-4">
          <img src="https://www.lupleg.org/lupleg.svg alt="Lupleg logo" className="h-8" />
          <h1 className="text-xl font-bold">Lupleg Editor</h1>
        </div> */}
        {/* <div className="hidden md:flex space-x-2">
          <Button variant="ghost" size="sm" className="text-white">
            HTML
          </Button>
          <Button variant="ghost" size="sm" className="text-white">
            CSS
          </Button>
          <Button variant="ghost" size="sm" className="text-white">
            JS
          </Button>
        </div> */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </header>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#252526] p-2">
          <Button variant="ghost" size="sm" className="text-white w-full justify-start" onClick={() => { setActiveEditor('html'); setIsMobileMenuOpen(false); }}>
            <Code className="w-4 h-4 mr-2" />
            HTML
          </Button>
          <Button variant="ghost" size="sm" className="text-white w-full justify-start" onClick={() => { setActiveEditor('css'); setIsMobileMenuOpen(false); }}>
            <FileCode className="w-4 h-4 mr-2" />
            CSS
          </Button>
          <Button variant="ghost" size="sm" className="text-white w-full justify-start" onClick={() => { setActiveEditor('js'); setIsMobileMenuOpen(false); }}>
            <FileJson className="w-4 h-4 mr-2" />
            JS
          </Button>
        </div>
      )}
      <ResizablePanelGroup direction={layout === 'quad' ? 'horizontal' : 'vertical'} className="flex-grow">
        <ResizablePanel defaultSize={70}>
          <div className="h-full flex flex-col">
            <div className="hidden md:flex items-center justify-between p-2 bg-[#252526]">
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="text-white">
                  <Code className="w-4 h-4 mr-2" />
                  HTML
                </Button>
                <Button variant="ghost" size="sm" className="text-white">
                  <FileCode className="w-4 h-4 mr-2" />
                  CSS
                </Button>
                <Button variant="ghost" size="sm" className="text-white">
                  <FileJson className="w-4 h-4 mr-2" />
                  JS
                </Button>
              </div>
            </div>
            <ResizablePanelGroup direction="horizontal" className="flex-grow">
              {renderEditors()}
            </ResizablePanelGroup>
          </div>
        </ResizablePanel>
        {layout !== 'quad' && (
          <>
            <ResizableHandle />
            <ResizablePanel defaultSize={30}>
              <iframe
                title="Output"
                className="w-full h-full border-none bg-white"
                srcDoc={output}
              />
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
      <footer className="flex justify-end p-2 bg-[#2d2d2d]">
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className={`w-8 h-8 ${layout === 'full' ? 'bg-purple-600' : ''}`}
            onClick={() => setLayout('full')}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`w-8 h-8 ${layout === 'split' ? 'bg-purple-600' : ''}`}
            onClick={() => setLayout('split')}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <rect x="3" y="3" width="8" height="18" rx="2" />
              <rect x="13" y="3" width="8" height="18" rx="2" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`w-8 h-8 ${layout === 'triple' ? 'bg-purple-600' : ''}`}
            onClick={() => setLayout('triple')}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <rect x="3" y="3" width="5" height="18" rx="2" />
              <rect x="10" y="3" width="5" height="18" rx="2" />
              <rect x="17" y="3" width="5" height="18" rx="2" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`w-8 h-8 ${layout === 'quad' ? 'bg-purple-600' : ''}`}
            onClick={() => setLayout('quad')}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <rect x="3" y="3" width="8" height="8" rx="2" />
              <rect x="13" y="3" width="8" height="8" rx="2" />
              <rect x="3" y="13" width="8" height="8" rx="2" />
              <rect x="13" y="13" width="8" height="8" rx="2" />
            </svg>
          </Button>
        </div>
      </footer>
    </div>
  );
}
