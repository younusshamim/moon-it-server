import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: String,
    isbn: String,
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    purchasePrice: {
      type: Number,
      default: 0,
    },
    sellingPrice: {
      type: Number,
      default: 0,
    },
    currentStock: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Book = mongoose.models?.Book || mongoose.model("Book", BookSchema);
