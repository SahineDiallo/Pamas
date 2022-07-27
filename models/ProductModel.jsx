const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    default: null,
  },
  specifications: {
    type: {
      processor: String,
      battery: Number,
      status: String,
      system: String,
      ram: Number,
      brand: String,
    },
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: [String],
    required: true,
    validate: [arrayLimit, "No outputs"],
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});
function arrayLimit(val) {
  console.log("array value", val);
  return (val.length = 4);
}

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
