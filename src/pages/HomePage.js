import { useLoaderData } from "react-router";
import ProductsList from "../components/ProductsList";

const HomePage = () => {
  const products = useLoaderData();
  return <ProductsList products={products} />;
};

export default HomePage;

export const loader = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw Error(response.message);
  }

  const data = await response.json();
  return data;
};
