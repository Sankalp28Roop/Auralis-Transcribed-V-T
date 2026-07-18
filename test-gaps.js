const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function run() {
  const job = await prisma.videoJob.findUnique({ where: { id: "cmrqv1tv10000tqsm0aaoyz3s" } });
  if (job) {
    const t = JSON.parse(job.transcript);
    console.log(`Total Chunks: ${t.length}`);
    let gaps = 0;
    for (let i = 1; i < t.length; i++) {
      if (t[i].start - t[i-1].end > 10) {
        console.log(`Gap found! from ${t[i-1].end} to ${t[i].start}`);
        gaps++;
      }
    }
    console.log(`Total gaps > 10s: ${gaps}`);
  }
}
run();
