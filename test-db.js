const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function run() {
  const job = await prisma.videoJob.findUnique({ where: { id: "cmrqv1tv10000tqsm0aaoyz3s" } });
  if (job) {
    const t = JSON.parse(job.transcript);
    console.log(`Chunks: ${t.length}`);
    if (t.length > 0) {
      console.log(`First:`, t[0]);
      console.log(`Last:`, t[t.length - 1]);
    }
  } else {
    console.log("Job not found");
  }
}
run();
