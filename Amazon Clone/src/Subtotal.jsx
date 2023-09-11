import './css/Subtotal.css'
import CurrencyFormate from "react-currency-format"

function Subtotal() {
  return( 
  <div className="subtotal">
    <CurrencyFormate
      renderText={(value)=>(
        <>
        <p>
            Subtotal (`{value}` items):<strong>0</strong>
        </p>
        <small className="subtotal_gift">
            <input type="checkbox"  />
            This item order a gift
        </small>
        </>
  )}
    decimalScale={2}
    value={0}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"₹"}
    />

    <button>Proceed to Checkout</button>
  </div>
  );
}

export default Subtotal;
