import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import cookieParser from "cookie-parser";
import VC from "./models/vcModel";
import Founder from "./models/founderModel";

const app = express();
const port = process.env.PORT || 6555;

dotenv.config();

let mainDbStatus = false;

const connectToDBs = () => {
  try {
    mongoose.connect("" + process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    mainDbStatus = true;
  } catch (e) {
    console.error(e);
    mainDbStatus = false;
  }
  if (!mainDbStatus) setTimeout(connectToDBs, 180000);
  else console.log("connected to mongo");
};

connectToDBs();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5999",
      "https://caphub.flexboxtorchy.com",
      "https://app.profitpal.com",
    ],
    credentials: true,
  })
);

app.use(cookieParser());

app.listen(port, () => console.log(`Server started on port: ${port}`));

app.get("/areyoualive", (_, res) => res.json({ answer: "yes" }));

app.post("/savevc", async (req, res) => {
  try {
    const { data } = req.body;
    const newSurvey = new VC({ data });
    const mres = await newSurvey.save();
    res.json(mres);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
});
app.post("/savefounder", async (req, res) => {
  try {
    const { data } = req.body;
    const newSurvey = new Founder({ data });
    const mres = await newSurvey.save();
    res.json(mres);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
});
