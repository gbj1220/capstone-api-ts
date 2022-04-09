import express from "express";
import { sayHello, signUp } from "../controller/userController";

export const router = express.Router();

router.get("/", sayHello);
router.post("/sign-up", signUp);
