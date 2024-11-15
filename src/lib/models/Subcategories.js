import mongoose from "mongoose";
const { Schema } = mongoose;

const subcategorySchema = new Schema({
  title: string,
  description: string,
 thumbnail: string,
 category: { type: mongoose.Types.ObjectId, ref: "Categories" },


});

export const SubCategoryModal = mongoose.model("Subcategories", subcategorySchema);
