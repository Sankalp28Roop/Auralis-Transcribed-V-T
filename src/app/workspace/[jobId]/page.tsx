import { prisma } from "@/lib/prisma";
import { TranscriptWorkspace } from "@/components/TranscriptWorkspace";
import { notFound } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export default async function WorkspacePage({ params }: { params: Promise<{ jobId: string }> }) {
  const resolvedParams = await params;
  const job = await prisma.videoJob.findUnique({
    where: { id: resolvedParams.jobId },
  });

  if (!job) {
    notFound();
  }

  const transcript = JSON.parse(job.transcript as string);

  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] overflow-hidden font-sans text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative">
        <Topbar />
        
        <main className="flex-1 overflow-hidden relative">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-[#00e5ff]/5 to-[#6d28d9]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="h-full w-full p-4 md:p-6 relative z-10 flex flex-col items-center">
            <TranscriptWorkspace 
              url={job.url} 
              transcript={transcript} 
              jobId={job.id}
              job={job}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
