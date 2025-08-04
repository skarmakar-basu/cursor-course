import React from "react";
import { Bot, Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t themed-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">
                AI Chat & Image Generator
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Experience the future of AI interaction with our powerful GPT-4
              chatbot and AI image generation platform. Create, converse, and
              innovate.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>GPT-4 Text Chat</li>
              <li>AI Image Generation</li>
              <li>Real-time Streaming</li>
              <li>Chat History</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Examples</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t themed-border flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart className="h-3 w-3 text-red-500" /> using Next.js,
            OpenAI, and Supabase
          </div>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a
              href="https://github.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <span className="text-xs text-muted-foreground">
              © 2025 AI Chat Platform. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
