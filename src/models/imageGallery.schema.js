import mongoose from "mongoose";

const imageGallerySchema = new mongoose.Schema({
  label: {
    type: String,
    maxlength: 50,
  },
  images: [{ type: String }],
});
export default mongoose.model("ImageGallery", imageGallerySchema);
