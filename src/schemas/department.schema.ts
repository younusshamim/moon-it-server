import mongoose, { InferSchemaType } from "mongoose";
import message from "../configs/message";

// Departments Schema
const DepartmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, message.validation.required],
      unique: [true, message.validation.unique],
    },
    banglaName: {
      type: String,
      required: [true, message.validation.required],
      unique: [true, message.validation.unique],
    },
    iconUrl: {
      type: String,
      required: [true, message.validation.required],
    },
    description: String,
    displayOrder: Number,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export type DepartmentDto = InferSchemaType<typeof DepartmentSchema>;

export const Department =
  mongoose.models?.Department || mongoose.model("Department", DepartmentSchema);
