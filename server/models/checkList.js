const mongoose = require("mongoose");

const checkListSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: String,
      enum: ["student", "family", "professional"],
      required: [true, "Category is required!"],
    },
    documents: [
      {
        title: String,
        description: String,
        isCompleted: Boolean,
      },
    ],
    steps: [
      {
        title: String,
        description: String,
        isCompleted: Boolean,
      },
    ],
  },
  { timestamps: true }
);

const model = mongoose.model("CheckList", checkListSchema);
module.exports = model;
