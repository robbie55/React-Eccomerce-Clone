import Product from "./Product";
import { useSelector } from "react-redux";

import classes from "./ProductsList.module.css";
import { useEffect, useState } from "react";

const ProductsList = (props) => {
  const [searchKey, setSearchKey] = useState();
  const key = useSelector((state) => state.search.searchKey);

  useEffect(() => {
    setSearchKey(key);
  }, [key]);

  return (
    <>
      <div className={classes.productsHeader}>
        <h2>Products</h2>
      </div>
      <div className={classes.products}>
        <ul>
          {props.products
            .filter((product) =>
              !searchKey || searchKey.trim().length === 0
                ? !null
                : product.description.includes(searchKey) ||
                  product.title.includes(searchKey)
            )
            .map((product) => {
              return (
                <Product
                  key={product.id}
                  id={product.id}
                  description={product.description}
                  category={product.category}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                  title={product.title}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default ProductsList;
