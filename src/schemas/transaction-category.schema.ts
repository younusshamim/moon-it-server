import mongoose from "mongoose";
import { TransactionCategoryType } from "../configs/enums/transaction";

const TransactionCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: Object.values(TransactionCategoryType),
      required: true,
    },
    description: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const TransactionCategory =
  mongoose.models?.TransactionCategory ||
  mongoose.model("TransactionCategory", TransactionCategorySchema);
