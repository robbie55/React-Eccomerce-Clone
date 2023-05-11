import { useLoaderData, useParams } from "react-router";
import ProductDetail from "../components/ProductDetail";

const ProductPage = () => {
  const product = useLoaderData();
  const { productId } = useParams();

  return <ProductDetail product={product} id={productId} />;
};

export default ProductPage;

export const loader = async ({ request, params }) => {
  const id = params.productId;

  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response.ok) {
    throw Error(response.message);
  }

  const data = await response.json();
  return data;
};
