import { NextResponse } from "next/server";
import { ProductSchema } from "../utils/utils";
import { getToken } from "next-auth/jwt";

const middleware = async (req, res, next) => {
  const { pathname, origin } = req.nextUrl;
  const secret = process.env.JWT_SECRET;
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const session = await getToken({ req, secret, raw: true });

  if (pathname.toString().startsWith("/products")) {
    if (!req.url.includes("/api/auth") && !session)
      return NextResponse.rewrite(`${origin}`);
  }

  if (req.method === "POST" && pathname.toString().startsWith("/products")) {
    console.log("ok in the try block");

    try {
      console.log("validating");
      const data = await ProductSchema.validate(JSON.parse(req.body.data));
      console.log("validation done");
      return next();
    } catch (errors) {
      return res.status(400).json(errors);
    }
  }
};

export default middleware;


