import mongoose from "mongoose";
import {
  BookOperation,
  PaymentMethod,
  TransactionRelatedType,
} from "../configs/enums/transaction";

const TransactionSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TransactionCategory",
      required: true,
    },
    relatedType: {
      type: String,
      enum: Object.values(TransactionRelatedType),
      required: true,
    },
    relatedId: mongoose.Schema.Types.ObjectId,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    paymentMethod: {
      type: String,
      enum: Object.values(PaymentMethod),
      default: PaymentMethod.CASH,
    },
    description: String,

    bookDetails: {
      bookId: mongoose.Schema.Types.ObjectId,
      quantity: Number,
      unitPrice: Number,
      operation: {
        type: String,
        enum: Object.values(BookOperation),
      },
    },
  },
  { timestamps: true }
);

export const Transaction =
  mongoose.models?.Transaction ||
  mongoose.model("Transaction", TransactionSchema);
