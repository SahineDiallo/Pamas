import dbConnect from "../../../utils/connectDb";
import Product from "../../../models/ProductModel";

export default async function (req, res) {
  dbConnect();
  const { method } = req;
  const product_id = req.query.productId;
  if (method === "PUT") {
    try {
      const product = Product.findOne({ _id: `${product_id}` });
    } catch (err) {}
  }
  if (method === "DELETE") {
    console.log("the method is delete");
    try {
      console.log("deleting the product....");
      await Product.deleteOne({ _id: `${product_id}` });
      console.log("the product should be deleted from now.");
      return res.status(200).json({ message: "product deleted successfully!" });
    } catch (err) {
      console.log("error", err);
      return res
        .status(502)
        .json({ error: "Somethiing went wrong. Please try later" });
    }
  }
}
