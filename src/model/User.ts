import { Schema, model } from "mongoose";

interface User {
  email: {
    type: string;
  };
  username: {
    type: string;
  };
  password: {
    type: string;
  };
  recipes: string[];
}

const userSchema = new Schema<User>({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  recipes: [{ type: Schema.Types.ObjectId, ref: "Recipes" }],
});

export const User = model<User>("User", userSchema);
