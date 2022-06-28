import dbConnect from "../../utils/connectDb";
import Product from "../../models/ProductModel";


export default async function createProduct(req, res) {
    dbConnect();
    const { method } = req;
    if (method === "GET") {
        return res.status(400).json({"error": "this route does not support get request"})
    }
    const product = await Prodcut.create(req.body);
    return res.status(201).json(product);
}