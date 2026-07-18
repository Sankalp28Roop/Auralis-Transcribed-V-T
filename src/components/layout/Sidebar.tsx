import Link from 'next/link';
import { BarChart, FolderOpen, Settings, Zap, HelpCircle, LifeBuoy, AudioLines } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-64 flex-none border-r border-white/5 bg-[#0a0a0a] flex flex-col justify-between">
      <div>
        {/* Logo Area */}
        <div className="p-6 pb-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="bg-[#00e5ff] p-1.5 rounded text-black">
              <AudioLines className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-[#00e5ff] font-bold text-lg leading-tight">Auralis AI</h2>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Enterprise Audio</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-1">
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 bg-[#6d28d9] text-white rounded-lg text-sm font-medium">
            <BarChart className="h-4 w-4" />
            Workspace
          </Link>
          <Link href="/library" className="flex items-center gap-3 px-3 py-2.5 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-colors">
            <FolderOpen className="h-4 w-4" />
            Library
          </Link>
          <Link href="/automation" className="flex items-center gap-3 px-3 py-2.5 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-colors">
            <Zap className="h-4 w-4" />
            Automation
          </Link>
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-colors">
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </nav>
      </div>

      <div className="p-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
          <h4 className="text-sm font-medium text-white mb-1">Power user?</h4>
          <p className="text-xs text-zinc-400 mb-3">Upgrade to Pro</p>
          <Link href="/upgrade" className="block text-center w-full bg-[#6d28d9] hover:bg-[#5b21b6] text-white text-xs font-medium py-2 rounded-lg transition-colors">
            Upgrade to Pro
          </Link>
        </div>
        
        <div className="space-y-1 px-1">
          <Link href="/support" className="flex items-center gap-3 px-2 py-2 text-zinc-400 hover:text-white text-xs font-medium transition-colors">
            <HelpCircle className="h-3.5 w-3.5" />
            Support
          </Link>
          <Link href="/help" className="flex items-center gap-3 px-2 py-2 text-zinc-400 hover:text-white text-xs font-medium transition-colors">
            <LifeBuoy className="h-3.5 w-3.5" />
            Help
          </Link>
        </div>
      </div>
    </aside>
  );
}
