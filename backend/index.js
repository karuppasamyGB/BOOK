import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
    origin: "https://book-frontend-vert.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],

  }));


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
