import mongoose from "mongoose";

const vcSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  firmName: { type: String, required: true },
  investmentFocus: String,
  industriesOfInterest: [String],
  investmentSize: Number,
  preferredCompanyStage: String,
  preferredMetric: String,
  portfolioCompanies: [String],
});

const VC = mongoose.model("VC", vcSchema);

export default VC;
