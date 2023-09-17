import React from "react";
import "./css/Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>CheckOut {<Link to="/checkout">{cart?.length} items</Link>}</h1>
        {/**Payment section - delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>113 BHU</p>
            <p>Varanasi, Uttar Pradesh</p>
          </div>
        </div>
        {/**Payment section - Review Items*/}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {cart.map(item => (
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
        {/**Payment section - Payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_detail">{/**strip magic will go */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
