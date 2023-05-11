import { useDispatch } from "react-redux";
import classes from "./ProductDetail.module.css";
import { cartActions } from "../store/cartSlice";

const ProductDetail = (props) => {
  const dispatch = useDispatch();

  const { description, category, rating, image, title, price } = props.product;
  const id = props.id;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({ id, price, title, rating, image, description })
    );
  };

  return (
    <>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.image}>
        <img alt={category} src={image} />
      </div>

      <div className={classes.content}>
        <span>{category.toUpperCase()}</span>
        <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
        <span>${price.toFixed(2)}</span>
        <span>{rating.rate}⭐️</span>
        <button className={classes.btn} onClick={addToCartHandler}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductDetail;
