import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import mongoose from "mongoose";
import taskRouter from "./routes/taskRoutes";

const app = express(); // was to start up the server in express

const PORT = 6741;

// converts every requests to json (javascript format)
app.use(express.json());

// Every ENDPOINT must start with /api/tasks is handled by task router
// .use is an inbuilt middleware (middle man) that can be used to convert, check and validate requests
app.use("/api/tasks", taskRouter);

const startServer = async () => {
  await mongoose.connect(
    "mongodb+srv://oluwademilad3_db_user:pTV4TuLbFLC8e@cluster0.puzfu3w.mongodb.net/",
  );

  console.log("Database connected successfully");

  app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
};

startServer();

// oluwademilad3_db_user
// p0ainmH8QMMkfrck
// mongodb+srv://oluwademilad3_db_user: p0ainmH8QMMkfrck@cluster0.puzfu3w.mongodb.net/
