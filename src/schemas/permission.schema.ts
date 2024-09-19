import mongoose from "mongoose";

const PermissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
  },
  { timestamps: true }
);

export const Permission =
  mongoose.models?.Permission || mongoose.model("Permission", PermissionSchema);
