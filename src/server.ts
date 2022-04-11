import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router as userRoutes } from "./router/userRoutes";
import "dotenv/config";

const connect_db = () => {
  if (!process.env.MONGO_URL) {
    process.exit(1);
  }
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("MONGO DB CONNECTED");
    })
    .catch((err) => {
      console.log(err);
    });
};
// Call function to connect to MongoDB.
connect_db();

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Application started on port: ${PORT} `);
});
