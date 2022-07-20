import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { dbConnect } from "./src/config/db.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); //parse req.body;
app.use(cors());
app.use(morgan("dev"));
app.use(helmet({ crossOriginResourcePolicy: false }));

//connect to the database
dbConnect();

//if nothing in the server got hit
app.get("/", (req, res, next) => {
  res.json({
    message: "you have reached the api end point",
  });
});

//bound api with the port to serve on the internet
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is running on PORT ${PORT}`);
});
