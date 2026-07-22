"use client";

import React, { useState } from "react";
import { Sparkles, Plus, X, FileText, Lightbulb, HelpCircle, Clock, Send, Database } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export function GlobalSynchroglyphAI() {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [outputStream, setOutputStream] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();
  const isWorkspace = pathname?.includes("/workspace/");

  const handleAIAction = async (actionText: string) => {
    setIsProcessing(true);
    setOutputStream("");
    
    // Dynamic context simulation based on route
    const contextStr = isWorkspace ? "Analyzing active workspace transcript..." : "Querying global knowledge graph...";
    const promptContext = `Processing request: [${actionText}]\n${contextStr}`;
    
    setOutputStream(promptContext);

    // Context-specific response matching
    let intermediateText = "\n\nInitializing temporal analysis matrix...";
    let responseText = "";

    if (actionText.includes("Quick App Overview")) {
      intermediateText = "\n\nCompiling system architecture overview...";
      responseText = "Auralis is a local-first application designed for video analysis and transcript generation. Video data is securely stored in your SQLite database for maximum privacy, while text extraction is processed via automated pipelines and the Gemini SDK.";
    } else if (actionText.includes("How to Paste Links")) {
      intermediateText = "\n\nFetching documentation guidelines...";
      responseText = "To extract a transcript:\n1. Copy a YouTube URL.\n2. Navigate to your Dashboard.\n3. Paste the URL into the main input bar.\n4. Click 'Extract' to initiate the background extraction job.";
    } else if (actionText.includes("Enable Audio Synthesis")) {
      intermediateText = "\n\nQuerying audio sub-system capabilities...";
      responseText = "To generate audio from transcripts:\nOpen an active workspace, navigate to the Audio Synthesis panel on the left, select your preferred AI voice profile, and click 'Generate Audio Stream'.";
    } else if (actionText.includes("Quick Summary of Recent Activity")) {
      intermediateText = "\n\nScanning local SQLite telemetry data...";
      responseText = "Recent System Activity:\n- Successfully parsed 3 new video extractions.\n- 1 Audio Synthesis job completed.\n- Workspace SQLite database size is stable at 4.2MB.";
    } else if (actionText.includes("Summarize in Short")) {
      intermediateText = "\n\nGenerating executive summary payload...";
      responseText = "This video covers the fundamental principles of the subject matter. The primary focus is on streamlined processing, ensuring data clarity while maximizing transcription accuracy. The speaker highlights key technological integrations for contextual analysis.";
    } else if (actionText.includes("Key Highlights")) {
      intermediateText = "\n\nExtracting temporal significance markers...";
      responseText = "- [00:01:23] AI processing pipelines shift to edge computing.\n- [00:04:15] Importance of maintaining temporal synchronization in audio streams.\n- [00:10:05] Security benefits of local SQLite data architectures.";
    } else if (actionText.includes("Convert Transcript to Audio")) {
      intermediateText = "\n\nPreparing payload for synthesis engine...";
      responseText = "Audio Synthesis sequence initiated. Targeting the Neural TTS API with the current transcript payload. Expected generation time is approximately 4.5 seconds. Please navigate to the Audio Synthesis tab to preview the stream.";
    } else if (actionText.includes("Generate Study Quiz")) {
      intermediateText = "\n\nFormulating educational evaluation matrix...";
      responseText = "Study Quiz Generated:\n1. What is the primary benefit of the processing pipelines discussed?\n2. Why is temporal synchronization critical for transcript accuracy?\n3. How does the system ensure user data privacy?\n4. What API handles the final TTS processing?";
    } else {
      responseText = isWorkspace 
        ? "The transcript primarily covers the core concepts extracted from the video processing pipeline. The nodal consistency is stable across all spatial noise patterns."
        : "Global index queried successfully. The requested data parameters align with your current project ecosystem.";
    }

    // Simulated latency for UI effect
    setTimeout(() => {
      setOutputStream(prev => prev + intermediateText);
    }, 600);

    setTimeout(() => {
      setOutputStream(prev => prev + "\n\n" + responseText);
      setIsProcessing(false);
    }, 2000);
  };

  const actionChips = isWorkspace 
    ? [
        { label: "📝 Summarize in Short", icon: FileText },
        { label: "🎯 Key Highlights & Takeaways", icon: Lightbulb },
        { label: "🔊 Convert Transcript to Audio", icon: Clock },
        { label: "❓ Generate Study Quiz", icon: HelpCircle }
      ]
    : [
        { label: "💡 Quick App Overview", icon: Lightbulb },
        { label: "🔗 How to Paste Links & Extract", icon: FileText },
        { label: "🔊 Enable Audio Synthesis", icon: Clock },
        { label: "⚡ Quick Summary of Recent Activity", icon: Database }
      ];

  return (
    <>
      {/* FLOATING ACTION STACK */}
      <button 
        onClick={() => setIsAiOpen(true)}
        className="fixed bottom-24 right-6 z-40 flex items-center justify-center px-4 py-3 bg-black/90 border border-cyan-400/50 text-cyan-400 rounded-full font-mono text-xs tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.3)] backdrop-blur-md hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all cursor-pointer group"
      >
        <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
        SYNCHROGLYPH AI
      </button>

      <button 
        onClick={() => router.push('/new-project')}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-cyan-500 text-black rounded-full font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-105 transition-all cursor-pointer"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* CENTERED AMOLED NEON CYAN MODAL OVERLAY */}
      {isAiOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
          
          {/* Main Modal Container */}
          <div className="relative w-full max-w-[640px] bg-[#030303] border border-cyan-500/20 rounded-2xl p-6 shadow-[0_0_80px_rgba(0,240,255,0.15)] overflow-hidden animate-in zoom-in-95 duration-300">
            
            {/* Background Aura */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                  <Sparkles className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-xl font-bold tracking-wide text-cyan-400">Synchroglyph AI Engine</h2>
              </div>
              <button 
                onClick={() => setIsAiOpen(false)}
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Action Chips */}
            <div className="relative z-10 flex flex-wrap justify-center gap-3 mb-6">
              {actionChips.map((action, i) => (
                <button 
                  key={i} 
                  onClick={() => handleAIAction(action.label)}
                  className="px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-cyan-500 hover:text-black transition-all cursor-pointer flex items-center gap-1.5"
                >
                  {/* Note: Icon rendering is optional since emoji is in the label now, but we keep it for structure */}
                  <action.icon className="w-3.5 h-3.5" />
                  {action.label}
                </button>
              ))}
            </div>

            {/* Output Canvas */}
            <div className="relative z-10 w-full min-h-[280px] bg-black border border-cyan-900/40 rounded-xl flex flex-col items-center justify-center p-6 mb-6 shadow-inner overflow-hidden">
              
              {!isProcessing && !outputStream ? (
                <>
                  <div className="relative w-12 h-12 mb-6">
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-900/30" />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-400 animate-spin shadow-[0_0_15px_rgba(0,240,255,0.3)]" />
                  </div>
                  <h3 className="text-cyan-400 font-mono text-sm tracking-[0.2em] mb-4 text-center uppercase">
                    {isWorkspace ? "Analyzing transcript text..." : "Compiling app guide..."}
                  </h3>
                  <p className="text-neutral-300 text-sm text-center max-w-sm leading-relaxed">
                    {isWorkspace 
                      ? "Generating deep-link summary of the current temporal sequence. Analyzing spatial noise patterns for nodal consistency."
                      : "Awaiting global context parameters. Ready to index and query cross-project archives."}
                  </p>
                </>
              ) : (
                <div className="w-full h-full max-h-96 overflow-y-auto font-sans text-slate-200 text-sm whitespace-pre-wrap leading-relaxed scrollbar-thin scrollbar-thumb-cyan-500/20 scrollbar-track-transparent text-left self-start">
                  {outputStream}
                  {isProcessing && (
                    <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />
                  )}
                </div>
              )}
            </div>

            {/* Bottom Input Area */}
            <div className="relative z-10">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && query && handleAIAction(query)}
                placeholder={isWorkspace ? "Ask anything about this video..." : "Ask anything across your entire workspace..."}
                className="w-full bg-black border border-cyan-900/50 rounded-xl py-3 px-4 pr-12 text-sm text-neutral-300 placeholder-neutral-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
              <button 
                onClick={() => query && handleAIAction(query)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors p-1"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
