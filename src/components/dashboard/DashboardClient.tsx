"use client";

import { useState } from "react";
import { Link2, Sparkles, Settings2, Zap } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function DashboardClient() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleTranscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const rawUrl = url.trim();
    if (!rawUrl) {
      toast.error("Please enter a valid video URL.");
      return;
    }
    
    setIsLoading(true);
    try {
      const res = await fetch("/api/transcribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: rawUrl }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Transcription failed");
      }

      toast.success("Transcription complete!");
      router.push(`/workspace/${data.jobId}`);
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Failed to transcribe the video.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center space-y-6 pt-10 pb-4">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
        Automated Transcription & Synthesis<br/>Workspace
      </h1>
      <p className="text-zinc-400 text-sm max-w-lg mx-auto">
        Paste a YouTube URL or direct video link to begin generating studio-grade transcripts and AI-powered audio clones.
      </p>

      {/* URL Input Box */}
      <form onSubmit={handleTranscribe} className="max-w-3xl mx-auto relative mt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00e5ff]/20 to-[#6d28d9]/20 blur-xl opacity-50 rounded-xl" />
        <div className="relative bg-[#0d0d0d] border border-white/10 rounded-xl p-2 flex items-center shadow-2xl">
          <div className="pl-4 pr-3 text-zinc-500">
            <Link2 className="h-5 w-5" />
          </div>
          <input 
            type="url" 
            placeholder="https://youtube.com/watch?v=..." 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isLoading}
            className="flex-1 bg-transparent border-none outline-none text-white text-sm font-mono placeholder:text-zinc-600 disabled:opacity-50"
          />
          <button 
            type="submit"
            disabled={isLoading || !url.trim()}
            className="bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black px-8 py-3 rounded-lg font-semibold text-sm transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)] disabled:opacity-50"
          >
            {isLoading ? "Processing..." : "Process"}
          </button>
        </div>
      </form>

      {/* Badges */}
      <div className="flex justify-center gap-8 text-[11px] text-zinc-500 font-mono tracking-widest uppercase mt-6">
        <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-zinc-400" /> Real-time Analysis</span>
        <span className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-zinc-400" /> Encrypted Streams</span>
        <span className="flex items-center gap-1.5"><Settings2 className="h-3.5 w-3.5 text-zinc-400" /> 24h Project Retention</span>
      </div>
    </div>
  );
}
