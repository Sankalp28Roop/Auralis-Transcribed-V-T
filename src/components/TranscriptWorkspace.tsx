"use client";

import { useState } from "react";
import { Copy, Download, Share2, MoreVertical } from "lucide-react";
import { AudioSynthesis } from "@/components/AudioSynthesis";
import YouTube from "react-youtube";
import { toast } from "sonner";

interface TranscriptBlock {
  start: number;
  end: number;
  text: string;
}

interface TranscriptWorkspaceProps {
  url: string;
  transcript: TranscriptBlock[];
  jobId: string;
  job: any; // Assuming we pass the raw job object for metrics
}

export function TranscriptWorkspace({ url, transcript, jobId, job }: TranscriptWorkspaceProps) {
  const [player, setPlayer] = useState<any>(null);
  const [format, setFormat] = useState<"paragraph" | "timestamp">("timestamp");
  const [activeSegment, setActiveSegment] = useState<number>(1);
  
  const extractVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = extractVideoId(url) || "dQw4w9WgXcQ"; // Fallback for UI design if no URL

  const handleSeek = (time: number, index: number) => {
    setActiveSegment(index);
    if (player) {
      player.seekTo(time);
      player.playVideo();
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `[00:${m}:${s}]`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 h-full lg:h-[calc(100vh-4rem)] w-full gap-4 md:gap-8 bg-black min-h-0 overflow-y-auto lg:overflow-hidden">
      
      {/* Left Panel: Media & Synthesis */}
      <div className="lg:col-span-3 flex flex-col gap-4 h-full min-h-0">
        
        {/* Video Player */}
        <div className="flex-none overflow-hidden bg-[#0d0d0d] border border-white/5 aspect-video rounded-xl relative group">
          <YouTube
            videoId={videoId}
            opts={{
              width: '100%',
              height: '100%',
              playerVars: { autoplay: 0, modestbranding: 1 }
            }}
            onReady={(e) => setPlayer(e.target)}
            className="absolute inset-0 w-full h-full [&>iframe]:w-full [&>iframe]:h-full"
          />
        </div>

        {/* Neural Audio Analysis Header */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white tracking-tight">Neural Audio Analysis</h2>
            <div className="flex items-center gap-3 text-zinc-400">
              <button className="hover:text-white transition-colors"><Share2 className="h-5 w-5" /></button>
              <button className="hover:text-white transition-colors"><MoreVertical className="h-5 w-5" /></button>
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-1 text-[10px] font-mono uppercase text-[#00e5ff] tracking-wider">
            <span className="h-1.5 w-1.5 bg-[#00e5ff] rounded-full animate-pulse"></span>
            Live Processing • 48kHz Stereo
          </div>
        </div>

        {/* Audio Synthesis Real Component */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
          <AudioSynthesis jobId={jobId} />
        </div>

        {/* Session Data */}
        <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-5">
          <h3 className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider mb-4">Session Data</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
              <span className="text-zinc-400">Total Words</span>
              <span className="text-[#00e5ff] font-mono font-bold text-lg">
                {transcript.reduce((acc, block) => acc + block.text.split(" ").length, 0)}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
              <span className="text-zinc-400">Total Characters</span>
              <span className="text-white font-mono">{job.characterCount}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-400">Processing Time</span>
              <span className="text-white font-mono">{job.processingTime.toFixed(2)}s</span>
            </div>
          </div>
        </div>

      </div>


      {/* Right Panel: Transcript Window */}
      <div className="lg:col-span-2 bg-white/5 dark:bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col h-[600px] lg:h-full min-h-0 relative">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
          <div className="flex items-center bg-white/[0.03] border border-white/5 p-1 rounded-lg">
            <button
              onClick={() => setFormat("paragraph")}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${format === "paragraph" ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              Prose
            </button>
            <button
              onClick={() => setFormat("timestamp")}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${format === "timestamp" ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              Timestamps
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(transcript.map(t => t.text).join(' '));
                toast.success("Transcript copied to clipboard!");
              }}
              className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <Copy className="h-4 w-4" /> Copy
            </button>
            <button 
              onClick={() => {
                const text = transcript.map(t => `[${formatTime(t.start)}] ${t.text}`).join('\n');
                const blob = new Blob([text], { type: 'text/plain' });
                const objUrl = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = objUrl;
                a.download = `transcript-${jobId}.txt`;
                a.click();
                URL.revokeObjectURL(objUrl);
                toast.success("Transcript exported successfully!");
              }}
              className="flex items-center gap-2 bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(0,229,255,0.2)]"
            >
              <Download className="h-3.5 w-3.5" /> Export 
            </button>
          </div>
        </div>

        {/* Transcript Content */}
        <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 space-y-6 pb-16">
          {transcript.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
              <span className="text-red-400 font-bold mb-2">⚠ Data Integrity Error</span>
              <p className="text-red-300/80 text-sm">The SQLite database returned zero transcript segments for this job payload. Please re-process the URL.</p>
            </div>
          ) : format === "timestamp" ? (
            transcript.map((block, i) => {
              const isActive = activeSegment === i;
              return (
                <div 
                  key={i} 
                  className={`flex gap-4 cursor-pointer group transition-all duration-300 ${isActive ? 'bg-white/[0.02] p-4 -mx-4 rounded-xl border-l-2 border-[#00e5ff]' : 'p-4 -mx-4 border-l-2 border-transparent hover:border-white/10'}`}
                  onClick={() => handleSeek(block.start, i)}
                >
                  <span className={`font-mono text-xs text-cyan-400 mr-2 select-none mt-1 shrink-0 transition-colors ${isActive ? 'brightness-110' : 'opacity-80 group-hover:opacity-100'}`}>
                    {formatTime(block.start)}
                  </span>
                  <p className={`leading-relaxed text-sm transition-colors ${isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-300'}`}>
                    {block.text}
                  </p>
                </div>
              )
            })
          ) : (
            <div className="prose prose-invert max-w-none">
              <p className="text-zinc-400 leading-loose text-base">
                {transcript.map((block, i) => (
                  <span 
                    key={i} 
                    className={`cursor-pointer rounded px-1 -mx-1 transition-colors ${activeSegment === i ? 'bg-[#00e5ff]/20 text-white' : 'hover:bg-white/10 hover:text-zinc-300'}`}
                    onClick={() => handleSeek(block.start, i)}
                  >
                    {block.text}{" "}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>

        {/* Footer Metrics */}
        <div className="absolute bottom-0 left-2 right-0 bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 py-3 px-4 flex items-center justify-between text-[9px] font-mono uppercase text-zinc-500 tracking-widest">
          <div className="flex items-center gap-8">
            <div>Processing Engine: <span className="text-zinc-300">Whisper</span></div>
            <div>Segments: <span className="text-zinc-300">{transcript.length}</span></div>
          </div>
          <div className="flex items-center gap-2 text-emerald-500 font-medium">
            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            Operational
          </div>
        </div>

      </div>

    </div>
  );
}
