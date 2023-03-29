const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
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

//Virtual field (this will be in the model but not on the DB level)
// NOT SAVED IN THE DB!

UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Passwords must match!");
  }
  next();
});
UserSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 8);
    console.log("HASHED PASSWORD", hashedPassword);
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.log("ERROR", "hashing error");
    next(error);
  }
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
