import mongoose from "mongoose";

const SeminarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    courseId: {
      type: Number,
      required: true,
    },
    attendPosibility: {
      type: String,
      required: true,
    },
    address: String,
  },
  { timestamps: true }
);

export const Seminar =
  mongoose.models?.Seminar || mongoose.model("Seminar", SeminarSchema);
