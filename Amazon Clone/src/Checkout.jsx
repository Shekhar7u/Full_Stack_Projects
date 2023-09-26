// eslint-disable-next-line no-unused-vars
import React from "react";
import "./css/Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct.jsx";

function Checkout() {
  // eslint-disable-next-line no-unused-vars
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
          
          alt=""
        />

        <div className="checkout_title">
          <h3>Hello {user?.email}</h3>
          <h3>Your Shopping Cart</h3>
          {/**checkout products */}
          {cart.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
