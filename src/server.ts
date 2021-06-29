import express, { NextFunction, Request, Response } from "express";
//types/express to types the modules
import "express-async-errors"; //always is used after express import
import { router } from "./routes";
import "reflect-metadata";

import "./database";

const app = express();
app.use(express.json());
app.use(router);

//Always after of routes
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).json({
      error: error.message,
    });
  }
  return res
    .status(500)
    .json({ status: "error", error: "Internal Server Error" });
});

app.listen(3333, () => console.log("Server is running"));
