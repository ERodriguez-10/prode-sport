import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import matchRouter from "./api/routes/match.routes";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use("/api", matchRouter);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
