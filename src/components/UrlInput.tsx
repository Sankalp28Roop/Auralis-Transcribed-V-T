"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link2, ArrowRight, Video } from "lucide-react";
import { toast } from "sonner";

interface UrlInputProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

export function UrlInput({ onSubmit, isLoading }: UrlInputProps) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast.error("Please enter a valid URL");
      return;
    }
    
    // Basic validation
    if (!url.includes("youtube.com") && !url.includes("youtu.be") && !url.startsWith("http")) {
      toast.error("Please enter a valid YouTube or video URL");
      return;
    }

    onSubmit(url);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-2 bg-black/40 border-white/10 backdrop-blur-md">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
            <Link2 className="h-5 w-5" />
          </div>
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube or video URL here..."
            className="w-full pl-10 bg-transparent border-none text-lg h-12 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60"
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading || !url.trim()}
          className="h-12 px-6 bg-white text-black hover:bg-white/90 rounded-xl"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
              <span>Processing</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span>Transcribe</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          )}
        </Button>
      </form>
    </Card>
  );
}
