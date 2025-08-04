"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Footer } from "@/components/ui/footer";
import {
  MessageCircle,
  Image,
  Zap,
  ArrowRight,
  Bot,
  Sparkles,
  Github,
  Star,
} from "lucide-react";

export default function LandingPage() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Theme Toggle */}
      <header className="fixed top-0 right-0 z-50 p-4">
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            {/* Backing Badges */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png"
                  alt="Y Combinator"
                  className="h-3 w-3"
                />
                Backed by Y Combinator
              </div>
              <div className="flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                <Github className="h-3 w-3" />
                GitHub 0K+
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 via-primary/15 to-accent/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                  Powered by GPT-4 & AI Image Generation
                </span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              AI is a <span className="gradient-text">purpose-built tool</span>{" "}
              for modern conversations
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Meet the platform for intelligent AI interactions. Streamline
              conversations, generate images, and unlock creative possibilities.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10">Start chatting</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToFeatures}
                className="group border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                View features
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="group text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Made for modern AI interaction
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the next generation of AI-powered tools designed for
              seamless conversation and creative expression.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Text Chat Feature */}
            <Card className="glass-surface themed-border feature-card group hover:animate-jiggle">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">
                      Intelligent conversations
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Engage in natural conversations with GPT-4. Stream responses
                  in real-time for immediate, intelligent interactions that feel
                  human.
                </CardDescription>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group w-full justify-between hover:bg-primary/5"
                >
                  Try chat now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Image Generation Feature */}
            <Card className="glass-surface themed-border feature-card group hover:animate-jiggle">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Image className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">
                      AI image creation
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Transform your ideas into stunning visuals. Toggle to image
                  mode and generate high-quality AI images from simple text
                  descriptions.
                </CardDescription>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group w-full justify-between hover:bg-accent/5"
                >
                  Generate image
                  <Image className="h-4 w-4 transition-transform group-hover:scale-110" />
                </Button>
              </CardContent>
            </Card>

            {/* Performance Feature */}
            <Card className="glass-surface themed-border feature-card group hover:animate-jiggle">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                    <Zap className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">
                      Lightning fast
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Experience blazing-fast response times with streaming
                  technology. Start new conversations instantly and keep your
                  creative flow uninterrupted.
                </CardDescription>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group w-full justify-between hover:bg-emerald-500/5"
                >
                  See performance
                  <Zap className="h-4 w-4 transition-transform group-hover:rotate-12" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="glass-surface themed-border text-center">
            <CardContent className="px-8 py-12">
              <Bot className="mx-auto h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to explore AI possibilities?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of users already experiencing the future of AI
                interaction. Start chatting, creating, and innovating today.
              </p>
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/80 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="relative z-10">Get started now</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-2 border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  >
                    <Star className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                    Try demo
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>No account required</span>
                  <span>•</span>
                  <span>Start immediately</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Zap className="h-3 w-3" />
                    Lightning fast
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
