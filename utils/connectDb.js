import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("Please make sure to have a mongo uri to connect");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };
    cached.promise = mongoose
      .connect(MONGO_URI, options)
      .then((mongoos) => {
        console.log("connected");
        return mongoos;
      })
      .catch((error) => {
        console.log("this is the error", error);
      });
  }

  cached.conn = await cached.promise;
  console.log("the connection has been established successfully!!");
  return cached.conn;
};

export default dbConnect;
