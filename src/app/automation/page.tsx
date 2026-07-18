import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { Play, AudioLines, Search, Maximize, Info } from "lucide-react";

export default function AutomationPage() {
  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative">
        <Topbar />
        
        <main className="flex-1 overflow-hidden relative flex">
          
          {/* Main Node Canvas Area */}
          <div className="flex-1 relative bg-[#0d0d0d] border-r border-white/5">
            {/* Top Canvas Controls */}
            <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
                <span className="text-[10px] text-zinc-400 font-mono">WORKFLOW: </span>
                <span className="text-[10px] text-white font-mono">{"{{WORKFLOW_ID}}"}</span>
                <span className="text-zinc-600 ml-2 mr-2">|</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff]"></span>
                <span className="text-[10px] text-zinc-300 font-mono">{"{{status}}"}</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-white/5 border border-white/10 p-2 rounded-lg text-zinc-400 hover:text-white transition-colors">
                  <Search className="h-4 w-4" />
                </button>
                <button className="bg-white/5 border border-white/10 p-2 rounded-lg text-zinc-400 hover:text-white transition-colors">
                  <Maximize className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Dotted Background Pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

            {/* Nodes Mockup */}
            <div className="absolute top-1/3 left-20">
              {/* Trigger Node */}
              <div className="w-[320px] bg-[#121212] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative z-10">
                <div className="p-4 flex items-center gap-3 border-b border-white/5">
                  <div className="bg-[#00e5ff] p-2 rounded-lg text-black">
                    <Play className="h-4 w-4 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium tracking-wide">TRIGGER</h4>
                    <p className="text-xs text-zinc-500">{"{{trigger_title}}"}</p>
                  </div>
                </div>
                <div className="p-4 bg-white/[0.02]">
                  <div className="bg-black/50 border border-white/5 rounded p-3">
                    <p className="text-[10px] text-zinc-500 font-mono mb-1">{"{{CONFIG_LABEL}}"}</p>
                    <p className="text-sm text-white font-mono">{"{{config_value}}"}</p>
                  </div>
                </div>
                <div className="p-3 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                  <span>OUTPUT: {"{{output_key}}"}</span>
                  <div className="h-2 w-2 rounded-full bg-[#00e5ff] absolute -right-1 bottom-4"></div>
                </div>
              </div>

              {/* Connecting Lines (Mockup via SVG) */}
              <svg className="absolute top-1/2 left-[320px] w-[200px] h-[100px] pointer-events-none" style={{ overflow: 'visible' }}>
                <path d="M 0 0 C 100 0, 100 80, 200 80" fill="none" stroke="#00e5ff" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]" />
                <path d="M -50 150 C 50 150, 100 80, 200 80" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* AI Process Node */}
              <div className="w-[320px] bg-[#121212] border border-white/10 rounded-xl overflow-hidden shadow-2xl absolute left-[520px] top-[80px] z-10">
                <div className="absolute top-1/2 -left-1 h-2 w-2 rounded-full bg-[#00e5ff] -translate-y-1/2"></div>
                <div className="p-4 flex items-center gap-3 border-b border-white/5">
                  <div className="bg-[#6d28d9] p-2 rounded-lg text-white">
                    <AudioLines className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium tracking-wide">AI PROCESS</h4>
                    <p className="text-xs text-zinc-500">{"{{processor_title}}"}</p>
                  </div>
                </div>
                <div className="p-4 bg-white/[0.02]">
                  <p className="text-[10px] text-zinc-500 font-mono mb-2">{"{{METRIC_LABEL}}"}</p>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#6d28d9] to-[#00e5ff] w-2/3 rounded-full"></div>
                  </div>
                </div>
                <div className="p-3 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 font-mono text-right w-full">
                  <span className="w-full">INPUT: {"{{input_key}}"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Block Library */}
          <div className="w-80 flex flex-col h-full bg-[#0a0a0a] relative">
            <div className="p-6">
              <h3 className="text-white font-medium mb-6">Block Library</h3>
              
              <div className="flex items-center gap-2 mb-6">
                <button className="px-3 py-1 bg-white/10 text-white text-[10px] uppercase tracking-wider rounded-full border border-white/5">ALL</button>
                <button className="px-3 py-1 bg-transparent text-zinc-500 hover:text-white text-[10px] uppercase tracking-wider rounded-full border border-transparent hover:border-white/10 transition-all">TRIGGERS</button>
                <button className="px-3 py-1 bg-transparent text-zinc-500 hover:text-white text-[10px] uppercase tracking-wider rounded-full border border-transparent hover:border-white/10 transition-all">AI</button>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">CATEGORY_NAME</p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="text-zinc-400">
                      <span className="text-xl">⊘</span>
                    </div>
                    <div>
                      <h4 className="text-sm text-white">{"{{Block Name}}"}</h4>
                      <p className="text-[10px] text-zinc-500 leading-tight">{"{{Block description}}"}</p>
                    </div>
                  </div>
                  <span className="text-zinc-500">⋮</span>
                </div>
              </div>
            </div>

            {/* System Status Widget */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[#1a1033] border border-[#6d28d9]/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4 text-zinc-400" />
                  <span className="text-[10px] text-zinc-400 font-mono tracking-wider">SYSTEM STATUS</span>
                </div>
                <p className="text-xs text-zinc-300 leading-snug">
                  {"{{status_summary}}"} Current GPU utilization is at {"{{gpu_percentage}}"}%
                </p>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#00e5ff] text-black h-12 w-12 flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.3)] cursor-pointer hover:scale-105 transition-transform">
                <span className="text-2xl font-light mb-1">+</span>
              </div>
            </div>
          </div>

        </main>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to {
            stroke-dashoffset: -8;
          }
        }
      `}} />
    </div>
  );
}
