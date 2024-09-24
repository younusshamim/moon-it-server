import mongoose from "mongoose";
import { Roles } from "../../configs/enums/user";

const RolePermissionSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: Object.values(Roles),
      required: true,
    },
    permissions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Permission",
      },
    ],
  },
  { timestamps: true }
);

export const RolePermission =
  mongoose.models?.RolePermission ||
  mongoose.model("RolePermission", RolePermissionSchema);
