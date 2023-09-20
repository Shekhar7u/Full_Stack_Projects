import { useStateValue } from "./StateProvider";
import "./css/CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating,hideButton }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    //remove item from cart
    dispatch({
      type: "Remove_From_Cart",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton &&(
          <button onClick={removeFromCart}>Remove from Cart</button>

        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
