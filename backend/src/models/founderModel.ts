import mongoose from "mongoose";

const founderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  companyName: { type: String, required: true },
  companyDescription: String,
  industry: String,
  companyStage: String,
  fundingAmount: Number,
  equityOffered: Number,
  pitchDeckURL: String,
  mrr: Number,
  cac: Number,
  ltv: Number,
  churnRate: Number,
  grossMargin: Number,
});

const Founder = mongoose.model("Founder", founderSchema);

export default Founder;
