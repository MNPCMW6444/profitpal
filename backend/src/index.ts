import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 6555;

dotenv.config();

let mainDbStatus = false;

const connectToDBs = () => {
  mongoose.connect(
    "" + process.env.MONGO,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions,
    (err) => {
      if (err) return console.error(err);
      console.log("Connected to Main MongoDB");
      mainDbStatus = true;
    }
  );

  if (!mainDbStatus) setTimeout(connectToDBs, 180000);
};

connectToDBs();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5999"],
    credentials: true,
  })
);

app.use(cookieParser());

app.listen(port, () => console.log(`Server started on port: ${port}`));

app.get("/areyoualive", (_, res) => res.json({ answer: "yes" }));
