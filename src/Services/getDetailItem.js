import { getItems } from "./getItems";

export const getDetailItem = async (id) => {
  const response = await fetch("./products.json");
  const itemsList = await response.json();

  const findingProduct = itemsList.find(
    (product) => product.id === parseInt(id)
  );

  return findingProduct;
};
