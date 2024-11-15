import mongoose from "mongoose";
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: string,
  description: string,
  startTime: string,
  endTime: string,
  startDate: string,
  endDate: string,
  location: {
    lat: Number,
    long: Number,
  },
  address: string,
  createdBy: { type: mongoose.Types.ObjectId, ref: "Users" },
  going: [{type: mongoose.Types.ObjectId, ref: "Users"}],
});

export const eventModal = mongoose.model("Events", eventSchema);
