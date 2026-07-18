import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { FolderOpen, Grid, List } from "lucide-react";

export default function LibraryPage() {
  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-8 relative">
          <div className="max-w-7xl mx-auto flex flex-col h-full">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">Library</h1>
                <p className="text-sm text-zinc-400">Manage your transcription and synthesis archives</p>
              </div>
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1">
                <button className="p-1.5 bg-[#6d28d9] rounded text-white shadow-sm"><Grid className="h-4 w-4" /></button>
                <button className="p-1.5 text-zinc-400 hover:text-white rounded transition-colors"><List className="h-4 w-4" /></button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-transparent border border-white/10 rounded-lg p-3 flex items-center justify-between mb-12">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 font-mono tracking-wider">TYPE:</span>
                  <select className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-zinc-300 outline-none">
                    <option>All Types</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 font-mono tracking-wider">DATE:</span>
                  <select className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-zinc-300 outline-none">
                    <option>Last 7 Days</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 font-mono tracking-wider">STATUS:</span>
                  <div className="flex items-center gap-1">
                    <span className="bg-white/10 text-zinc-300 text-[10px] px-2 py-0.5 rounded border border-white/5">Completed</span>
                    <span className="bg-transparent text-zinc-500 text-[10px] px-2 py-0.5 rounded border border-transparent">Processing</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="text-zinc-500">Showing 0 items</span>
                <button className="text-zinc-400 hover:text-white transition-colors">Clear Filters</button>
              </div>
            </div>

            {/* Empty State */}
            <div className="flex-1 flex flex-col items-center justify-center -mt-20">
              <div className="bg-white/5 p-6 rounded-2xl mb-6 flex items-center justify-center border border-white/5">
                <FolderOpen className="h-12 w-12 text-zinc-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">No media items found</h3>
              <p className="text-zinc-400 text-sm mb-6 text-center max-w-sm">
                Start by uploading a file or creating a new synthesis project.
              </p>
              <button className="bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black px-6 py-2.5 rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all">
                Upload Your First File
              </button>
            </div>
            
            {/* Storage Footer */}
            <div className="absolute bottom-6 left-8 right-8 border-t border-white/5 pt-4 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> AI Core Online
                </div>
                <span className="text-white/10">|</span>
                <span>Storage: 24.5 GB / 100 GB</span>
              </div>
              <div className="bg-[#00e5ff] text-black h-10 w-10 flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.3)] cursor-pointer">
                <span className="text-2xl font-light mb-1">+</span>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
