import mongoose from "mongoose";

const StudentScheduleSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    scheduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Schedule",
      required: true,
    },
    enrollmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Enrollment",
    },
  },
  { timestamps: true }
);

export const StudentSchedule =
  mongoose.models?.StudentSchedule ||
  mongoose.model("StudentSchedule", StudentScheduleSchema);
