const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function run() {
  const job = await prisma.videoJob.findUnique({ where: { id: "cmrqv1tv10000tqsm0aaoyz3s" } });
  if (job) {
    const t = JSON.parse(job.transcript);
    const fullText = t.map(x => x.text).join(' ');
    console.log(`Chunks: ${t.length}`);
    console.log(`Full Text Length: ${fullText.length} characters`);
    console.log(`First 100: ${fullText.substring(0, 100)}`);
    console.log(`Last 100: ${fullText.substring(fullText.length - 100)}`);
  }
}
run();
