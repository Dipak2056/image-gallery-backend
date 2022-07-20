import "dotenv/config";
import mongoose from "mongoose";
export const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_CLIENT);
    conn && console.log("mongodb is connected with folder name image_gallery");
  } catch (error) {
    console.log(error);
  }
};
