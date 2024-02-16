import products from "../products.js";

const getProducts = async (req, res) => {
  res.json(products);
}

const getProductById = async (req, res) => {
  const product = products.find(product => product._id === req.params.id);
  res.json(product);
}

export { getProducts, getProductById };