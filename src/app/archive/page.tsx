import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { Search, Filter, ExternalLink, MoreVertical, AlertCircle, Archive as ArchiveIcon, Download, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

export default function ArchivePage() {
  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-8 relative flex flex-col">
          
          <div className="max-w-6xl w-full mx-auto flex-1 flex flex-col pb-8">
            
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="max-w-2xl">
                <h1 className="text-3xl font-bold text-white mb-2">Historical Projects</h1>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Review and restore previous transcriptions, voice syntheses, and automated workflows. These projects are stored in cold-storage for efficiency.
                </p>
              </div>
              <div className="flex bg-white/5 rounded-lg p-1 border border-white/10 shrink-0">
                <button className="px-4 py-1.5 text-xs font-medium text-zinc-300 hover:text-white rounded-md transition-colors">List View</button>
                <button className="px-4 py-1.5 text-xs font-medium text-white bg-white/10 rounded-md shadow-sm transition-colors">Grid View</button>
              </div>
            </div>

            {/* Search & Filters */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Filter by project name, ID, or tag..." 
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded-lg pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00e5ff] transition-colors"
                />
              </div>
              <button className="bg-[#1a1a1a] hover:bg-[#222] border border-white/10 text-zinc-300 px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                <Filter className="h-4 w-4" /> Filters
              </button>
              <div className="flex items-center gap-3 ml-4">
                <span className="text-xs font-mono text-zinc-500 tracking-wider">STATUS:</span>
                <span className="text-[#00e5ff] border border-[#00e5ff]/30 bg-[#00e5ff]/5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider cursor-pointer">COMPLETED</span>
                <span className="text-zinc-400 border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider cursor-pointer hover:bg-white/5 transition-colors">CANCELLED</span>
                <span className="text-zinc-400 border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider cursor-pointer hover:bg-white/5 transition-colors">FAILED</span>
              </div>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-2 gap-6 mb-8 flex-1">
              
              {/* Card 1: Transcription */}
              <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6 flex flex-col justify-between hover:border-white/10 transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-[#c084fc] font-mono tracking-wider uppercase bg-[#c084fc]/10 px-2 py-0.5 rounded">TRANSCRIPTION / AI-842</span>
                    <ExternalLink className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300 transition-colors cursor-pointer" />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-6">{"{{archive.title}}"} Project Omega</h3>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500 font-mono text-[10px] tracking-wider">CREATION DATE</span>
                      <span className="text-zinc-300 font-mono text-xs">{"{{archive.date}}"} 2023-11-12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500 font-mono text-[10px] tracking-wider">DURATION</span>
                      <span className="text-zinc-300 font-mono text-xs">42m 12s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500 font-mono text-[10px] tracking-wider">STATUS</span>
                      <span className="text-[#00e5ff] font-mono text-[10px] tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]"></span>
                        {"{{archive.status}}"} ARCHIVED
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <span className="border border-white/10 text-zinc-400 px-2 py-1 rounded text-[10px] font-mono">TRANSCRIPT</span>
                  <span className="border border-white/10 text-zinc-400 px-2 py-1 rounded text-[10px] font-mono">JSON</span>
                  <span className="border border-white/10 text-zinc-400 px-2 py-1 rounded text-[10px] font-mono">SRT</span>
                </div>
              </div>

              {/* Card 2: Synthesis */}
              <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6 flex flex-col justify-between hover:border-white/10 transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-[#00e5ff] font-mono tracking-wider uppercase bg-[#00e5ff]/10 px-2 py-0.5 rounded">SYNTHESIS / VOX-99</span>
                    <MoreVertical className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300 transition-colors cursor-pointer" />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-6">{"{{archive.title}}"} Customer Service Voice A</h3>
                  
                  {/* Waveform graphic placeholder */}
                  <div className="bg-black border border-white/5 rounded-lg h-16 mb-6 flex items-center justify-center overflow-hidden relative">
                    <div className="flex items-center gap-1 opacity-80">
                      {[1,3,5,8,12,8,5,3,1, 3,6,10,14,10,6,3, 2,5,7,5,2].map((h, i) => (
                        <div key={i} className="w-1 bg-[#00e5ff] rounded-full" style={{ height: `${h * 2}px` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 tracking-wider">
                  <span>{"{{archive.date}}"} 2023-10-01</span>
                  <span>VOICE MODEL v2.1</span>
                </div>
              </div>

              {/* Card 3: Automation (Failed) */}
              <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6 flex flex-col justify-between hover:border-white/10 transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase bg-white/5 px-2 py-0.5 rounded">AUTOMATION / JOB-712</span>
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-4">{"{{archive.title}}"} Batch Audio Normalization</h3>
                  
                  <div className="bg-red-500/10 border border-red-500/20 rounded-md p-3 mb-6">
                    <p className="text-red-400 text-xs font-medium">Job failed at 84%. Partially archived results available for retrieval.</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-[10px] font-mono tracking-wider">
                  <span className="text-zinc-500">DATE: {"{{archive.date}}"} 2023-09-15</span>
                  <span className="text-red-400">TERMINATED</span>
                </div>
              </div>

              {/* Card 4: Analysis */}
              <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6 flex flex-col justify-between hover:border-white/10 transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-[#00e5ff] font-mono tracking-wider uppercase bg-[#00e5ff]/10 px-2 py-0.5 rounded">ANALYSIS / AN-902</span>
                  </div>
                  <h3 className="text-white font-medium text-lg mb-6">{"{{archive.title}}"} Sentiment Mapping Q3</h3>
                  
                  <div className="mb-6">
                    <div className="h-1 w-full bg-white/10 rounded-full mb-3">
                      <div className="h-full bg-[#00e5ff] w-[98%] rounded-full shadow-[0_0_5px_#00e5ff]"></div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-zinc-500">
                      <span>DATA POINTS: 14.5K</span>
                      <span>CONFIDENCE: 98.2%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-[10px] font-mono tracking-wider">
                  <span className="text-zinc-500">ARCHIVED: {"{{archive.date}}"} 2023-08-28</span>
                  <span className="text-zinc-300">COMPLETED</span>
                </div>
              </div>

              {/* Card 5: Empty Placeholder */}
              <div className="col-span-2 border border-dashed border-white/10 rounded-xl p-12 flex flex-col items-center justify-center text-center">
                <ArchiveIcon className="h-8 w-8 text-zinc-600 mb-4" />
                <p className="text-zinc-500 font-medium">No more projects found</p>
              </div>

            </div>

            {/* Bottom Bar: Pagination & Actions */}
            <div className="flex items-center justify-between border-t border-white/5 pt-6">
              
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider">SHOWING 1-4 OF 124 PROJECTS</span>
                <div className="flex bg-[#1a1a1a] rounded-lg border border-white/5 overflow-hidden">
                  <button className="px-3 py-1.5 text-zinc-500 hover:bg-white/5 transition-colors"><ChevronLeft className="h-4 w-4" /></button>
                  <button className="px-3 py-1.5 text-black bg-[#00e5ff] text-xs font-bold">1</button>
                  <button className="px-3 py-1.5 text-zinc-400 hover:bg-white/5 transition-colors text-xs">2</button>
                  <button className="px-3 py-1.5 text-zinc-400 hover:bg-white/5 transition-colors text-xs">3</button>
                  <button className="px-3 py-1.5 text-zinc-500 hover:bg-white/5 transition-colors"><ChevronRight className="h-4 w-4" /></button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="text-zinc-400 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors">
                  <Download className="h-4 w-4" /> Export Archive Index
                </button>
                <button className="bg-transparent hover:bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                  <Trash2 className="h-4 w-4" /> Clear Old Logs
                </button>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
