import mongoose from "mongoose";

const CourseInstructorSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    instructorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const CourseInstructor =
  mongoose.models?.CourseInstructor ||
  mongoose.model("CourseInstructor", CourseInstructorSchema);
