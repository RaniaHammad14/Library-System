import { Schema, model } from "mongoose";

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: String,

    birthDate: {
      type: Date,
    },
    bookId: {
      type: Schema.Types.ObjectId,
      ref: "book",
    },
  },
  { timestamps: true }
);

const authorModel = model("author", authorSchema);
export default authorModel;
