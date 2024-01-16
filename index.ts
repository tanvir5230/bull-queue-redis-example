import Queue from "bull";

const queue = new Queue("myqueue");

queue.add({ name: "John Doe" }, { delay: 4000 });
queue.add({ name: "Tanvir Doe" });

queue.process(async (job, done) => {
  console.log(`Processing job: ${job.data.name}`);
  done();
});
