import express from "express";
import { mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";
const PORT = process.env.PORT || 5555;
const app = express();

app.use(express.json());

app.use(cors({  }));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack tutorial");
});

app.use("/books", bookRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
