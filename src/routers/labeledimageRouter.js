import express from "express";
import {
  getLabelledImage,
  putLabelledImage,
} from "../models/imageGallery.model.js";
const router = express.Router();

//multer setup
import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let error = null;
    cb(error, "public/img/products");
  },
  filename: (req, file, cb) => {
    const fullFileName = Date.now() + "-" + file.originalname;
    cb(null, fullFileName);
  },
});
const uploadmiddleWare = multer({ storage });

//post image with the label
router.post("/", uploadmiddleWare.array("images", 5), async (req, res) => {
  const files = req.files;
  const images = files.map((img) => img.path);
  console.log(images);
  const result = await putLabelledImage({ ...req.body, images });
  result &&
    res.json({
      status: "success",
      message: "images uploaded successfully",
      result,
    });
});
//get image with the label
router.get("/", async (req, res) => {
  try {
    const data = await getLabelledImage();
    data &&
      res.json({
        status: "success",
        message: "images retrieved successfully",
        data,
      });
  } catch (error) {
    console.log(error);
  }
});

export default router;
