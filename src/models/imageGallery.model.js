import imageGallerySchema from "./imageGallery.schema.js";
//for retrieving images from database
export const getLabelledImage = (filter) => {
  return imageGallerySchema.find(filter);
};
//for posting images to database
export const putLabelledImage = (dataObj) => {
  return imageGallerySchema(dataObj).save();
};
