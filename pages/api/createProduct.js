import dbConnect from "../../utils/connectDb";
import nextConnect from "next-connect";
import multer from "multer";
import sharp from "sharp";
import streamifier from "streamifier";
import cloudinary from "../../utils/Cloudinary";
import Product from "../../models/ProductModel";
import validate from "./_middleware/middleware";
import { getSession } from "next-auth/react";

const uploadFile = async (thumbnail) => {
  // return new Promise((resolve, reject) => {
  //   let stream = cloudinary.uploader.upload_stream((error, result) => {
  //     if (result) {
  //       const { secure_url } = result;
  //       resolve(secure_url);
  //     } else {
  //       console.log("we got an error error", error);
  //       reject(error);
  //     }
  //   });

  //   streamifier.createReadStream(thumbnail.buffer).pipe(stream);
  // });
  // Need to identify the images before uploads
  return "new url";
};
//multer configuration
const uploads = multer({
  storage: multer.memoryStorage(),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    return res.status(501).json({
      error: `Sorry, something wrong Happened! Please try later ${error.message}`,
    });
  },
  // Handle any other HTTP method
  onNoMatch(req, res) {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  },
});
const uploadMiddleware = uploads.fields([
  { name: "images.0._value", maxCount: 1 },
  { name: "images.1._value", maxCount: 1 },
  { name: "images.2._value", maxCount: 1 },
  { name: "images.3._value", maxCount: 1 },
]);
// Adds the middleware to Next-Connect
apiRoute.use(uploadMiddleware);
apiRoute.use(validate);

// Process a POST request
apiRoute.post(async (req, res) => {
  dbConnect();
  try {
    const imagesUrl = [];
    await Promise.all(
      Object.values(req.files).map(async (file) => {
        const _file = file[0];
        const thumbnail = {
          fieldname: _file.fieldname,
          originalname: `thumbnail_${_file.originalname}`,
          encoding: _file.encoding,
          mimetype: _file.mimetype,
          buffer: await sharp(_file.buffer)
            .resize({ width: 350, height: 350 })
            .webp()
            .toBuffer(),
        };
        const secure_url = await uploadFile(thumbnail);
        imagesUrl.push(secure_url);
      })
    );
    const product_data = JSON.parse(req.body.data);
    product_data["images"] = imagesUrl;

    //get the current user

    const {
      name,
      description,
      price,
      category,
      subCategory,
      color,
      specifications,
      images,
    } = product_data;

    const created_product = await Product.create(product_data);
    return res.status(200).json({ data: "success", product: created_product });
  } catch (error) {
    console.log("error from sharp images", error);
  }
});
export default apiRoute;
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
