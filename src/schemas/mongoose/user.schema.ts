import mongoose from "mongoose";
import { Genders, Roles } from "../configs/enums";

// Users Schema
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: String,
    fatherName: String,
    motherName: String,
    email: String,
    phone: {
      type: String,
      required: true,
    },
    password: String, // Remember to hash this before saving
    nid: String,
    pictureUrl: String,
    permanentAddress: String,
    presentAddress: String,
    dob: Date,
    gender: {
      type: String,
      enum: Object.values(Genders),
    },
    educationLevel: String,
    adminNote: String,
    role: {
      type: String,
      enum: Object.values(Roles),
      default: Roles.UNVERIFIED,
    },
    title: String,
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", UserSchema);
