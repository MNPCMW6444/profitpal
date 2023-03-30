import mongoose from "mongoose";

const surveyModal = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, required: true },
    data: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("survey", surveyModal);
