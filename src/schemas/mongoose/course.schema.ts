import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: String,
    description1: String,
    description2: String,
    imageUrl: String,
    regularFee: {
      type: Number,
      required: true,
    },
    regularDiscount: {
      type: { type: String },
      value: Number,
      endDate: Date,
    },
    variants: [
      {
        name: String,
        regularFee: Number,
        regularDiscount: {
          type: { type: String },
          value: Number,
          endDate: Date,
        },
      },
    ],
    features: [
      {
        title: String,
        description: String,
        iconUrl: String,
      },
    ],
    displayOrder: Number,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Course =
  mongoose.models?.Course || mongoose.model("Course", CourseSchema);
