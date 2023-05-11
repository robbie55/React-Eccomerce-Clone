import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const CartItem = (props) => {
  const [productDescription, setProductDescription] = useState();
  const dispatch = useDispatch();

  const { id, title, quantity, price, total, image, rating, description } =
    props.item;
  useEffect(() => {
    if (description.length > 150) {
      setProductDescription(description.substring(0, 147) + "...");
    } else {
      setProductDescription(description);
    }
  }, [description]);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({ id, price, title, rating, image, description })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeFromCart({ id }));
  };

  return (
    <>
      <span className={classes.quantity}>x{quantity}</span>
      <span className={classes.total}>${total.toFixed(2)}</span>

      <div className={classes.cartItem}>
        <li>
          <Link className={classes.link} to={`/${id}`}>
            <h3>{title}</h3>
            <img alt={description} src={image} />
            <p>{productDescription}</p>
          </Link>
          <div className={classes.cartFooter}>
            <span className={classes.rating}>{rating.rate} ⭐️</span>
            <h3 onClick={addToCartHandler}>+</h3>
            <h3 onClick={removeFromCartHandler}>-</h3>
            <span className={classes.price}>${price.toFixed(2)}</span>
          </div>
        </li>
      </div>
    </>
  );
};

export default CartItem;
