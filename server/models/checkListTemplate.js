const mongoose = require("mongoose");

const checkListTemplateSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Checklist must have a title!"] },
    description: { type: String },
    category: {
      type: String,
      enum: ["student", "family", "professional"],
      required: [true, "Category is required!"],
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

const model = mongoose.model("CheckListTemplate", checkListTemplateSchema);
module.exports = model;
