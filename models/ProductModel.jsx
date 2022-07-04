const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
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
  },
  specifications: {
    processor: {
      type: String,
      required: true,
    },
    battery: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    Operating_System: {
      type: String,
      required: true,
    },
    ram: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: Array,
    required: true,
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

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
