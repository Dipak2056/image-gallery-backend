import express from "express";
import {
  getLabelledImage,
  putLabelledImage,
} from "../models/imageGallery.model.js";
const router = express.Router();

//post image with the label
router.post("/", async (req, res) => {
  const data = req.body;
  const result = await putLabelledImage(data);
  result &&
    res.json({
      status: "success",
      message: "image uploaded successfully",
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
