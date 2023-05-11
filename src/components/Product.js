import { useEffect, useState } from "react";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const [description, setDescription] = useState();
  useEffect(() => {
    if (props.description.length > 150) {
      setDescription(props.description.substring(0, 147) + "...");
    }
    if (props.description.length < 150) {
      setDescription(props.description);
    }
  }, [props.description]);

  return (
    <Link className={classes.link} to={props.id.toString()}>
      <li className={classes.productItem}>
        <h3>{props.title}</h3>
        <img alt={props.description} src={props.image} />
        <p>{description}</p>
        <span className={classes.rating}>{props.rating.rate} ⭐️</span>
        <span className={classes.price}>{props.price.toFixed(2)}</span>
      </li>
    </Link>
  );
};

export default Product;
