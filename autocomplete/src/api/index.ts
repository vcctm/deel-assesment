import axios from 'axios';

const dummyProductsUrl = 'https://dummyjson.com/products';

export const fetchProducts = async () => {
  const res = await axios.get(dummyProductsUrl);
  return res.data.products;
};
