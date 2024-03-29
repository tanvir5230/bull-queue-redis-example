import express, { Request, Response } from "express";
import { executeSampleJobs } from "./example";

const app = express();
const port = 6000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
  executeSampleJobs();
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
