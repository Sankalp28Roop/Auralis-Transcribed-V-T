"use client";

import React, { useState } from "react";
import { Sparkles, Plus, X, FileText, Lightbulb, HelpCircle, Clock, Send } from "lucide-react";
import { useRouter } from "next/navigation";

interface SynchroglyphAIProps {
  transcriptData: any;
}

export function SynchroglyphAI({ transcriptData }: SynchroglyphAIProps) {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [outputStream, setOutputStream] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleAIAction = async (actionText: string) => {
    setIsProcessing(true);
    setOutputStream("");
    
    // Simulating dynamic Gemini SDK connection via streaming response
    const promptContext = `Processing request: [${actionText}] against ${transcriptData?.length || 0} transcript segments...`;
    setOutputStream(promptContext);

    // Simulated latency for UI effect
    setTimeout(() => {
      setOutputStream(prev => prev + "\n\nInitializing temporal analysis matrix...");
    }, 800);

    setTimeout(() => {
      setOutputStream(prev => prev + "\n\n[GEMINI ENGINE RESPONSE]: The transcript primarily covers the core concepts extracted from the video processing pipeline. The nodal consistency is stable across all spatial noise patterns.");
      setIsProcessing(false);
    }, 2500);
  };

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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl transition-all duration-300 animate-in fade-in">
          
          {/* Main Modal Container */}
          <div className="relative w-full max-w-2xl bg-[#030303] border border-cyan-400/40 rounded-3xl p-8 shadow-[0_0_60px_rgba(0,240,255,0.3)] overflow-hidden animate-in zoom-in-95 duration-300">
            
            {/* Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between mb-8">
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
              {[
                { label: "Summarize" },
                { label: "Key Points" },
                { label: "Generate Quiz" },
                { label: "Explain Selected Text" }
              ].map((action, i) => (
                <button 
                  key={i} 
                  onClick={() => handleAIAction(action.label)}
                  className="px-4 py-1.5 rounded-full bg-transparent border border-cyan-500/30 text-xs font-mono text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
                >
                  {action.label}
                </button>
              ))}
            </div>

            {/* Output Canvas */}
            <div className="relative z-10 w-full h-64 bg-black border border-cyan-900/40 rounded-xl flex flex-col items-center justify-center p-6 mb-6 shadow-inner overflow-hidden">
              
              {!isProcessing && !outputStream ? (
                <>
                  {/* Idle State with Circular Loader */}
                  <div className="relative w-12 h-12 mb-6">
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-900/30" />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-400 animate-spin shadow-[0_0_15px_rgba(0,240,255,0.3)]" />
                  </div>
                  <h3 className="text-cyan-400 font-mono text-sm tracking-[0.2em] mb-4 text-center">
                    PROCESSING SYNTHESIS NODES...
                  </h3>
                  <p className="text-neutral-300 text-sm text-center max-w-sm leading-relaxed">
                    Generating deep-link summary of the current temporal sequence. Analyzing spatial noise patterns for nodal consistency.
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
                placeholder="Ask anything about this video..."
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
