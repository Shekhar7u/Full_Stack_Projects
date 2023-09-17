import "./css/Subtotal.css";
import React from "react";
// import CurrencyFormate from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./Reducer";

function Subtotal() {
  const [{ cart }] = useStateValue();

  //function to calculate the total price for
  const calculateTotal = () => {
    let total = 0;
    for (const item of cart) {
      total += item.price;
    }
    return total.toFixed(2);
  };
  return (
    <div className="subtotal">
      <p>
        Subtotal ({cart.length} items):<strong>₹{calculateTotal()}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" />
        This item order a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
