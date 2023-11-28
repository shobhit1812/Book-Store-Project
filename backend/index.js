import express from "express"; // new method
import { mongodbURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import "dotenv/config";

const PORT = 4500 || process.env.PORT;

const app = express();
// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
// Method 1: Allow all origins with default of cors(*)
app.use(cors());
// Method 2: Allow customs origins
// app.use(
//   cors({
//     origin: "http://localhost/4500",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  //   console.log(req);
  return res.status(234).send("KYA HAAL");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("Successfully connected to database");

    // only if mongodb connected then it will response
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
