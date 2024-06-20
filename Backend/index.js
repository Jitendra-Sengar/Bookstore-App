import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

// Connect to mongodb
try {
  mongoose.connect(URI);
  console.log("connected to mongodb");
} catch (error) {
  console.log("Error:", error);
}

//defining routes
app.use("/book", bookRoute);
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
