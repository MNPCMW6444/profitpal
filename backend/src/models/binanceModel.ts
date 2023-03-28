import mongoose from "mongoose";

const binanceModal = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, required: true },
    key: {
      type: String,
      required: true,
    },
    secret: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("binance", binanceModal);
