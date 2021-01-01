import mongoose, { models } from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.models.product ||
  mongoose.model("product", productsSchema, "art");
