import { Request, Response } from "express";
import { User } from "../model/User";
import bcrypt from "bcryptjs";

export const signUp = async (req: Request, res: Response) => {
  try {
    // Setting up salt to encrypt the password given to function.
    const salted = await bcrypt.genSalt(10);
    const { email, username, password } = req.body;
    console.log("email: " + email);
    console.log("username " + username);
    console.log("password " + password);

    // Hashing password to fully encrypt it.
    const hashedPassword = await bcrypt.hash(password, salted);
    console.log("hashedPassword " + hashedPassword);

    // Creating a new user using the User model.
    const createdUser = new User({
      email,
      username,
      password: hashedPassword,
    });
    res.json({ createdUser });
  } catch (err) {
    console.log(err);
  }
};
