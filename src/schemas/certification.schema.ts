import mongoose from "mongoose";
import { CertificationStatus } from "../configs/enums";

const CertificationSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    variantId: mongoose.Schema.Types.ObjectId,
    registrationDate: Date,
    registrationFee: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(CertificationStatus),
    },
    certificateDelivered: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Certification =
  mongoose.models?.Certification ||
  mongoose.model("Certification", CertificationSchema);
