const mongoose = require("mongoose");

const checkListTemplateSchema = new mongoose.Schema(
  {
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

const model = mongoose.model("CheckListTemplate", checkListTemplateSchema);
module.exports = model;
