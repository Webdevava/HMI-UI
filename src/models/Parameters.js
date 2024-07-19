// models/Parameter.js
import mongoose from "mongoose";

const parameterSchema = new mongoose.Schema(
  {
    parameters: {
      "Total Dissolved Solids (TDS) Removal": Number,
      "Chlorine Removal": Number,
      "Bacteria Removal": Number,
      "Heavy Metals Removal": Number,
      "Turbidity Reduction": Number,
      Temperature: Number,
      Pressure: Number,
      Humidity: Number,
      "pH Level": Number,
      TDS: Number,
    },
    timestamp: { type: Date, default: Date.now },
  },
  { collection: "data" }
);

parameterSchema.index({ timestamp: -1 });

const Parameter =
  mongoose.models.Parameter || mongoose.model("Parameter", parameterSchema);

export default Parameter;
