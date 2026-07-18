import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { FileText, PlayCircle, AudioLines, Zap } from "lucide-react";
import { DashboardClient } from "@/components/dashboard/DashboardClient";
import { prisma } from "@/lib/prisma";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

export default async function Dashboard() {
  // Fetch real data with zero defaults
  const jobs = await prisma.videoJob.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  const liveJobsCount = jobs.filter((j) => j.status !== "COMPLETED").length;

  const latestAudioJob = await prisma.audioSynthesisJob.findFirst({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-8 relative">
          {/* Subtle background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-[300px] bg-[#00e5ff]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto space-y-12 relative z-10">
            {/* Interactive Hero Section */}
            <DashboardClient />

            {/* Content Grid */}
            <div className="flex flex-col gap-6 items-center w-full">
              
              {/* Recent Activity Table */}
              <div className="w-full max-w-5xl bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden">
                <div className="p-5 border-b border-white/5 flex items-center justify-between">
                  <h3 className="text-white font-medium flex items-center gap-2">
                    <FileText className="h-4 w-4 text-[#00e5ff]" />
                    Recent Activity
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className={`h-2 w-2 rounded-full ${liveJobsCount > 0 ? 'bg-[#00e5ff] animate-pulse' : 'bg-zinc-600'}`}></span>
                    Live Jobs: {liveJobsCount}
                  </div>
                </div>
                
                <table className="w-full text-sm text-left">
                  <thead className="text-[10px] text-zinc-500 font-mono uppercase bg-white/[0.02]">
                    <tr>
                      <th className="px-5 py-4 font-medium">Job Title / Media</th>
                      <th className="px-5 py-4 font-medium">Status</th>
                      <th className="px-5 py-4 font-medium">Progress</th>
                      <th className="px-5 py-4 font-medium">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs text-zinc-300 font-mono">
                    {jobs.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-5 py-8 text-center text-zinc-500">
                          No recent activity. Process a URL to begin.
                        </td>
                      </tr>
                    ) : (
                      jobs.map((job) => (
                        <tr key={job.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-5 py-4">
                            <Link href={`/workspace/${job.id}`} className="flex items-center gap-4 max-w-[350px] truncate group">
                              {job.isYouTube ? (
                                (() => {
                                  const match = job.url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
                                  const videoId = (match && match[2].length === 11) ? match[2] : null;
                                  return videoId ? (
                                    <div className="h-10 w-16 bg-black rounded shrink-0 overflow-hidden relative border border-white/10 group-hover:border-[#00e5ff]/50 transition-colors">
                                      <img 
                                        src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} 
                                        alt="Thumbnail"
                                        className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                                      />
                                    </div>
                                  ) : (
                                    <div className="bg-white/10 group-hover:bg-[#00e5ff]/20 p-2.5 rounded text-zinc-300 group-hover:text-[#00e5ff] shrink-0 transition-colors">
                                      <PlayCircle className="h-4 w-4" />
                                    </div>
                                  );
                                })()
                              ) : (
                                <div className="bg-white/10 group-hover:bg-[#00e5ff]/20 p-2.5 rounded text-zinc-300 group-hover:text-[#00e5ff] shrink-0 transition-colors">
                                  <FileText className="h-4 w-4" />
                                </div>
                              )}
                              <div className="truncate">
                                <div className="font-sans font-medium text-white text-sm truncate group-hover:text-[#00e5ff] transition-colors" title={job.url}>
                                  {job.rawText ? `"${job.rawText.replace(/\n/g, ' ').split(' ').slice(0, 6).join(' ')}..."` : 'Processing Media...'}
                                </div>
                                <div className="text-[10px] text-zinc-500 truncate">
                                  ID: {job.id.slice(-6)} • {job.url}
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="px-5 py-4">
                            {job.status === 'COMPLETED' ? (
                              <div className="text-emerald-400 font-medium flex items-center gap-1.5">
                                <span className="h-3 w-3 rounded-full border-2 border-emerald-400 flex items-center justify-center text-[8px]">✓</span>
                                Ready
                              </div>
                            ) : (
                              <div className="text-[#00e5ff] font-medium flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff] animate-pulse"></span>
                                {job.status}
                              </div>
                            )}
                          </td>
                          <td className="px-5 py-4">
                            <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                              {job.status === 'COMPLETED' ? (
                                <div className="h-full bg-emerald-400 w-full rounded-full"></div>
                              ) : (
                                <div className="h-full bg-[#00e5ff] w-[50%] rounded-full shadow-[0_0_10px_#00e5ff]"></div>
                              )}
                            </div>
                          </td>
                          <td className="px-5 py-4 text-zinc-500">
                            {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Right Sidebar Widgets */}
              <div className="space-y-6 w-full max-w-5xl">
                
                {/* Voice Clone Active */}
                {latestAudioJob && (
                  <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-[#00e5ff]/20 p-2.5 rounded-lg border border-[#00e5ff]/30">
                        <AudioLines className="h-6 w-6 text-[#00e5ff]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">Voice Clone: Active</h4>
                        <p className="text-[#00e5ff] text-[10px] font-mono uppercase flex items-center gap-1 mt-0.5">
                          <span className="h-1.5 w-1.5 bg-[#00e5ff] rounded-full animate-pulse"></span>
                          Profile: {latestAudioJob.voiceProfile}
                        </p>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm italic border-l-2 border-white/10 pl-3 mb-5">
                      "High-fidelity voice synthesis engine ready for real-time translation and overdubbing."
                    </p>
                    <button className="w-full bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-mono uppercase tracking-wider py-2.5 rounded-lg border border-white/10 transition-colors flex items-center justify-center gap-2">
                      Configure AI Voice Engine <Zap className="h-3 w-3" />
                    </button>
                  </div>
                )}

              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
