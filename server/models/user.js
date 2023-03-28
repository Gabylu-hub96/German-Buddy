const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
    userName: {
      type: String,
      required: [true, "User Name is required!"],
      unique: true,
    },
    firstName: { type: String, required: [true, "First Name is Required!"] },
    lastName: { type: String, required: [true, "Last Name is Required!"] },
    age: { type: Number, required: [true, "Age is Required!"] },
    nationality: { type: String, required: [true, "Nationality is Required!"] },
    visaStatus: {
      type: String,
      enum: ["approved", "pending", "denied"],
      required: [true, "Visa status is required!"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "Password must be at least 8 characters"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is Required!"],
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: [true, "Phone Number is required"],
    },
    category: {
      type: String,
      enum: ["student", "family", "professional"],
      required: [true, "Category is required!"],
    },
    progressPercentage: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("User", userSchema);
module.exports = model;
