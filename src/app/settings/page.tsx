"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import Link from "next/link";
import { SlidersHorizontal, User, Key, CreditCard, Mic2, Eye, Copy, Trash2, Award, Download } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-8 relative flex flex-col pb-0">
          
          <div className="max-w-6xl w-full mx-auto flex-1 mb-12">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">System Settings</h1>
              <p className="text-zinc-400 text-sm">
                Configure your Auralis AI workspace, billing, and API integrations.
              </p>
            </div>

            <div className="flex gap-8">
              {/* Left Navigation */}
              <div className="w-64 flex-none space-y-1 sticky top-0 h-fit">
                <button 
                  onClick={() => document.getElementById('general')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <SlidersHorizontal className="h-4 w-4" /> General
                </button>
                <button 
                  onClick={() => document.getElementById('account')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
                >
                  <User className="h-4 w-4" /> Account
                </button>
                <button 
                  onClick={() => document.getElementById('api-keys')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
                >
                  <Key className="h-4 w-4" /> API Keys
                </button>
                <button 
                  onClick={() => document.getElementById('billing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
                >
                  <CreditCard className="h-4 w-4" /> Billing
                </button>
              </div>

              {/* Right Content Area */}
              <div className="flex-1 space-y-8">
                
                {/* 1. General Preferences */}
                <div id="general" className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden scroll-mt-8">
                  <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                    <h3 className="text-white font-medium flex items-center gap-2">
                      <SlidersHorizontal className="h-4 w-4 text-zinc-400" /> General Preferences
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    {/* Auto-save Projects */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white text-sm font-medium mb-1">Auto-save Projects</h4>
                        <p className="text-xs text-zinc-500">Automatically save changes every 30 seconds.</p>
                      </div>
                      <div className="w-9 h-5 bg-zinc-700 rounded-full relative cursor-pointer">
                        <div className="absolute left-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* System Notifications */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white text-sm font-medium mb-1">System Notifications</h4>
                        <p className="text-xs text-zinc-500">Get alerts for finished AI rendering tasks.</p>
                      </div>
                      <div className="w-9 h-5 bg-[#00e5ff]/20 border border-[#00e5ff]/30 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00e5ff] rounded-full shadow-[0_0_5px_#00e5ff]"></div>
                      </div>
                    </div>

                    <hr className="border-white/5" />

                    {/* Default Voice Profile */}
                    <div>
                      <h4 className="text-white text-sm font-medium mb-4">Default Voice Profile</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4 cursor-pointer hover:bg-white/10 transition-colors">
                          <h5 className="text-white text-xs font-bold mb-1 flex items-center gap-2">
                            <Mic2 className="h-3 w-3 text-zinc-400" /> AURORA - 1
                          </h5>
                          <p className="text-[10px] text-zinc-500 font-mono tracking-wide">SMOOTH • NARRATIVE</p>
                        </div>
                        <div className="bg-black border border-white/5 rounded-lg p-4 cursor-pointer hover:bg-white/5 transition-colors">
                          <h5 className="text-white text-xs font-bold mb-1 flex items-center gap-2">
                            <Mic2 className="h-3 w-3 text-zinc-400" /> ZEPHYR - 4
                          </h5>
                          <p className="text-[10px] text-zinc-500 font-mono tracking-wide">BOLD • CORPORATE</p>
                        </div>
                        <div className="bg-black border border-white/5 rounded-lg p-4 cursor-pointer hover:bg-white/5 transition-colors">
                          <h5 className="text-white text-xs font-bold mb-1 flex items-center gap-2">
                            <Mic2 className="h-3 w-3 text-zinc-400" /> NOVA - X
                          </h5>
                          <p className="text-[10px] text-zinc-500 font-mono tracking-wide">ENERGETIC • CREATIVE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Account Information */}
                <div id="account" className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden scroll-mt-8">
                  <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                    <h3 className="text-white font-medium flex items-center gap-2">
                      <User className="h-4 w-4 text-zinc-400" /> Account Information
                    </h3>
                  </div>
                  <div className="p-6 space-y-8">
                    {/* Profile Details */}
                    <div>
                      <h4 className="text-white text-sm font-medium mb-4">Profile Details</h4>
                      <div className="flex gap-6">
                        <div className="h-16 w-16 bg-[#6d28d9] rounded-xl flex items-center justify-center text-white border-2 border-white/10 shrink-0 shadow-inner">
                          <User className="h-8 w-8" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 flex-1">
                          <div>
                            <label className="block text-[10px] text-zinc-500 font-mono tracking-wider uppercase mb-2">DISPLAY NAME</label>
                            <div className="bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-300">
                              {"{{user.display_name}}"}
                            </div>
                          </div>
                          <div>
                            <label className="block text-[10px] text-zinc-500 font-mono tracking-wider uppercase mb-2">EMAIL ADDRESS</label>
                            <div className="bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-300">
                              {"{{user.email}}"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="border-white/5" />

                    {/* Security */}
                    <div>
                      <h4 className="text-white text-sm font-medium mb-4">Security</h4>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white text-sm">Password</p>
                          <p className="text-xs text-zinc-500">Last changed 3 months ago</p>
                        </div>
                        <button className="bg-transparent border border-white/10 hover:bg-white/5 text-zinc-300 px-4 py-2 rounded-lg text-xs font-medium transition-colors">
                          Reset Password
                        </button>
                      </div>
                    </div>

                    <hr className="border-white/5" />

                    {/* Organization */}
                    <div>
                      <h4 className="text-white text-sm font-medium mb-4">Organization</h4>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white text-sm">Workspace Name</p>
                          <p className="text-xs text-zinc-500">{"{{user.organization_name}}"}</p>
                        </div>
                        <span className="bg-white/10 border border-white/10 text-zinc-400 text-[10px] px-2 py-1 rounded font-mono uppercase tracking-wider">
                          {"{{USER.SUBSCRIPTION.TIER}}"}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* 3. API Integrations */}
                <div id="api-keys" className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden scroll-mt-8">
                  <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                    <h3 className="text-white font-medium flex items-center gap-2">
                      <Key className="h-4 w-4 text-zinc-400" /> API Integrations
                    </h3>
                    <button className="bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1 transition-colors shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                      <span className="text-sm leading-none mb-[1px]">+</span> Create New Key
                    </button>
                  </div>
                  
                  <table className="w-full text-left">
                    <thead className="text-[10px] text-zinc-500 font-mono uppercase border-b border-white/5 bg-black">
                      <tr>
                        <th className="px-6 py-3 font-medium">Provider</th>
                        <th className="px-6 py-3 font-medium">API Key</th>
                        <th className="px-6 py-3 font-medium">Status</th>
                        <th className="px-6 py-3 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm text-zinc-300">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4">OpenAI</td>
                        <td className="px-6 py-4 font-mono text-xs flex items-center gap-2">
                          sk-••••••••••••• <Eye className="h-3 w-3 text-zinc-500 cursor-pointer hover:text-white" />
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-white/10 border border-white/10 text-zinc-400 text-[10px] px-2 py-0.5 rounded font-mono uppercase">
                            ACTIVE
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-3 text-zinc-500">
                            <Copy className="h-4 w-4 cursor-pointer hover:text-white transition-colors" />
                            <Trash2 className="h-4 w-4 cursor-pointer hover:text-red-400 transition-colors" />
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4">Anthropic</td>
                        <td className="px-6 py-4 font-mono text-xs flex items-center gap-2">
                          sk-ant-•••••••• <Eye className="h-3 w-3 text-zinc-500 cursor-pointer hover:text-white" />
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-white/10 border border-white/10 text-zinc-400 text-[10px] px-2 py-0.5 rounded font-mono uppercase">
                            ACTIVE
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-3 text-zinc-500">
                            <Copy className="h-4 w-4 cursor-pointer hover:text-white transition-colors" />
                            <Trash2 className="h-4 w-4 cursor-pointer hover:text-red-400 transition-colors" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 4. Billing & Usage */}
                <div id="billing" className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden scroll-mt-8">
                  <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                    <h3 className="text-white font-medium flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-zinc-400" /> Billing & Usage
                    </h3>
                    <span className="bg-white/10 border border-white/10 text-zinc-400 text-[10px] px-2 py-1 rounded font-mono uppercase tracking-wider">
                      {"{{USER.SUBSCRIPTION_TIER}}"}
                    </span>
                  </div>
                  
                  <div className="p-6 space-y-8">
                    {/* Progress Bars */}
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="flex justify-between items-end mb-2">
                          <p className="text-sm text-white">Compute<br/><span className="text-xs text-zinc-500">Units</span></p>
                          <p className="text-[10px] text-zinc-400 font-mono text-right">
                            {"{{usage.compute_current}}"} /<br/>{"{{usage.compute_limit}}"}
                          </p>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-[#00e5ff] w-[40%] rounded-full shadow-[0_0_10px_#00e5ff]"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-end mb-2">
                          <p className="text-sm text-white">Storage</p>
                          <p className="text-[10px] text-zinc-400 font-mono text-right">
                            {"{{usage.storage_current}}"} /<br/>{"{{usage.storage_limit}}"}
                          </p>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#00e5ff] w-[70%] rounded-full shadow-[0_0_10px_#00e5ff]"></div>
                        </div>
                      </div>
                    </div>

                    {/* Pro Banner */}
                    <div className="bg-black border border-white/10 rounded-xl p-5 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/10 p-3 rounded-lg border border-white/5 text-zinc-300">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-white text-sm font-bold mb-1">Unlock Pro Workspace</h4>
                          <p className="text-xs text-zinc-400">Get unlimited compute units, 1TB storage, and priority API access.</p>
                        </div>
                      </div>
                      <Link href="/upgrade" className="bg-white text-black px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-zinc-200 transition-colors shadow-lg">
                        Upgrade to Pro
                      </Link>
                    </div>

                    {/* Recent Invoices */}
                    <div>
                      <h4 className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mb-4">RECENT INVOICES</h4>
                      <table className="w-full text-left">
                        <thead className="text-[10px] text-zinc-500 font-mono uppercase border-b border-white/5 bg-transparent">
                          <tr>
                            <th className="py-2 font-medium">Date</th>
                            <th className="py-2 font-medium">Amount</th>
                            <th className="py-2 font-medium">Status</th>
                            <th className="py-2 font-medium text-right">PDF</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-sm text-zinc-300">
                          <tr className="hover:bg-white/[0.02] transition-colors">
                            <td className="py-3">{"{{invoice.date}}"}</td>
                            <td className="py-3 font-mono text-xs">{"{{invoice.amount}}"}</td>
                            <td className="py-3">
                              <span className="text-[#00e5ff] bg-[#00e5ff]/10 text-[10px] px-2 py-0.5 rounded font-mono uppercase">
                                {"{{INVOICE STATUS}}"}
                              </span>
                            </td>
                            <td className="py-3 text-right">
                              <Download className="h-4 w-4 text-zinc-500 inline-block cursor-pointer hover:text-white transition-colors" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="mt-auto border-t border-white/5 py-4 flex items-center justify-between text-[10px] text-zinc-500 font-mono w-full">
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">System Status</a>
            </div>
            <div>
              © 2023 Auralis AI. Build (system.version)
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
