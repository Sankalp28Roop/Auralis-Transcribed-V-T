import Link from 'next/link';
import { Bell, UserCircle, Search } from 'lucide-react';

export function Topbar() {
  return (
    <header className="h-16 flex-none border-b border-white/5 bg-[#0a0a0a] flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold text-[#00e5ff] tracking-tight">Auralis</h1>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-[#00e5ff] border-b-2 border-[#00e5ff] py-5">
            Dashboard
          </Link>
          <Link href="/archive" className="text-zinc-400 hover:text-white py-5 transition-colors">
            Archive
          </Link>
          <Link href="/settings" className="text-zinc-400 hover:text-white py-5 transition-colors">
            Settings
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-5">
        
        {/* Search Bar */}
        <div className="hidden lg:block relative w-64 mr-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search documentation..." 
            className="w-full bg-transparent border border-white/10 rounded-md py-1.5 pl-9 pr-4 text-xs text-zinc-300 outline-none focus:border-white/20 transition-colors"
          />
        </div>

        {/* Notification Bell */}
        <button className="text-zinc-400 hover:text-white transition-colors">
          <Bell className="h-4 w-4" />
        </button>

        <div className="h-6 w-[1px] bg-white/10"></div>

        {/* Personalized Profile Section */}
        <Link href="/settings" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white leading-tight">Sankalp</p>
            <p className="text-[10px] text-zinc-400 leading-tight">Software Developer</p>
          </div>
          <div className="h-8 w-8 bg-[#6d28d9] rounded-full flex items-center justify-center text-white shadow-inner border border-white/10">
            <UserCircle className="h-5 w-5" />
          </div>
        </Link>

        {/* New Project Button */}
        <Link href="/new-project" className="bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black font-semibold text-xs px-4 py-2 rounded-md transition-all shadow-[0_0_10px_rgba(0,229,255,0.2)] ml-2 flex items-center gap-1.5">
          <span className="text-base font-normal leading-none mb-[2px]">+</span> New Project
        </Link>

      </div>
    </header>
  );
}
