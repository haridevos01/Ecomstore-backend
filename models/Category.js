import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
     
    },
    slug: {
      type: String,
      
      unique: true
    },
    description: {
      type: String
    }
  },
  { timestamps: true }
);
export default mongoose.model("Category", CategorySchema);