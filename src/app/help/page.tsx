import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { Clock, User, Info, Mic2, RefreshCw, History, MessageSquare, ChevronDown, ChevronRight } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-8 relative flex gap-8 pb-16">
          
          {/* Main Content Area */}
          <div className="flex-1 max-w-4xl space-y-6">
            
            {/* Breadcrumbs */}
            <div className="text-xs text-zinc-500 font-medium">
              Home &nbsp;›&nbsp; Documentation &nbsp;›&nbsp; <span className="text-zinc-300">AI Voice Synthesis</span>
            </div>

            {/* Header */}
            <div className="pt-2 pb-6 border-b border-white/5">
              <h1 className="text-4xl font-bold text-white mb-4">{"{{doc.title}}"}</h1>
              <div className="flex items-center gap-6 text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> Last updated: {"{{doc.last_updated}}"}</span>
                <span className="flex items-center gap-1.5"><User className="h-3 w-3" /> Auralis Team</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-8 space-y-6">
              <h3 className="text-[#00e5ff] text-lg font-bold tracking-wide">Introduction</h3>
              <p className="text-zinc-300 text-sm leading-loose">
                Auralis leverages advanced neural networks to provide high-fidelity audio synthesis. 
                Our Voice Cloning engine allows you to create high-quality digital twins of any voice 
                with as little as 30 seconds of sample data. This documentation covers the technical 
                implementation and best practices for achieving professional results.
              </p>

              <div className="bg-white/5 border-l-2 border-[#00e5ff] p-4 rounded-r-lg">
                <h4 className="text-[#00e5ff] text-xs font-bold mb-1 flex items-center gap-2">
                  <Info className="h-3.5 w-3.5" /> System Requirement
                </h4>
                <p className="text-xs text-zinc-400">
                  Recommended 48kHz mono WAV files for optimal cloning accuracy.
                </p>
              </div>
            </div>

            {/* Sub-grid */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* Left Column */}
              <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-6">
                <h3 className="text-[#c084fc] text-sm font-bold mb-3 tracking-wide">Workflow Automation</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Integrating Auralis into your existing DAW or post-production workflow is seamless with our API. Monitor real-time processing via the dashboard indicators.
                </p>
                <div className="aspect-video bg-black rounded-lg border border-white/10 overflow-hidden relative">
                  {/* Decorative mockup of a studio image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6d28d9]/20 to-[#00e5ff]/20 flex flex-col justify-end p-3">
                    <div className="w-full h-1/3 bg-black/50 backdrop-blur border border-white/10 rounded flex items-center justify-center">
                      <div className="flex gap-2">
                        <div className="h-2 w-16 bg-[#00e5ff] rounded-full"></div>
                        <div className="h-2 w-8 bg-[#6d28d9] rounded-full"></div>
                        <div className="h-2 w-12 bg-emerald-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Specs Box */}
                <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white text-sm font-bold mb-6 tracking-wide">Technical Spec</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-zinc-500">Sample Rate</span>
                      <span className="text-[#00e5ff]">48kHz / 24bit</span>
                    </div>
                    <hr className="border-white/5" />
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-zinc-500">Latent Dims</span>
                      <span className="text-[#00e5ff]">512px Vector</span>
                    </div>
                    <hr className="border-white/5" />
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-zinc-500">Processing</span>
                      <span className="text-[#00e5ff]">GPU-Optimized</span>
                    </div>
                  </div>
                </div>

                {/* API Docs Cyan Box */}
                <div className="bg-[#00e5ff] rounded-2xl p-6 cursor-pointer hover:bg-[#00e5ff]/90 transition-colors shadow-[0_0_20px_rgba(0,229,255,0.15)] group">
                  <h3 className="text-black text-lg font-bold mb-3">API Docs</h3>
                  <p className="text-black/70 text-xs leading-relaxed mb-6">
                    Access the full endpoint reference for REST and WebSocket integration.
                  </p>
                  <p className="text-black text-xs font-bold font-mono tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                    Open API Explorer <ChevronRight className="h-4 w-4" />
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Sidebar */}
          <div className="w-64 flex-none space-y-8 pl-4 border-l border-white/5">
            
            {/* NAVIGATION */}
            <div>
              <h4 className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mb-4">NAVIGATION</h4>
              <div className="space-y-2">
                
                <div>
                  <div className="flex items-center justify-between text-[#00e5ff] text-xs font-medium py-1.5 cursor-pointer">
                    Getting Started <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="pl-4 border-l border-white/10 ml-2 mt-1 space-y-2 py-1">
                    <div className="text-zinc-400 text-xs py-1 cursor-pointer hover:text-white transition-colors">Platform Overview</div>
                    <div className="text-[#00e5ff] text-xs font-medium py-1 border-l-2 border-[#00e5ff] -ml-[1px] pl-3">AI Voice Synthesis</div>
                    <div className="text-zinc-400 text-xs py-1 cursor-pointer hover:text-white transition-colors">Authentication</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-zinc-400 text-xs py-1.5 cursor-pointer hover:text-white transition-colors">
                  API Reference <ChevronRight className="h-4 w-4 text-zinc-600" />
                </div>
                <div className="flex items-center justify-between text-zinc-400 text-xs py-1.5 cursor-pointer hover:text-white transition-colors">
                  Tutorials <ChevronRight className="h-4 w-4 text-zinc-600" />
                </div>
              </div>
            </div>

            {/* QUICK TASKS */}
            <div>
              <h4 className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mb-4">QUICK TASKS</h4>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 bg-transparent border border-white/10 rounded-lg p-3 text-left hover:bg-white/5 transition-colors">
                  <Mic2 className="h-4 w-4 text-zinc-400" />
                  <span className="text-xs text-zinc-300">How to clone a voice</span>
                </button>
                <button className="w-full flex items-center gap-3 bg-transparent border border-white/10 rounded-lg p-3 text-left hover:bg-white/5 transition-colors">
                  <RefreshCw className="h-4 w-4 text-[#00e5ff]" />
                  <span className="text-xs text-zinc-300">Sync with Adobe Premiere</span>
                </button>
                <button className="w-full flex items-center gap-3 bg-transparent border border-white/10 rounded-lg p-3 text-left hover:bg-white/5 transition-colors">
                  <History className="h-4 w-4 text-zinc-400" />
                  <span className="text-xs text-zinc-300">Recover deleted assets</span>
                </button>
              </div>
            </div>

            {/* Discord Box */}
            <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-5 mt-auto">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#5865F2]/20 p-2 rounded-lg text-[#5865F2]">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <h4 className="text-white text-xs font-bold">Discord Community</h4>
              </div>
              <p className="text-[10px] text-zinc-500 leading-relaxed mb-4">
                Join 50k+ sound engineers and developers for support.
              </p>
              <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-xs font-medium py-2 rounded transition-colors">
                Join Server
              </button>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
