import mongoose from "mongoose";

// Departments Schema
const DepartmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    iconUrl: String,
    description: String,
    displayOrder: Number,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Department =
  mongoose.models?.Department || mongoose.model("Department", DepartmentSchema);
