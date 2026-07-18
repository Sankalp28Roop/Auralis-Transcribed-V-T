"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { AudioLines, Download, PlayCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface AudioSynthesisProps {
  jobId: string;
}

const VOICES = [
  { id: "onyx", name: "Onyx (Male)", type: "male" },
  { id: "echo", name: "Echo (Male)", type: "male" },
  { id: "nova", name: "Nova (Female)", type: "female" },
  { id: "shimmer", name: "Shimmer (Female)", type: "female" },
];

export function AudioSynthesis({ jobId }: AudioSynthesisProps) {
  const [voice, setVoice] = useState(VOICES[0].id);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!jobId) return;
    
    setIsGenerating(true);
    setProgress(0);
    setAudioUrl(null);

    try {
      // Simulate progress for the mock API
      const interval = setInterval(() => {
        setProgress(p => Math.min(p + 10, 90));
      }, 300);

      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoJobId: jobId, voice }),
      });

      clearInterval(interval);

      if (!res.ok) throw new Error("Failed to generate audio");
      
      const data = await res.json();
      
      setProgress(100);
      setAudioUrl(data.audioUrl);
      toast.success("Audio generation complete!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to generate audio. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="bg-black/40 border-white/10 backdrop-blur-md h-full flex flex-col rounded-2xl overflow-hidden">
      <CardHeader className="border-b border-white/10 bg-black/20 pb-4">
        <CardTitle className="text-lg flex items-center gap-2">
          <AudioLines className="h-5 w-5 text-primary" />
          AI Audio Synthesis
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col gap-6 p-6 justify-center">
        {!audioUrl && !isGenerating && (
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Select Voice Profile</label>
              <Select value={voice} onValueChange={(val) => val && setVoice(val)}>
                <SelectTrigger className="w-full h-12 bg-black border-white/10 rounded-xl">
                  <SelectValue placeholder="Select a voice" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-950 border-white/10">
                  {VOICES.map((v) => (
                    <SelectItem key={v.id} value={v.id}>{v.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              onClick={handleGenerate}
              className="w-full h-12 bg-white text-black hover:bg-white/90 rounded-xl mt-2 font-medium"
            >
              <PlayCircle className="h-4 w-4 mr-2" />
              Generate Studio Audio
            </Button>
          </div>
        )}

        {isGenerating && (
          <div className="flex flex-col items-center justify-center py-8 gap-6 h-full">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              <Loader2 className="h-12 w-12 text-primary animate-spin relative z-10" />
            </div>
            <div className="w-full max-w-xs space-y-2 text-center">
              <Progress value={progress} className="h-2 bg-white/10" />
              <p className="text-sm text-muted-foreground animate-pulse">
                Synthesizing neural voice... {progress}%
              </p>
            </div>
          </div>
        )}

        {audioUrl && !isGenerating && (
          <div className="flex flex-col gap-6 h-full justify-center">
            <div className="bg-black/50 p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-zinc-300">Ready to listen</span>
                <span className="text-xs text-muted-foreground bg-white/10 px-2 py-1 rounded-full capitalize">
                  {voice} Voice
                </span>
              </div>
              
              <audio 
                controls 
                className="w-full h-12 outline-none [&::-webkit-media-controls-panel]:bg-zinc-800 [&::-webkit-media-controls-current-time-display]:text-white [&::-webkit-media-controls-time-remaining-display]:text-white"
                src={audioUrl}
              >
                Your browser does not support the audio element.
              </audio>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="h-12 border-white/10 bg-transparent hover:bg-white/5 rounded-xl"
                onClick={() => setAudioUrl(null)}
              >
                Regenerate
              </Button>
              <Button 
                className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl" 
                render={<a href={audioUrl} download="auralis-audio.mp3" />}
              >
                <Download className="h-4 w-4 mr-2" />
                Download MP3
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
