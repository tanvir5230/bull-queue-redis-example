import Queue from "bull";

export function executeSampleJobs() {
  const queue = new Queue("myqueue");

  queue.add({ name: "John Doe" });
  queue.add({ name: "Tanvir Doe" });
  queue.process(async (job, done) => {
    console.log(`Processing job: ${job.data.name}`);
    done();
  });
}
