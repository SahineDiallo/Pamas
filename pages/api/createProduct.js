import dbConnect from "../../utils/connectDb";
import nextConnect from "next-connect";
import multer from "multer";
import sharp from "sharp";
import streamifier from "streamifier";
import cloudinary from "../../utils/Cloudinary";

const uploadFile = async (thumbnail) => {
  return new Promise((resolve, reject) => {
    let stream = cloudinary.uploader.upload_stream((error, result) => {
      if (result) {
        const { secure_url } = result;
        resolve(secure_url);
      } else {
        console.log("we got an error error", error);
        reject(error);
      }
    });

    streamifier.createReadStream(thumbnail.buffer).pipe(stream);
  });
  // Need to identify the images before uploads
};
const imagesUrl = () => {
  return new Promise((resolve, result) => {});
};
//multer configuration
const uploads = multer({
  storage: multer.memoryStorage(),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    return res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  // Handle any other HTTP method
  onNoMatch(req, res) {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  },
});
const uploadMiddleware = uploads.fields([
  { name: "p_mainImag", maxCount: 1 },
  { name: "p_img0", maxCount: 1 },
  { name: "p_img1", maxCount: 1 },
  { name: "p_img2", maxCount: 1 },
]);
// Adds the middleware to Next-Connect
apiRoute.use(uploadMiddleware);
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
        //get all the fields data
      })
    );
    console.log(imagesUrl);
    const { name, description, price, category, subCat, color, product_specs } =
      JSON.parse(req.body.data);
    console.log(
      name,
      description,
      price,
      category,
      subCat,
      color,
      product_specs
    );

    return res.status(200).json({ data: "success" });
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
