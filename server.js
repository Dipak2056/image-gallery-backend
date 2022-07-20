import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { dbConnect } from "./src/config/db.js";
import path from "path";

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
//Routers
import labeledimageRouter from "./src/routers/labeledimageRouter.js";
app.use("/image-upload", labeledimageRouter);

//server static content
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

//bound api with the port to serve on the internet
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is running on PORT ${PORT}`);
});
