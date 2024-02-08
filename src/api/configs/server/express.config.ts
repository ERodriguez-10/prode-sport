import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import matchRouter from "../../routes/match.routes";

const expressServer: Application = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  allowedHeaders:
    "Content-Type, Authorization, X-Request-With, Accept, Origin, Access-Control-Allow-Headers",
};

expressServer.use(cors(corsOptions));

expressServer.use(express.json());
expressServer.use(express.urlencoded({ extended: true }));

expressServer.use(cookieParser("123456"));

expressServer.use("/api", matchRouter);

export default expressServer;
