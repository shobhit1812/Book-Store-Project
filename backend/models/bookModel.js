import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      // we don;t need id here bcos database handle it will automatically
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Books", bookSchema);
