import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { Check, Users, UserCheck, Shield, Headset, Zap, CreditCard, X } from "lucide-react";

export default function UpgradePage() {
  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto relative flex flex-col items-center pb-24">
          
          <div className="max-w-5xl w-full px-8 mt-16 flex flex-col items-center">
            
            {/* Top Badge */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-[#00e5ff]"></div>
              <span className="text-[10px] text-zinc-300 font-mono tracking-widest uppercase">
                POWERING {"{{usage.limit}}"} STUDIO SESSIONS
              </span>
            </div>

            {/* Hero Text */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Unlock the Full Power <br/>of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#6d28d9]">Auralis AI</span>
            </h1>
            <p className="text-zinc-400 text-sm md:text-base text-center max-w-2xl mb-16 leading-relaxed">
              Elevate your sound design with professional-grade AI features, sub-millisecond processing, and cloud-synced precision engineering.
            </p>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20">
              
              {/* Starter Plan */}
              <div className="bg-[#121212] border border-white/5 rounded-2xl p-8 flex flex-col">
                <h3 className="text-white text-lg font-bold mb-1">Starter</h3>
                <p className="text-xs text-zinc-500 mb-6">For hobbyists and explorers.</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">₹0</span>
                  <span className="text-[10px] text-zinc-500 font-mono tracking-wider ml-1 uppercase">/ MONTH</span>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-300">10 AI Generations / Day</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-300">Standard Audio Quality</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-300">Basic Sound Library</span>
                  </div>
                </div>

                <button className="w-full py-3 rounded-lg border border-white/10 text-zinc-400 text-sm font-semibold bg-white/5 cursor-not-allowed">
                  Current Plan
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-[#121212] border border-[#00e5ff]/50 rounded-2xl p-8 flex flex-col relative shadow-[0_0_30px_rgba(0,229,255,0.1)]">
                <div className="absolute -top-3 right-6 bg-[#00e5ff] text-black text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                  RECOMMENDED
                </div>
                <h3 className="text-white text-lg font-bold mb-1">Pro</h3>
                <p className="text-xs text-zinc-500 mb-6">For professional audio engineers.</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">₹299</span>
                  <span className="text-[10px] text-zinc-500 font-mono tracking-wider ml-1 uppercase">/ MONTH</span>
                </div>

                <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-5 mb-8">
                  <div className="flex items-center gap-1.5 mb-4">
                    <Zap className="h-3 w-3 text-[#00e5ff]" />
                    <span className="text-[10px] text-[#00e5ff] font-mono tracking-wider uppercase">CORE PRO FEATURES</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#00e5ff]/10 p-0.5 rounded-full mt-0.5 shrink-0">
                        <Check className="h-3 w-3 text-[#00e5ff]" />
                      </div>
                      <span className="text-xs text-white">Unlimited Voice Cloning</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-[#00e5ff]/10 p-0.5 rounded-full mt-0.5 shrink-0">
                        <Check className="h-3 w-3 text-[#00e5ff]" />
                      </div>
                      <span className="text-xs text-white">Real-time processing</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-[#00e5ff]/10 p-0.5 rounded-full mt-0.5 shrink-0">
                        <Check className="h-3 w-3 text-[#00e5ff]" />
                      </div>
                      <span className="text-xs text-white">1TB Secure Cloud Storage</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-[#00e5ff]/10 p-0.5 rounded-full mt-0.5 shrink-0">
                        <Check className="h-3 w-3 text-[#00e5ff]" />
                      </div>
                      <span className="text-xs text-white">Priority API Access</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <button className="w-full py-3 rounded-lg bg-[#00e5ff] text-black text-sm font-bold shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:bg-[#00e5ff]/90 transition-colors">
                    Upgrade to Pro
                  </button>
                  <span className="text-[9px] text-zinc-600 font-mono tracking-widest uppercase">
                    30-day money-back guarantee
                  </span>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-[#121212] border border-white/5 rounded-2xl p-8 flex flex-col">
                <h3 className="text-white text-lg font-bold mb-1">Enterprise</h3>
                <p className="text-xs text-zinc-500 mb-6">For studios and large teams.</p>
                
                <div className="mb-8 flex flex-col gap-1">
                  <div>
                    <span className="text-3xl font-bold text-white">₹499 - ₹999</span>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-zinc-400">and ₹3000 - ₹10k</span>
                  </div>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Users className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-300">Unlimited Team Seats</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <UserCheck className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-300">Custom AI Training</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-300">SOC2 Compliance & SSO</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Headset className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-300">Dedicated Account Manager</span>
                  </div>
                </div>

                <button className="w-full py-3 rounded-lg border border-[#6d28d9]/50 hover:bg-[#6d28d9]/10 text-white text-sm font-semibold transition-colors">
                  Contact Sales
                </button>
              </div>

            </div>

            {/* Bottom Section (Breakdown & Summary) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-20">
              
              {/* Detailed Breakdown */}
              <div className="bg-[#1a1a1a] border border-white/5 rounded-xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                  <h3 className="text-white text-sm font-bold">Detailed Breakdown</h3>
                  <span className="bg-white/10 px-2 py-0.5 rounded text-[9px] font-mono tracking-wider text-zinc-400">VERSION 2.4.0</span>
                </div>
                <table className="w-full text-left">
                  <thead className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase border-b border-white/5">
                    <tr>
                      <th className="px-6 py-4 font-normal">FEATURE</th>
                      <th className="px-6 py-4 font-normal">STARTER</th>
                      <th className="px-6 py-4 font-normal">PRO</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs text-zinc-300 divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-5">Max Bitrate</td>
                      <td className="px-6 py-5">128kbps</td>
                      <td className="px-6 py-5 font-bold text-white">Lossless (24-bit)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-5">Model Latency</td>
                      <td className="px-6 py-5">~500ms</td>
                      <td className="px-6 py-5 font-bold text-white">&lt;50ms</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-5">Parallel Tasks</td>
                      <td className="px-6 py-5">1 Task</td>
                      <td className="px-6 py-5 font-bold text-white">Unlimited</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-5">Advanced Exports</td>
                      <td className="px-6 py-5"><X className="h-4 w-4 text-zinc-600" /></td>
                      <td className="px-6 py-5"><Check className="h-4 w-4 text-white" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Order Summary */}
              <div className="bg-[#1a1a1a] border border-white/5 rounded-xl flex flex-col">
                <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                  <h3 className="text-white text-sm font-bold">Order Summary</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-400">Selected Plan</span>
                      <span className="text-white font-medium">Pro</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-400">Billing Cycle</span>
                      <span className="text-white font-medium">Monthly</span>
                    </div>
                    <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                      <span className="text-white text-sm font-bold">Total Due Now</span>
                      <span className="text-2xl font-bold text-[#00e5ff]">₹299.00</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <label className="block text-[9px] text-zinc-500 font-mono tracking-widest uppercase mb-2">PAYMENT METHOD</label>
                    <div className="bg-[#0d0d0d] border border-white/10 rounded-lg p-3 flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors mb-4">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-zinc-400" />
                        <div>
                          <p className="text-white text-xs font-medium">Visa ending in 4242</p>
                          <p className="text-[10px] text-zinc-500">Expires 12/28</p>
                        </div>
                      </div>
                      <span className="text-zinc-600 text-xs">▼</span>
                    </div>
                    <button className="w-full py-3 rounded-lg bg-white hover:bg-zinc-200 text-black text-sm font-bold transition-colors mb-3">
                      Confirm Upgrade
                    </button>
                    <p className="text-[9px] text-zinc-500 text-center leading-relaxed max-w-xs mx-auto">
                      By confirming, you agree to Auralis Terms of Service. Your subscription will renew automatically every month.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Banner */}
            <div className="bg-[#121212] border border-white/5 rounded-xl p-8 w-full text-center">
              <h3 className="text-white font-bold mb-2">Integrated Workspace Efficiency</h3>
              <p className="text-zinc-400 text-sm">
                Experience the next generation of audio engineering with zero-latency collaborative workflows.
              </p>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
