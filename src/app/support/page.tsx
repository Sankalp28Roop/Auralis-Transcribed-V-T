import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { Search, Grid, Mic2, ShieldCheck, MessageSquare, ChevronRight, UploadCloud, Headset } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-8 relative flex gap-8 pb-16">
          
          {/* Main Left Content */}
          <div className="flex-1 max-w-4xl space-y-6">
            
            {/* Hero Search Box */}
            <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">How can we help?</h2>
              
              <div className="relative w-full max-w-2xl mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00e5ff]" />
                <input 
                  type="text" 
                  placeholder="Search for documentation, tutorials, or troubleshooting..." 
                  className="w-full bg-black border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm text-zinc-300 outline-none focus:border-[#6d28d9] transition-colors shadow-inner"
                />
              </div>
              <p className="text-[10px] text-zinc-500 font-mono tracking-wide">
                Browse {"{{kb.article_count}}"} technical articles and system guides.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
                <Grid className="h-6 w-6 text-[#00e5ff] mb-4" />
                <h4 className="text-white font-medium mb-2 text-sm">API Integration</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Webhooks, auth flows, and enterprise SDK setup.
                </p>
              </div>

              <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
                <Mic2 className="h-6 w-6 text-[#00e5ff] mb-4" />
                <h4 className="text-white font-medium mb-2 text-sm">Voice Cloning</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Best practices for high-fidelity vocal replication.
                </p>
              </div>

              <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
                <ShieldCheck className="h-6 w-6 text-[#00e5ff] mb-4" />
                <h4 className="text-white font-medium mb-2 text-sm">Privacy & Data</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  GDPR compliance and encrypted storage protocols.
                </p>
              </div>
            </div>

            {/* Recent Support Interactions */}
            <div className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden mt-8">
              <div className="p-4 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
                <h3 className="text-white font-medium text-sm">Recent Support Interactions</h3>
                <span className="text-[10px] text-[#00e5ff] font-mono tracking-wider cursor-pointer hover:text-white transition-colors">VIEW ALL TICKETS</span>
              </div>
              
              <div className="divide-y divide-white/5">
                <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="bg-black border border-white/10 p-2.5 rounded-lg text-zinc-400">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-medium mb-0.5">Latency issues on production stream #94</h4>
                      <p className="text-[10px] text-zinc-500 font-mono tracking-wide">ID: {"{{ticket.id}}"} • Updated 14m ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-[#6d28d9] text-white text-[10px] px-3 py-1 rounded-full font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_10px_rgba(109,40,217,0.4)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff]"></span>
                      {"{{TICKET.STATUS}}"}
                    </span>
                    <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="bg-black border border-white/10 p-2.5 rounded-lg text-zinc-400">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-medium mb-0.5">Custom voice template validation error</h4>
                      <p className="text-[10px] text-zinc-500 font-mono tracking-wide">ID: AU-82942 • Updated 2h ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-white/10 text-zinc-400 text-[10px] px-3 py-1 rounded-full font-mono uppercase tracking-wider">
                      RESOLVED
                    </span>
                    <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* Tier Widget */}
            <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-4 w-64 mt-8 flex flex-col justify-between h-32">
              <div>
                <p className="text-[10px] text-zinc-500 font-mono tracking-wider mb-1">Current Tier</p>
                <h4 className="text-[#00e5ff] font-medium">{"{{user.support_tier}}"}</h4>
              </div>
              <button className="w-full bg-[#00e5ff] text-black text-xs font-bold py-2 rounded-md hover:bg-[#00e5ff]/90 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                Upgrade to Pro
              </button>
            </div>

          </div>

          {/* Right Sidebar Form */}
          <div className="w-[340px] flex-none">
            <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6 sticky top-0">
              <h3 className="text-white text-lg font-medium mb-2">Submit New Ticket</h3>
              <p className="text-xs text-zinc-400 mb-6">
                Expect a response within <span className="text-[#00e5ff] font-medium">2 hours</span> on your current tier.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] text-zinc-500 font-mono tracking-wider uppercase mb-2">ISSUE CATEGORY</label>
                  <select className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-300 outline-none focus:border-[#6d28d9] transition-colors appearance-none">
                    <option>Technical Integration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-zinc-500 font-mono tracking-wider uppercase mb-2">SUBJECT</label>
                  <input 
                    type="text" 
                    placeholder="Brief summary of the issue" 
                    className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#6d28d9] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-zinc-500 font-mono tracking-wider uppercase mb-2">DESCRIPTION</label>
                  <textarea 
                    placeholder="Please provide technical details or steps to reproduce..." 
                    className="w-full h-28 bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-300 outline-none focus:border-[#6d28d9] transition-colors resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-[10px] text-zinc-500 font-mono tracking-wider uppercase mb-2">ATTACHMENTS</label>
                  <div className="border border-dashed border-white/10 rounded-lg p-6 flex flex-col items-center justify-center bg-black/50 hover:bg-white/[0.02] transition-colors cursor-pointer text-center h-28">
                    <UploadCloud className="h-5 w-5 text-zinc-500 mb-2" />
                    <p className="text-xs text-zinc-400 px-4">
                      Drag logs or screenshots here
                    </p>
                  </div>
                </div>

                <button className="w-full bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black py-3 rounded-lg text-sm font-medium transition-colors mt-4 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                  Create Support Ticket
                </button>
                
                <hr className="border-white/5 my-6" />

                <div className="flex items-start gap-4">
                  <Headset className="h-6 w-6 text-[#00e5ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">Priority Live Chat</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Available for Enterprise Tier only
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Bar */}
          <div className="absolute bottom-0 left-8 right-8 border-t border-white/5 py-4 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff]"></span> GLOBAL SYSTEMS OPERATIONAL
              </div>
              <span className="text-white/10">|</span>
              <span>Uptime: 99.998%</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Support Docs</a>
              <a href="#" className="hover:text-white transition-colors">System Status</a>
              <span className="text-zinc-600">v2.4.1-stable</span>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
