"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Image, Zap, ArrowRight, Bot, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Powered by GPT-4 & AI Image Generation
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              AI is a{" "}
              <span className="gradient-text">
                purpose-built tool
              </span>
              {" "}for modern conversations
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Meet the platform for intelligent AI interactions. 
              Streamline conversations, generate images, and unlock creative possibilities.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="group">
                Start chatting
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" size="lg">
                View features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">
              Made for modern AI interaction
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the next generation of AI-powered tools designed for seamless conversation and creative expression.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Text Chat Feature */}
            <Card className="glass-surface border-border/50 hover:border-border transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Intelligent conversations</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Engage in natural conversations with GPT-4. Stream responses in real-time 
                  for immediate, intelligent interactions that feel human.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Image Generation Feature */}
            <Card className="glass-surface border-border/50 hover:border-border transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Image className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">AI image creation</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Transform your ideas into stunning visuals. Toggle to image mode 
                  and generate high-quality AI images from simple text descriptions.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Performance Feature */}
            <Card className="glass-surface border-border/50 hover:border-border transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                    <Zap className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Lightning fast</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Experience blazing-fast response times with streaming technology. 
                  Start new conversations instantly and keep your creative flow uninterrupted.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="glass-surface border-border/50 text-center">
            <CardContent className="px-8 py-12">
              <Bot className="mx-auto h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                Ready to explore AI possibilities?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of users already experiencing the future of AI interaction. 
                Start chatting, creating, and innovating today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="group">
                  Get started now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="text-sm text-muted-foreground">
                  No account required • Start immediately
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
