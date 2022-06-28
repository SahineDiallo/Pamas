// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../utils/connectDb";
import Product from "../../models/ProductModel";

// we will get all the products by category
export default async function getProduct(req, res) {
  dbConnect();
  const { method } = req;
  if (method === "GET") {
    const products = await Product.find();
    console.log("Here are the products", products);
    res.status(200).json({ name: "John Doe" });
  }
}
