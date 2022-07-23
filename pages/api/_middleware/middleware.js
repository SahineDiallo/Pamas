import React from "react";

const validateProduct = (req, res, next) => {
  console.log("middleware data body ", req.body.data );

  return res.status(500).json({ error: "this is the desired  message" });
};

export default validateProduct;
