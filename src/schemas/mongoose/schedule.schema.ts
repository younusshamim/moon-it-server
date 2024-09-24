import mongoose from "mongoose";
import { DayOfWeek } from "../configs/enums";

const ScheduleSchema = new mongoose.Schema(
  {
    lab: String,
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    variantId: mongoose.Schema.Types.ObjectId,
    instructorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    daysOfWeek: {
      type: [String],
      enum: Object.values(DayOfWeek),
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Schedule =
  mongoose.models?.Schedule || mongoose.model("Schedule", ScheduleSchema);
