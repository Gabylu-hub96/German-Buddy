const mongoose = require("mongoose");

const checkListSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Checklist must have a title!"] },
    description: { type: String },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    tasks: [
      {
        title: String,
        description: String,
        isCompleted: Boolean,
      },
    ],
  },
  { timestamps: true }
);

const model = mongoose.model("checkList", checkListSchema);
module.exports = model;
