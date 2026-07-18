import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { Link as LinkIcon, FileUp, Radio, UploadCloud, ChevronDown, Play, Sparkles } from "lucide-react";

export default function NewProjectPage() {
  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-8 relative pb-20">
          
          <div className="max-w-4xl space-y-8">
            
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-3">Create Project</h1>
              <p className="text-zinc-400 text-sm">
                Configure your automated audio workflow. Select sources and define AI processing parameters.
              </p>
            </div>

            {/* Step 1: Project Identity */}
            <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-6 w-6 rounded-full bg-[#00e5ff] text-black font-bold text-xs flex items-center justify-center shrink-0">
                  1
                </div>
                <h2 className="text-white font-medium">Project Identity</h2>
              </div>
              
              <div>
                <label className="block text-[10px] text-zinc-500 font-mono tracking-wider uppercase mb-2">PROJECT NAME</label>
                <input 
                  type="text" 
                  placeholder="e.g. Q3 Earnings Analysis _ Final" 
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#6d28d9] transition-colors"
                />
              </div>
            </div>

            {/* Step 2: Input Source */}
            <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-6 w-6 rounded-full bg-[#00e5ff] text-black font-bold text-xs flex items-center justify-center shrink-0">
                  2
                </div>
                <h2 className="text-white font-medium">Input Source</h2>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* YouTube / URL */}
                <div className="bg-black border border-white/5 rounded-xl p-6 cursor-pointer hover:bg-white/[0.02] transition-colors flex flex-col items-center justify-center text-center">
                  <LinkIcon className="h-6 w-6 text-zinc-400 mb-4" />
                  <h3 className="text-white font-medium text-sm mb-1">YouTube / URL</h3>
                  <p className="text-[10px] text-zinc-500">Direct link import</p>
                </div>

                {/* File Upload (Active) */}
                <div className="bg-[#00e5ff]/5 border border-[#00e5ff]/30 rounded-xl p-6 cursor-pointer transition-colors flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent opacity-50"></div>
                  <FileUp className="h-6 w-6 text-[#00e5ff] mb-4" />
                  <h3 className="text-white font-medium text-sm mb-1">File Upload</h3>
                  <p className="text-[10px] text-zinc-500">MP3, WAV, MP4, MKV</p>
                </div>

                {/* Live Stream */}
                <div className="bg-black border border-white/5 rounded-xl p-6 cursor-pointer hover:bg-white/[0.02] transition-colors flex flex-col items-center justify-center text-center">
                  <Radio className="h-6 w-6 text-zinc-400 mb-4" />
                  <h3 className="text-white font-medium text-sm mb-1">Live Stream</h3>
                  <p className="text-[10px] text-zinc-500">RTMP/HLS protocol</p>
                </div>
              </div>

              {/* Drag and Drop Zone */}
              <div className="border border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center bg-black/50 hover:bg-white/[0.02] transition-colors cursor-pointer text-center">
                <UploadCloud className="h-6 w-6 text-[#00e5ff] mb-4" />
                <p className="text-sm text-zinc-300 mb-1">
                  Drag and drop audio files or <span className="text-[#00e5ff]">browse locally</span>
                </p>
                <p className="text-[10px] text-zinc-500">Maximum file size: 2GB per project</p>
              </div>
            </div>

            {/* Bottom 2 Columns: Step 3 & 4 */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* Step 3: Transcription */}
              <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-6 w-6 rounded-full bg-[#00e5ff] text-black font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <h2 className="text-white font-medium">Transcription</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] text-zinc-500 font-mono tracking-wider uppercase mb-2">DETECTION LANGUAGE</label>
                    <div className="relative">
                      <select className="w-full bg-black border border-white/10 rounded-lg pl-4 pr-10 py-3 text-sm text-zinc-300 outline-none focus:border-[#6d28d9] transition-colors appearance-none">
                        <option>Auto-detect Language</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="bg-black border border-white/10 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-white text-sm font-medium">High Fidelity Model</h4>
                      <p className="text-[10px] text-zinc-500 mt-0.5">Slower processing, superior accuracy.</p>
                    </div>
                    {/* Toggle Switch On */}
                    <div className="w-10 h-5 bg-[#00e5ff]/20 rounded-full relative cursor-pointer border border-[#00e5ff]/30">
                      <div className="absolute right-1 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#00e5ff] rounded-full shadow-[0_0_5px_#00e5ff]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Synthesis Engine */}
              <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-6 w-6 rounded-full bg-[#00e5ff] text-black font-bold text-xs flex items-center justify-center shrink-0">
                    4
                  </div>
                  <h2 className="text-white font-medium">Synthesis Engine</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] text-zinc-500 font-mono tracking-wider uppercase mb-2">DEFAULT VOICE PROFILE</label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <select className="w-full bg-black border border-white/10 rounded-lg pl-4 pr-10 py-3 text-sm text-zinc-300 outline-none focus:border-[#6d28d9] transition-colors appearance-none">
                          <option>Auralis-Alpha (Neutral)</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                      </div>
                      <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 flex items-center justify-center transition-colors">
                        <Play className="h-4 w-4 text-zinc-300" />
                      </button>
                    </div>
                  </div>

                  {/* AI Enhancement Box */}
                  <div className="bg-[#6d28d9]/5 border border-[#6d28d9]/20 rounded-lg p-4">
                    <h4 className="text-[#c084fc] text-[10px] font-mono tracking-wider uppercase mb-1 flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3" /> AI ENHANCEMENT
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Automatically cleans up background noise and normalizes levels before synthesis.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
