import { useSelector } from "react-redux";
import classes from "./CartItems.module.css";
import CartItem from "./CartItem";

const CartItems = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      <div className={classes.cartHeader}>
        <h2>Your Cart</h2>
      </div>
      <div className={classes.cart}>
        <ul>
          {cartQuantity === 0 ? (
            <p>Your cart is empty...</p>
          ) : (
            items.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  title: item.title,
                  price: item.price,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  id: item.id,
                  image: item.image,
                  rating: item.rating,
                  description: item.description,
                }}
              />
            ))
          )}
        </ul>
        <h3>Total: ${totalPrice}</h3>
      </div>
    </>
  );
};

export default CartItems;
