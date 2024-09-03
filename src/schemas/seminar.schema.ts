import mongoose from "mongoose";

const SeminarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 50,
    },
    contactNo: {
      type: String,
      required: true,
      max: 15,
    },
    courseId: {
      type: Number,
      required: true,
    },
    attendPosibility: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
      max: 100,
    },
  },
  { timestamps: true }
);

export const Seminar =
  mongoose.models?.Seminar || mongoose.model("Seminar", SeminarSchema);
