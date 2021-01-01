// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initDB from "../../backend/initDB";
import Product from "../../backend/models/product";

initDB();

export default async (req, res) => {
  await getallProducts(req, res);
};

const getallProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
    // console.log('Found Users :', products);
  } catch (err) {
    console.log(err);
  }
};
