import mongoose from "mongoose";

const startupSchema = new mongoose.Schema({
  date: Date,
  startupName: String,
  industryVertical: String,
  subVertical: String,
  cityLocation: String,
  investorsName: String,
  investmentType: String,
  amountInUSD: Number,
});

const Startups = mongoose.model("Startups", startupSchema);

export default Startups;
