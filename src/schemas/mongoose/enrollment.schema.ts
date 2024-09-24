import mongoose from "mongoose";
import { EnrollmentStatus } from "../configs/enums";

const EnrollmentSchema = new mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    variantId: mongoose.Schema.Types.ObjectId,
    enrollmentDate: Date,
    appliedFee: Number,
    appliedDiscount: {
      type: { type: String },
      value: Number,
    },
    status: {
      type: String,
      enum: Object.values(EnrollmentStatus),
      default: EnrollmentStatus.ACTIVE,
    },
  },
  { timestamps: true }
);

export const Enrollment =
  mongoose.models?.Enrollment || mongoose.model("Enrollment", EnrollmentSchema);
